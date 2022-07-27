
// A closure is a scope which captures local variables of a function
// for access even after the execution has moved out of the block in which
//it is defined.This allows the values in the cloure to be accessed by returned functions.


const addTo = x => y => x + y
var addToFive = addTo(5)
 addToFive(3) // =>8
