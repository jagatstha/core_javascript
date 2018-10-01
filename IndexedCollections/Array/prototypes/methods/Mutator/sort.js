/** Array.prototype.sort()
 * The sort() method sorts the elements of an array in place and returns the array. 
 * The sort is not necessarily stable. The default sort order is according to string 
 * Unicode code points.
 * 
 * Syntax: arr.sort([compareFunction])
 * return: sorted array
 *

 the compare function has the following form:

function compare(a, b) {
  if (a is less than b by some ordering criterion.  sort a to an index lower than b, i.e. a comes first.) {
    return -1;
  }
  if (a is greater than b by the ordering criterion. sort b to an index lower than a, i.e. b comes first.) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

var num  = [4,1,5, 3, 2]
num.sort(function(a,b){
    return a-b;
})

console.log(num);