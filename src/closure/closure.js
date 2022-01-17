const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox : $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

/**Los closures son basicamente cuando aprovechamos la habilidad de Javascript 
 * de usar las variables que están en el scope padre 
 * de nuestro bloque de código,
 *  por eso el global scope es un closure grandote; 
 * el bloque myFunction puede usar TODAS las variables que están disponibles en el bloque inmediato anterior.
 */
//esta funcion me retorna otra funcion, por eso luego se le puede enviar parametros cuando la utilizamos
//con esta manera se va a tener guardado o recordado el valor, tendra memoria
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    }
    return countCoins;
};
let myMoneyBox = moneyBox();
//recordara la asignacion del valor anterior
myMoneyBox(4);//4
myMoneyBox(6);//10
myMoneyBox(10);//20