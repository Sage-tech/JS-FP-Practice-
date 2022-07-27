/*Checking for Compromised Accounts
Overview
We want to inform our users if their account has been involved in a security breach on another site since their last login. Since people sometimes reuse passwords across multiple sites, we'll encourage them to update their information in case their password is no longer secure.
Tasks
You'll see the current login logic in src/login.js with some hardcoded values for testing purposes. Your goal is to get this code hitting an external breach data API called Hack Check.
Please follow the steps below in order. This should help you to make efficient use of the time allotted.
Look for recent breaches that involve passwords. Limit the breaches in sampleResponse to breaches where:
IsSensitive is false
DataClasses array contains the value 'Passwords'
AddedDate is after the user's lastLogin
Should breaches be present upon successful user login, return the following as formatted:
 {
   success: true,
   meta: {
     suggestPasswordChange: true,
     breachedAccounts: [{
       name: <Name>,
       domain: <Domain>,
       breachDate: <BreachDate>,
       addedDate: <AddedDate>
     }]
   }
 }
After this is working with the hardcoded test values, move on to incorporate real breach data using the Hack Check breachedaccount API.
Test users
Before hitting the API, the app is hardcoded to return the same 3 breaches for either user.
User	Email	Password	API response
Safe User	safe@example.com	pw	no breaches found (HTTP 404)
Unsafe User	test@example.com	pw	some breaches found (HTTP 200)
Other notes
No UI changes needed: You should not modify any user interface code.
Error handling: Only light API error handling is expected. Note that the API will respond with HTTP 404 if the user has no known breaches.
Testing: Open the Web Preview. There will be a login form and a box below it that shows the result of the last login attempt. We will not evaluate changes to the automated tests.
If you see Web Preview Qualified 404 errors, please disable any content blockers you may have running and try reloading the page.
If you have API issues, double-check your request URL and API endpoint.
Javascript Console: To see logging output for the Web Preview, click on the web preview console button:
image.png
To use a debugger or see detailed console logs, open your browser's Javascript console / devtools.
Time guidance
Set a timer for 40 minutes; however the scenario should take 25-35 minutes to complete. If you exceed 40 minutes:
STOP
In "Your Notes" (in Qualified) note any tradeoffs or things you would do differently given more time.
If this is not the last scenario, go on to the next scenario. It is independent from any solution you got on this scenario.
You can return to any incomplete scenarios if you have time left over at the end.*/

import {
  users as sampleUsers,
 // breaches as sampleBreaches,
  response as sampleResponse,
} from "./sample";

function authenticate(email, password) {
  const account = sampleUsers.find((a) => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return null;
  }
}

async function login(email, password) {
  const account = authenticate(email, password);
  let possibleActionableBreaches;
  if (account) {
    possibleActionableBreaches = sampleResponse
      .filter(
        (res) =>
          res.IsSensitive === false &&
          res.DataClasses.includes("Passwords") &&
          Date.parse(res.AddedDate) > Date.parse(sampleUsers.lastLogin)
      )
      .map((breach) => ({
        name: breach.Name,
        domain: breach.Domain,
        breachDate: breach.BreachDate,
        addedDate: breach.AddedDate,
      }));

    if (possibleActionableBreaches.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          // hardcoded for now...
          breachedAccounts: possibleActionableBreaches,
        },
      };
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is not valid please try again.",
    };
  }
}

export default login;

//