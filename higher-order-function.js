// a function which takes a function as an argument and/or returns a function

const filter = (predicate, xs) => xs.filter(predicate)

const is = (type) => (x) => Object(x) instanceof type

filter(is(Number), [0, '1', 2, null])// [0,2]