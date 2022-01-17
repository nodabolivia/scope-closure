//bloques de codigo
const fruits =()=>{
    //var es una asignacion en la cual dentro de toda la funcion puede se usada
    //let y const solo puede se usada dentro de su bloque de codigo
    if(true){
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "Kiwi";
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}
fruits();





let x=1;
{
    let x=2;
    //si queremos que el valor de x solo se presente dentro del bloque usamos let
    console.log(x);
}
console.log(x);

var x=1;
{
    var x=2;
    console.log(x);
}
//el valor de x dentro del blloque se transmitio a la variable global
console.log(x);



const anotherFunction = ()=>{
    for(var i=0; i<10; i++){
        setTimeout(() => {
           console.log(i) 
        }, 1000);
    }
}
anotherFunction();

const anotherFunction = ()=>{
    for(let i=0; i<10; i++){
        setTimeout(() => {
           console.log(i) 
        }, 1000);
    }
}
anotherFunction();









