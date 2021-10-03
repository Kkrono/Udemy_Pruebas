console.log("Hola");
//document.getElementById ("cabecera").innerHTML="Cal"

function sumar(){
    const forma=document.getElementById("forma");
    let numero1=forma["numero1"];
    let numero2=forma["numero2"];
    let resultado= parseInt(numero1.value) + parseInt(numero2.value);
    if (isNaN(resultado)){
        document.getElementById("resultado").innerHTML="No hay numeros";
    }else{
        document.getElementById("resultado").innerHTML="Resultado: " + resultado;
    }

    
}