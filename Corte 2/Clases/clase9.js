let animales = ["delfin","mariposa","jirafa","medusa","oso panda","koala","lobo","tigre","pantera","camaleon","mono","araña","zuricata","tortuga","abeja","camello","cangrejo","ardilla","calamar","pulpo"]



function mostraranimales()
{
    let animal = document.querySelector.value
    for(let i=0;i<animales.length;i++)
{
    let animal = animales[i]; 
    let li = document.createElement("li");
    li.textContent = animal;
    contenedoranimales.appendChild(li);
}

}
mostraranimales();



let animales2 =
 [
    {
        nombre:"delfin",
        imagen:"https://estaticos.muyinteresante.es/uploads/images/gallery/5d9208eb5cafe81a0f3c986a/delfin0_0.jpg"
    },
    {
        nombre:"mariposa",
        imagen:"https://www.anipedia.net/imagenes/significado-mariposas.jpg"
    },
    {
        nombre:"camaleon",
        imagen:"https://culturacientifica.com/app/uploads/2016/01/camaleones.jpg"
    },
    {
        nombre:"tortuga",
        imagen:"https://allyouneedisbiology.files.wordpress.com/2015/07/martin_caretta_2000x13391.jpg?w=1038&h=576&crop=1"
    },
    {
        nombre:"koala",
        imagen:"https://www.elagoradiario.com/wp-content/uploads/2019/08/Koala-1140x600.jpg"
    },
    {
        nombre:"medusa",
        imagen:"https://www.elagoradiario.com/wp-content/uploads/2021/08/medusa-1140x600.jpg"
    },
    {
        nombre:"pantera",
        imagen:"https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2018/09/pantera_200x800.jpg?fit=1200%2C800&ssl=1"
    },
    {
        nombre:"ardilla",
        imagen:"https://t1.ea.ltmcdn.com/es/posts/3/6/7/donde_viven_las_ardillas_25763_orig.jpg"
    },
    {
        nombre:"jirafa",
        imagen:"https://www.planetacurioso.com/wp-content/uploads/2017/02/JIRAFA-CURIOSIDADES-MANCHAS-compressor.jpg"
    },
    {
        nombre:"oso panda",
        imagen:"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f3245925bafe8102efb7519/1-oso-panda-comiendo.jpg"
    }
]

function buscaranimales()
{
    let contenedor = document.querySelector("#animalesbusqueda");
    let texto = document.querySelector("#buscador").value;
    let acumulador = "";
    animales2.forEach(animal => {
        if(animal.nombre.toLowerCase().startsWith(texto.toLowerCase()) && texto!==""){
            acumulador = acumulador + `<img src="${animal.imagen}" width="400"/><h3>${animal.nombre}</h3>`
        }
    });
    
    contenedor.innerHTML=acumulador;
}

