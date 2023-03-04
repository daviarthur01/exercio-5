function verificar(){
    let num1 = document.getElementById("numero").value 

    let numero = parseFloat(num1)

    let resultado = numero % 2

    if(resultado == 0){
        alert(" é par")
    }

    if(resultado % 2 !== 0){
        alert(" é impar")
    }
}