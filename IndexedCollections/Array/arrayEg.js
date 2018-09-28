
let consArray  = new Array(20)
console.log(consArray.length)
// passing single argument in constructor to create N number of elements of empty slot not 'undefined'

//Arrays cannot use strings as element indexes 
console.log(years['2'] != years['02']);  // true  bcz index are treated as string ; years['2'] instead of years[2]
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly
