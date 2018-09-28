/** Array.prototype.fill()
 * The fill() method fills all the elements of an array from a start index
 *  to an end index with a static value. The end index is not included.
 * 
 * Syntax: arr.fill(value[, start(opt)[, end(opt)]])
 * Return :: arr
 */

 [1,2,3].fill(4)  //[4,4,4]
 [1,2,3].fill(4,1) //[1,4,4]
 [1,2,3].fill(4,1,2) // [1,4,3]
 Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]