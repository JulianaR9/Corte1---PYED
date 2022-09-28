function convertirTexto()
{
    let texto=document.querySelector("#texto").value;
    let contenedor=document.querySelector("#contenedor");
    contenedor.innerHTML=mayusculas(texto);

    
    console.log("longitud",contarLongitud(texto))
    console.log("TercerCaracter",obtenerCaracter(texto,2));
}


function mayusculas(txt)
{
    return txt.toUpperCase();
}

function contarLongitud()
{
    let texto= document.querySelector("#texto").value;
    return texto.length

}

function obtenerCaracter(texto,posicion)
{
    return texto.charAt(posicion);
}

