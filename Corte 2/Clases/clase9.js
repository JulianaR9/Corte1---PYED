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
        "nombre":"Delfin",
        "imagen":"https://estaticos.muyinteresante.es/uploads/images/gallery/5d9208eb5cafe81a0f3c986a/delfin0_0.jpg",
        "peso_promedio_KG":"140",
        "numero_patas":"0",
        "color_predominante":"azul",
        "alimentacion":"carnívoro" ,
        "habitat":"océano",
    },
    {
        "nombre":"Elefante",
        "imagen":"https://static.nationalgeographic.es/files/styles/image_3200/public/01-wildlife-watch-elephant-hides-africa.jpg?w=1900&h=1256",
        "peso_promedio_KG":"6000",
        "numero_patas":"4",
        "color_predominante":"gris",
        "alimentacion":"herbívoro" ,
        "habitat":"selvas y sabanas",
    },
    {
        "nombre":"Camaleon",
        "imagen":"https://culturacientifica.com/app/uploads/2016/01/camaleones.jpg",
        "peso_promedio_KG":"2",
        "numero_patas":"4",
        "color_predominante":"verde",
        "alimentacion":"insectívoro" ,
        "habitat":"bosques, selvas y llanuras",
    },
    {
        "nombre":"Tortuga marina",
        "imagen":"https://allyouneedisbiology.files.wordpress.com/2015/07/martin_caretta_2000x13391.jpg?w=1038&h=576&crop=1",
        "peso_promedio_KG":"230",
        "numero_patas":"4",
        "color_predominante":"café",
        "alimentacion":"herbívoro" ,
        "habitat":"océano",
    },
    {
        "nombre":"Koala",
        "imagen":"https://www.elagoradiario.com/wp-content/uploads/2019/08/Koala-1140x600.jpg",
        "peso_promedio_KG":"15",
        "numero_patas":"4",
        "color_predominante":"gris",
        "alimentacion":"herbívoro" ,
        "habitat":"bosque",
    },
    {
        "nombre":"Medusa",
        "imagen":"https://www.elagoradiario.com/wp-content/uploads/2021/08/medusa-1140x600.jpg",
        "peso_promedio_KG":"200",
        "numero_patas":"0",
        "color_predominante":"rosa",
        "alimentacion":"carnívoro" ,
        "habitat":"océano",
    },
    {
        "nombre":"Pantera",
        "imagen":"https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2018/09/pantera_200x800.jpg?fit=1200%2C800&ssl=1",
        "peso_promedio_KG":"31",
        "numero_patas":"4",
        "color_predominante":"negro",
        "alimentacion":"carnívoro" ,
        "habitat":"selva",
    },
    {
        "nombre":"Ardilla",
        "imagen":"https://t1.ea.ltmcdn.com/es/posts/3/6/7/donde_viven_las_ardillas_25763_orig.jpg",
        "peso_promedio_KG":"1",
        "numero_patas":"4",
        "color_predominante":"naranja",
        "alimentacion":"frutos secos" ,
        "habitat":"bosques",
    },
    {
        "nombre":"Jirafa",
        "imagen":"https://www.planetacurioso.com/wp-content/uploads/2017/02/JIRAFA-CURIOSIDADES-MANCHAS-compressor.jpg",
        "peso_promedio_KG":"1500",
        "numero_patas":"4",
        "color_predominante":"café",
        "alimentacion":"herbívoro" ,
        "habitat":"sabana africana",
    },
    {
        "nombre":"oso panda",
        "imagen":"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f3245925bafe8102efb7519/1-oso-panda-comiendo.jpg",
        "peso_promedio_KG":"100",
        "numero_patas":"4",
        "color_predominante":"blanco",
        "alimentacion":"herbívoro",
        "habitat":"bosques de bambú",
    }
]

function buscaranimales()
{
    let contenedor = document.querySelector("#animalesbusqueda");
    let texto = document.querySelector("#buscador").value;
    let acumulador = "";
    animales2.forEach(animal => {
        if(animal.nombre.toLowerCase().startsWith(texto.toLowerCase()) && texto!==""){
            acumulador = acumulador + `<img src="${animal.imagen}" width="400"/><h3>Nombre: ${animal.nombre}</h3><h3>Peso promedio kg: ${animal.peso_promedio_KG}</h3><h3>Número de patas: ${animal.numero_patas}</h3><h3>Color predominante: ${animal.color_predominante}</h3><h3>Alimentación: ${animal.alimentacion}</h3><h3>Habitat: ${animal.habitat}</h3>`
        }
    });
    
    contenedor.innerHTML=acumulador;
}

