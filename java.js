//LEANDRO FRANCO

   //alert("Bienvenido, esta es una calculadora espacial")
   let nombre = document.getElementById("ingrese__nombre")
   let peso = document.getElementById("ingrese__peso")
   let planeta = document.getElementById("ingrese__planeta")
   let resultado;
   let nombrePlaneta;
   let gTierra = 9.8;
   let gMarte = 3.7;
   let gJupiter = 24.8;
   let pesoFinal;
   let escritura = ("el peso de " + nombre + " en " + nombrePlaneta + " es de " + pesoFinal + "kg")
    
function fun1 () {
    nombre = ing
}

   function funBoton () {
    pesoFinal__h3.innerHTML = escritura;
   }

    boton__calc.addEventListener('click', funBoton)

   
function cuentaMarte () {
    return peso * gMarte / gTierra;
    }

function cuentaaJupiter () {
    return peso * gJupiter / gTierra;
    }

    if (planeta == 1) {
        pesoFinal = cuentaMarte();
        nombrePlaneta = "Marte";
        
    } else if (planeta == 2) {
        pesoFinal = cuentaaJupiter();
        nombrePlaneta = "Jupiter";
    }
    
    pesoFinal = parseInt(pesoFinal)


    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor);
    };
    for (const datosING of escritura) {
        guardarLocal ("datos ingresados", JSON.stringify(escritura)) ;
        
    }
    let sobrePeso = ("Usted tiene sobre peso, debe hacer dieta") 
    let pesoAdecuado = ("usted es Saludable")
    peso > 100 ? document.getElementById("container__sobrePeso").innerHTML = sobrePeso : document.getElementById("container__sobrePeso").innerHTML = pesoAdecuado
    
class persona {
    constructor (nombre, peso, nombrePlaneta, pesoFinal) {
        this.nombre = nombre;
        this.peso = peso;
        this.nombrePlaneta = nombrePlaneta;
        this.pesoFinal = pesoFinal;
        }
    }
const personas = new persona (nombre, peso, nombrePlaneta, pesoFinal);
    console.log(personas);


let container = document.getElementById("container__otrasPersonas")
    console.log(container);
let valores = [
    {nombre: "lean", peso: 88, planeta: "Marte", pesoFinalB: 33},
    {nombre: "nicole", peso: 48, planeta: "Jupiter",pesoFinalB: 121}
 ];
for (const valor of valores) {
    let parram = document.createElement("div");
    parram.innerHTML = `<h4>Otras Personas</h4>
                        <p>Nombre: ${valor.nombre}</p> 
                        <p>peso: ${valor.peso}</p>
                        <p>Su Planeta elegido fue ${valor.planeta} y su peso final fue de ${valor.pesoFinalB} kg </p>`
                        
    container.appendChild(parram)
}


//asi si me anda boton.addEventListener("click", respuestaCl);
//function respuestaCl() {
  //  swal("te dije que no tocaras el boton!", "🤬");