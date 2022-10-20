// Inmmeditaely Invoked Function Expression
// A function expression that gets invoked immediatley
// Creates closure
// Does not add or modify global object

const sayHello = () => {
    var message = 'Hello'

    function sayHello(){
        console.log(message)
    }

    return sayHello
}


console.log('typeof message', typeof message)
console.log(sayHello.toString())

// IIFE
// wrap function in () (). Avoids polluting the namespace
const counter = (function(){
    var count = 0 
    return {
        inc: function(){count = count+1},
        get: function(){console.log(count)}
    }
})()

counter.get()
counter.inc()

// console.log(count) -> ERROR

