/**
 *  The Array.isArray() method determines whether the passed value is an Array.
 * Syntax :: Array.isArray(value)
 * Return value: bool
 */

 Array.isArray(Array.prototype) //true
 Array.isArray(new Array()) // true

// instanceof vs isArray
//When checking for Array instance, Array.isArray is preferred 
//over instanceof because it works through iframes.

var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray  = window.frames[window.frames.length-1].Array;
var arr = new XArray(1,2,3)

Array.isArray(arr) // true
arr instanceof Array // false
