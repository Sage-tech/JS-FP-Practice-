// applying a function means creating a new function by prefilling some of the arguments to the original function


// helper to create partially applied functions
// takes a function and some arguments
const partial = (f, ...args) => 
// returns a fucntion that takes the rest of the arguments
    (...moreArgs) =>
// and calls the original function with all of them 
        f(...args, ...moreArgs)

        // Something to apply
const add3 = (a, b, c) => a + b + c
        // partially applying 2 and 3 to add# gives you a one-argument function
        const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c 