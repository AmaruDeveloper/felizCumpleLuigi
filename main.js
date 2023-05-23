//alert("Aviso: 'Psyduck solo es un apodo que su madre y hermano usamos con el por cariño'");
document.querySelector("figure").addEventListener("click", ()=>{

    let sonido = document.getElementById("audio");
    sonido.play()


        var imagen = document.getElementById("psyduck1");
        imagen.classList.add("rotacion");
        setTimeout(function() {
          imagen.classList.remove("rotacion");
        }, 600); // Ajusta el tiempo de espera aquí si deseas una pausa entre las rotaciones
      
});

const gusto1 = document.getElementById("gusto1");
const gusto2 = document.getElementById("gusto2");
const gusto3 = document.getElementById("gusto3");
const gusto4 = document.getElementById("gusto4");
const gusto5 = document.getElementById("gusto5");

const cargarGusto = (entradas, observador) =>{

    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            //entrada.target.classList.remove('visible');
        }
    })

}

const observador = new IntersectionObserver(cargarGusto, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(gusto1);
observador.observe(gusto2);
observador.observe(gusto3);
observador.observe(gusto4);
observador.observe(gusto5);

