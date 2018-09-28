// The Array.from() method creates a new, shallow-copied Array 
// instance from an array-like or iterable object[ String, Set, Map, Generator].
//Syntax:: Array.from(arrayLike[, mapFun[, thisArg]])

// Array.from(obj, mapFn, thisArg) has the same result 
// as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array.

console.log(Array.from('Array from Strings'))
 console.log(Array.from([1,2,3,4], x => x*2))    // [2,4,6,8]

 // array from Map
 let mapper = new Map([['1', 'a'], ['2', 'b']])
 console.log(Array.from(mapper.values()))
 console.log(Array.from(mapper.keys()))

 // array from Array like Obj (arguments)
 function foo(){
     return Array.from(arguments)
 }

 foo(1,2,3) // [1,2,3]

 // arrow function 

 // Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

const items = Array.from({
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3
});
// items = ["a", "b", "c"]

const items = Array.from({
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3
}, c => c.toUpperCase());
// items = ["A", "B", "C"];