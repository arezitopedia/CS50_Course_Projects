const o = new Object();
o.firstName = "Andy";
o.lastName = "Elias";
o.isTeaching = true;
o.greet = function () {
  console.log("hi!");
};

/* object literal prefered way*/
const o2 = {};
o2.firstName = "Andy";
o2["lastName"] = "Elias";
const key = "isTeaching";
o2[key] = false;
o2["greet"] = function () {
  console.log("Hi!!");
};

/*Another way of object creation */

const o3 = {
  fistName: "Andy",
  lastName: "Elias",
  greet: () => console.log("hi!"),
  nested: {
    message: "Hello",
    function: (x) => console.log(x ** 2),
  },
};

o3.greet();
o3.nested.function(2);
