if(!Array.from){
    Array.from = (function(){
        var toStr = Object.prototype.toString;
        var isCallable = function(fn){
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function(value){
            var number = Number(value);
            if(isNaN(number)){return 0;}
            if(number === 0 || !isFinite(number)) {return number; }
            return( number > 0 ? 1 : -1)* Math.floor(Math.abs(number)) 
        }

        var maxSafeInteger = Math.pow(2,53) - 1;
        var toLength = function(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        }

            //
    }())
}