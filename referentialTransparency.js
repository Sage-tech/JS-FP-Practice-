//----------- Referential Transparency--------------
// an experssion is called referentailly transparent if it can be replaced with its value without the impact on the programs behaviour
// --------Definitions--------
//Experssion
//-- a combination of constants, variables, operators and functions that is interpreted and cumputed to produce another value

const expression1 = 1 + 2;
const expression2 = expression1 + 20;
const expression3 = (1 * (2 + 3)) * expression1 + 20;
