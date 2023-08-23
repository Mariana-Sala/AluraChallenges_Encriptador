const cajaTexto = document.getElementById("cajaTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const btnCopiar = document.getElementById("btnCopiar");
const muneco = document.getElementById("muneco");
const infoSec2 = document.getElementById("infoSec2");
const seccion2 = document.getElementById("seccion2");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


const cambiar = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.classList.add("oculto");
    cajaTexto.value = "";
    infoSec2.style.display = "none";
    btnCopiar.style.display = "block";
    seccion2.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

function validarTexto(){
    let textoEscrito = document.getElementById("cajaTexto").value;
    let validador = textoEscrito.match(/[a-z]/);
    
    if(!validador || validador === 0 ) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}



btnEncriptar.addEventListener("click", () => {
    const texto = cajaTexto.value;

    if(texto != validarTexto()){
        function encriptar(newText){
            for(let i=0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                }; 
            };
            return newText;
        };
    } else {
        alert("Ingrese texto a Encriptar");
    }
    cambiar(encriptar(texto));
});

btnDesencriptar.addEventListener("click", () => {
    const texto = cajaTexto.value.toLowerCase();

    if(texto != "" && validarTexto){
        function desencriptar(newText){
            for(let i=0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText;
        };
    }else {
        alert("Ingrese texto a Desencriptar");
    }
    cambiar(desencriptar(texto));
})

btnCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    //este navigator no copia en celulares
    navigator.clipboard.writeText(texto.value);

    /*el texto con el document sirve para celulares 
    texto.select();
    document.execCommand("copy");*/
    alert("Texto Copiado Exitosamente!");

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");
    infoSec2.style.display = "block";
    btnCopiar.style.display = "none";
    seccion2.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    cajaTexto.focus();
})