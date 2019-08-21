/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The default bind if nothing specific is set to the this keyword and you are not in strict mode. "This' will refer to the global object or window in a browser.

* 2. Implicit Binding - When a function is invoked "this" will reference whatever is to the left of the dot. 

* 3. New Binding - Specific keyword that will contruct a new object that "this" will then refer to.

* 4. Explicit Binding - A way to explicitly tell the JS  browser engine to point to a specific value using the call, apply or bind. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function whatsThis() {
    return this;
  }
console.log(this === window); //will return true in browser console

// Principle 2
// code example for Implicit Binding

let mySelf = {
  name: 'Chris',
  lastName: 'Daniels',
  myLastName: function(){
    console.log(this.lastName);
  }
}
mySelf.myLastName();

// Principle 3
// code example for New Binding

function Truck(make, model, year) { //initial object function
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  var Truck1 = new Truck('Ford', 'Ranger', 1995); //implement new constructor and arguments(data)
  
  console.log(Truck1.make);
  // expected output: "Ford"

// Principle 4
// code example for Explicit Binding

var character = {
    weapon: 'Master Sword',
    getWeapon: function() {
      return this.weapon;
    }
  }
  
  var unboundGetWeapon = character.getWeapon;
  console.log(unboundGetWeapon()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetWeapon = unboundGetWeapon.bind(character);
  console.log(boundGetWeapon());
  // expected output: Master Sword