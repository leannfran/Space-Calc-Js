
   function funBoton() {

    let nombre = document.getElementById("ingrese__nombre").value;
  
    let peso = document.getElementById("ingrese__peso").value;
  
    let planeta = document.getElementById("ingrese__planeta").value;
    let pesoFinal;
    let gTierra = 9.8;
    let gMarte = 3.7;
    let gJupiter = 24.8;

    function cuentaMarte () {
        return peso * gMarte / gTierra;
        }
    
    function cuentaaJupiter () {
        return peso * gJupiter / gTierra;
        }

    if (planeta == "marte") {
        pesoFinal = cuentaMarte();
        }
    else if (planeta == "Marte") {
        pesoFinal = cuentaMarte();
        }
    else if (planeta == "jupiter") {
            pesoFinal = cuentaaJupiter();
        }
    else if (planeta == "Jupiter") {
                pesoFinal = cuentaaJupiter();
        }

    pesoFinal = parseInt(pesoFinal)

    let escritura = "el peso de " + nombre + " en " + planeta + " es de " + pesoFinal + "kg";
  
    pesoFinal__h3.innerHTML = escritura;

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
        constructor (nombre, peso, planeta, pesoFinal) {
            this.nombre = nombre;
            this.peso = peso;
            this.planeta = planeta;
            this.pesoFinal = pesoFinal;
            }
        }
    const personas = new persona (nombre, peso, planeta, pesoFinal);
        console.log(personas);
  
  }
  
  boton__calc.addEventListener("click", funBoton);

  boton__calc.addEventListener("click", () =>{
    swal("tu resultado esta listo!", "", "success");
  })
  
  function cuentaMarte () {
      return peso * gMarte / gTierra;
    }
    
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