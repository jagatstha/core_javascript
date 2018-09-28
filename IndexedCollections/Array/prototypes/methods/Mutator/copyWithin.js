/** Array.prototype.copyWithin()
 *  The copyWithin() method shallow copies part of an array to
 *  another location in the same array and returns it, without 
 * modifying its size.
 * copyWithin does not alter the length of array but will change the content
 * 
 * Syntax::  arr.copyWithin(target, start(opt), end(opt))
 */
var arr = [1,2,3,4,5];
arr.copyWithin(-2);

[].copyWithin.call({length:5,3:1}, 0, 3)