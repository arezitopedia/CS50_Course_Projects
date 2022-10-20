const firstName = "Andy";
const lastName = "Elias";

const val = 42;

const arr = [
    'string',
    42,
    function() { console.log('hi') }
]

arr[2]()

for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}

/* TypeCasting */
/* Explicit or Implicit */

const x = 42;
const explicit = String(x);
const implicit = x + '';

for (const x of [explicit, implicit]){
    console.log(x);
}

const pow2 = (x) => {return x*2 };

a = [1,2,3,4];

b = a.map(pow2);

console.log(b);

/* Type of variables */

console.log(typeof Null);

/* Strict comparision */
/* never use dynamic comparison == */

/*Falsy value are values are ones that cast to bool are false */
console.log(Boolean(undefined));

/* stored by reference */


/* stored by value, primitives should be replaced */