function sayHello() {
    console.log('Hello!');
  }
  sayHello();
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 
  sayHelloToIsabel();
  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 
  sayHelloToSofia();
  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething('anything');
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo('Isabel'); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 
  say("Hello", "Julio");
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  } 
  function add(x, y) {
    return x + y;
  } 
  add(1, 2)
  console.log(add(80,9000));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
  }
  function subtract (x, y){
      return x -y;
  }
  subtract(8, 5)
  console.log(subtract(8,5));