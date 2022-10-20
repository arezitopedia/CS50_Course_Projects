const o = {
    a: 'a',
    b: 'b',
    c: 'deepCopy'
}

/* Passing by refence and not by value, object in memory */
const o2 = o

o.a = 'new value'

// console.log(o2.a)

/* Reference by value, create independant objecy */

const o3  =  Object.assign({},o)

// deep copy. Obejct withing objects

function deepCopy(obj){
    const newObject = {}
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++ ){
        let key = keys[i]
        if(typeof obj[key] === 'object'){
                newObject[key] = deepCopy(obj[key])
            }else{
                newObject[key] = obj[key]
            } 
        }
    return newObject
    }

const o4 = deepCopy(o);

console.log(o4.c)