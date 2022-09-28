function convertirTexto()
{
    let texto=document.querySelector("#texto").value;
    let contenedor=document.querySelector("#contenedor");
    contenedor.innerHTML=mayusculas(texto);

    
    console.log("longitud",contarLongitud(texto))
    console.log("TercerCaracter",obtenerCaracter(texto,2));
    console.log("extraccion",extraer(texto));
    console.log("reemplazar",reemplazar(texto));
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
    if (texto.charAt(posicion)=="")
    {
        return null;
    }
    else
    {
        return texto.charAt(posicion);
    } 
}

function extraer(texto)
{
    return texto.substring(2,5)
}

function reemplazar(texto)
{
    return texto.replace("martes","viernes")
}

function dividir()
{
    
}