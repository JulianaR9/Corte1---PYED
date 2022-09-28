function convertir()
{
    let peso=document.querySelector("#peso").value;
    let altura=document.querySelector("#altura").value;
    let valor=Number(peso/(altura * altura));
    

    console.log(altura);
    console.log(peso);
    console.log(valor);

    document.getElementById("resultado").innerHTML=valor;
}


