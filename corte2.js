
let nombre = "Juliana B" 
let name = prompt ("Por favor escriba su nombre");
let age = prompt ("Escriba su edad")
let edadfutura = Number (age) + 10;
let edadpasada = Number (age) - 5;
let edadtriple = Number (age) * 3;
let edadmitad = Number (age) / 2;

// modulo = residuo

// alert("Hola");
alert("Hola " + name);
alert (name + " su edad en 10 años será" + edadfutura)
alert (name + " su edad hace 5 años era" + edadpasada)
alert (name + " el triple de su edad es" + edadtriple)
alert (name + " la mitad de su edad es" + edadmitad)
/*if (age == 4 )
{
alert ( name + "su edad es par");
}
else 
{
(age ==2)
alert ( name + " su edad es impar");
}*/

if (Number(age) >= 22){
    alert ("su edad es mayor")
}
else{
    alert("su edad es menor")
}
document.write("Escuela de Artes y Letras");
console.log ("Martes 13");
document.getElementById("cuadro1").innerHTML= nombre;

