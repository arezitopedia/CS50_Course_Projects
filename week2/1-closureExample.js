// A closure is a function that access to variables that might have left scope

function makeHelloFunction(){
    const message = 'Hello!'

    function sayHello(){
        console.log(message)
    }
    return sayHello

}

const sayHello = makeHelloFunction()
sayHello()

function makeFunctionArray(){
    const arr = []
    for (var i=0; i<5; i++){
        arr.push(function(){console.log(i)})
    }
    console.log(i)
    return arr
}

const functionArr = makeFunctionArray()


