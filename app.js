//PAR O IMPAR
function numero(num){
    if(num !== 0){
    return num % 2 == 0 ? "El número ingresado es par": "El número ingresado es impar"
 }else{
     return "ERROR"
 }
}
console.log(numero(9))
console.log(numero(8))
console.log(numero(0))