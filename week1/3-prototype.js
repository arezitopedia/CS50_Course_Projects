// Prototype Inheritance

//Function Hoisting
thisIsHoisted()
const arr = []

arr.push('value')
arr.push('value 2')
arr.pop()

console.log(arr)

const o = {}
//As the pointer has not change and the object is muteable, evrything is oK.
o.a = 3

function thisIsHoisted(){
    console.log('this is a function declared to the bottom')
}

const thisIsNotHoisted = function(){
    console.log('should this be hoisted?')
}