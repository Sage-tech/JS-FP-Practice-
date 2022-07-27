


// password = "thisisbeautiful"
// vowels = {'a', 'e', 'i', 'o', 'u'}
// count = 0

// v_found, c_found = False, False
// for p in password:
// 	if p in vowels:
// 		c_found = True
// 	else:
// 		v_found = True
// 	if v_found and c_found:
// 		count += 1
// 		v_found, c_found = False, False
// print(count)
// def countMovesToLeft(nums, target):
// 	count = 0
// 	last = 0
// 	for i in range(len(nums)):
// 		if nums[i] == target:
// 			count += i - last
// 			last += 1
// 	return count
        
// return min(countMovesToLeft(nums, 1), countMovesToLeft(nums, 0))


// function vowelsAndConsonants(s) {
//     let sp = s.split("");
//     let arr1 =[];
//     let arr2 =[];
//     for(let i=0;i<sp.length;i++)
//     {
//         if(sp[i]=='a'||sp[i]=='e'||sp[i]=='i'||sp[i]=='o'||sp[i]=='u'){
//             arr1.push(sp[i]);
//         }else{
//             arr2.push(sp[i]);
//         }
//     }
//     for(let i = 0;i<arr1.length;i++){
//         console.log(arr1[i]);
//     }
//     for(let i = 0;i<arr2.length;i++){
//         console.log(arr2[i]);
//     }
// }


// function vowelsAndConsonants2(s) {
//   const vowels = [],
//     consonants = [];

//   for(const c of s){
//     if('aeiou'.includes(c)){
//       vowels.push(c);
//     }else{
//       consonants.push(c);
//     }
//   }
//   console.log(vowels.join("\n"));
//   console.log(consonants.join("\n"));
// }



// var code
// =document.getElementById("password");

// var strengthbar= document.getElementById("meter");

// code.addEventListener("keyup", function(){checkpassword(code.value)

//     })
//  var display =document.getElementsByClassName("textbox")[0];
//     function checkpassword(password)
//     {
//     var strength=0;
//     if (password.match(/[a-z]+/)){
//         strength+=1;
//     }
//     if (password.match(/[A-Z]+/)){
//         strength+=1;
//     }
//     if (password.match(/[0-9]+/)){
//         strength+=1;
//     }
//     if (password.match(/[$@#&!]+/)){
//         strength+=1;

//         }
//     if (password.length<6){
//         display.innerHTML = "minimum number of characters is 6";
//     }

//     if (password.length>12){
//             display.innerHTML="maximum number of characters is 12";
// }
//     switch(strength){
//     case 0:
//         strengthbar.value=0;
//         break;

//     case 1:
//         strengthbar.value=25;
//         break;

//     case 2:
//         strengthbar.value=50;
//         break;

//     case 3:
//         strengthbar.value=75;
//         break;

//     case 4:
//         strengthbar.value=100;
//         break; }
// }

// function countVowels(str) {

//     let count = 0;
//     let arr = str.toLowerCase().split("");
  

//     for (let i = 0; i < str.length; i++) {
//         if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u")
//         {
//             //same as count++ but good practice
//             count += 1
//         } else {
//             return 0
//         }
//     }
//     return count
// }
// function countVowels(str) {
//   let array = str.toLowerCase().split("");
//   const vowels = ["a", "e", "i", "o", "u"];
//   const V = array.filter(char => vowels.includes(char));
//   return V.length;
// };

//maybe I could have thought about this in a sum 2 problem and then convert the second array into hash then loop thru the second array and look for entry in the hash 
function getPairs(deviceCapacity, foregroundAppList, backgroundAppList) {
  deviceCapacity.sort((a, b) => a[1] - b[1]);
  foregroundAppList.sort((a, b) => a[1] - b[1]);

  let result = [];
  let max = -Infinity;
  let l = 0;
  let r = foregroundAppList.length - 1;

  while (l < deviceCapacity.length && r >= 0) {
    let sum = deviceCapacity[l][1] + foregroundAppList[r][1];
    if (sum > backgroundAppList) {
      r--;
    } else {
      if (max <= sum) {
        if (max < sum) {
          max = sum;
          result = [];
        }
        result.push([deviceCapacity[l][0], foregroundAppList[r][0]]);
        let i = r - 1;
        while (i >= 0 && foregroundAppList[i][1] === foregroundAppList[i + 1][1]) {
          result.push([deviceCapacity[l][0], foregroundAppList[i][0]]);
          i--;
        }
      }
      l++;
    }
  }
  return result;
}

var optimizeMemoryUsage = function (foregroundAppList, backgroundAppList, K) {
  //return the first index of i in backgroundAppList, such that A[i]>target.....aka upperbound
  function binarySearch(target) {
    let l = 0;
    let r = backgroundAppList.length - 1;
    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);
      if (backgroundAppList[m] > target) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return l;
  }

  let closest = 0;
  let ans = [];

  // create a map to store the value=>id
  const backgroundAppListMap = new Map();
  for (let [i, n] of backgroundTasks.entries()) {
    backgroundAppListMap.set(n, i);
  }

  // sort the backgroundAppList which need to be binary searched
  backgroundAppList.sort((a, b) => a - b);

  // iterate foregroundAppList and do binay search on the  backgroundAppList.. find the closest sum to K for each element in foregroundAppList.
  for (const [id, value] of foregroundAppList.entries()) {
    const target = K - value;
    //index-1 is the index of number which is closest to K....
    const index = binarySearch(target) - 1;

    // If the index is in range, compare with the max and update max if this round's sum is bigger than max.
    if (index >= 0 && index <= backgroundAppList.length) {
      const backgroundAppListId = backgroundAppListMap.get(backgroundAppList[index]);

      const sum = value + backgroundAppLists[index];
      if (sum > closest) {
        ans = [];
        closest = sum;
        ans.push([id, backgroundAppListId]);
      } else if (sum === closest) {
        ans.push([id,backgroundAppListId]);
      }
    } else if (value > closest) {
      // if the index is not in range, per the example, we can only use the first element, and will be [id,-1]
      ans = [[id, -1]];
      closed = value;
    } else if (value === closest) {
      ans.push([id, -1]);
    }
  }
  return ans;
};










/*
new password
conditions to be valid
lowercase ONLY
MUST have (a,e,i,o,u)
MUST have at least 1 consonant a-z
-------------------------------------------
strength of password
MAX number of subsegments the password could be divided into
so that each subsegment is valid in it's own way 

ex) 
give      give           strength 1 
racecar   race-car       strength 2 
hackerrank  hack-er-rank strength 3 
anything above strength 3 is Strong 
 */


function findPasswordStrength(password) {
let array = password.toLowerCase().split("");
// decomposing the string/ input
const vowels = ["a","e","i","o","u"];
const V = array.filter(char => vowels.includes(char));
// get the array of vowels and each char retrun vowels that include the chars 
return V.length;
}

// . includes is a String and an Array Method we want to prefix the method with array or string that serves as the filter (string/array used to compare with the input value)

// filter - Select Some (Many to Some)

//My thoughts are that we have conditions of a string that need to be lowercase have vowels and a least one consonant.

// 1. rules and conditions

// 2. problem-solving when the value of the input meets those conditions return a number to know its strength. 

// 3. filtering out the string is important as well as includes. these are the validation checks (sorting and filtering)

// What is the runtime complexity? 

// I want to say this would be O(1) Constant Time the solution would return elements of an array that are given(input) but no matter the size it would not effect it due to not iterating multiple times.//