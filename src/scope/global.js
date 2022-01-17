var hello = "HELLO";
var hello = "HELLO6";

let world = "Hello world";
// los let y const no se le puede reasignar el valor. A let simplemente se modifica el valor 
// let world = "Hello world";//no 
// world = "Hello world5";//si

const helloWorld = "hello world";
console.log(hello);
const anotherFunction =()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
    
}

anotherFunction();