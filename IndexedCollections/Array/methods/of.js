/**
 * The Array.of() method creates a new Array instance with a variable
 *  number of arguments, regardless of number or type of the arguments.
 * 
 * Syntax : Array.of(elem0[,elem1[,...[,elemN]]])
 * Return: array
 */

 console.log(Array.of(1,2,3)) //[1,2,3]
 Array.of(undefined)   //[undefined]

//  Array.of() vs Array()

console.log(Array.of(5)) //[5]
console.log(Array(5))     / [ , , , , ]