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
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dolphinaris.com%2Fes%2Fcuriosidades-sobre-los-delfines%2F&psig=AOvVaw0aCeqER7mHKFY9GL5sx9KS&ust=1665014951243000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCXk5_mx_oCFQAAAAAdAAAAABAD"
    },
    {
        nombre:"mariposa",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elagoradiario.com%2Fagora-forum%2Fsabias-que%2Fgotas-lluvia-mecanismo-alas-de-mariposa%2F&psig=AOvVaw1dAGTmZlsEd5hHQVg0uWtL&ust=1665014994327000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLCG66_mx_oCFQAAAAAdAAAAABAD"
    },
    {
        nombre:"camaleon",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fculturacientifica.com%2F2016%2F01%2F28%2Fsi-son-tan-buenos-escondiendose-como-sabemos-que-existen-los-camaleones%2F&psig=AOvVaw2ZWFw-78QD-NjKn1NOc4Sd&ust=1665015032073000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJCt7sLmx_oCFQAAAAAdAAAAABAD"
    },{
        nombre:"tortuga",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fallyouneedisbiology.wordpress.com%2F2015%2F07%2F29%2Fciclo-tortuga-marina%2F&psig=AOvVaw3yUgPpLWGB31jbXYXhhi0i&ust=1665015080043000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNiMtdbmx_oCFQAAAAAdAAAAABAD"
    },{
        nombre:"koala",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldwildlife.org%2Fdescubre-wwf%2Fhistorias%2Fincluyen-a-los-koalas-en-la-lista-de-especies-en-peligro-de-extincion&psig=AOvVaw1kx6XKmsf-NIFCBNE4GI8K&ust=1665015097745000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMCS4uPmx_oCFQAAAAAdAAAAABAD"
    },{
        nombre:"medusa",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expertoanimal.com%2Fcuriosidades-de-las-medusas-25487.html&psig=AOvVaw3VgWNUJ3AL4g8AAtcbAndt&ust=1665015130245000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjdvfTmx_oCFQAAAAAdAAAAABAS"
    },{
        nombre:"pantera",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Frevistadiners.com.co%2Fcultura%2Farchivo%2F59411_como-ser-una-pantera-negra-en-los-negocios%2F&psig=AOvVaw0FhYNSTtbqNIFytu5HMuag&ust=1665015174170000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjNzoXnx_oCFQAAAAAdAAAAABAD"
    },{
        nombre:"ardilla",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muyinteresante.es%2Fmascotas%2Ffotos%2Fcuidados-basicos-de-la-ardilla&psig=AOvVaw0VetV0fi8_PyVs8f-wwHOW&ust=1665015197421000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKi6-o_nx_oCFQAAAAAdAAAAABAT"
    },{
        nombre:"jirafa",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetacurioso.com%2F25-curiosidades-de-la-jirafa-que-desconocias%2F&psig=AOvVaw2aRrh-ss55xhzWIJTDWx4O&ust=1665015308813000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMDe9sPnx_oCFQAAAAAdAAAAABAN"
    },{
        nombre:"oso panda",
        imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muyinteresante.es%2Fnaturaleza%2Ffotos%2Fcuriosidades-sobre-los-osos-panda&psig=AOvVaw2bzODOFtUA1Wo7RJE0kHCs&ust=1665015278884000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiGqLfnx_oCFQAAAAAdAAAAABAD"
    }
]

function buscaranimales()
{
    let animales2 = document.querySelector.value;
    let texto = document.querySelector("#buscador").value;
    let acumulador = "";
    animales2.forEach(animal => {
        if(animal.nombre.startsWith(texto) && texto!==""){
            acumulador = acumulador + 

        }

    });
    
}

