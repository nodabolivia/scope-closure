const helloWorld = ()=>{
    const hello = "Hello world";
    console.log(hello);
};
helloWorld();
//variable local de funcion helloWorld
console.log(hello);




var scope =  "global";
const functionScope = ()=>{
    //ambito lexico
    var scope = "local";
    const func =()=>{
        return scope
    }
    console.log(func());
}
functionScope();




