import cipher from './cipher.js';

const pantallacifrado = document.getElementById("pantalla-encode");
const pantalladecifrado= document.getElementById("pantalla-decode");
const regresar = document.getElementById("regresar");
const regresar2= document.getElementById("regresar2");
const informacion= document.getElementById("info");

const limpiar = document.getElementById("limpiar");
const limpiar2= document.getElementById("limpiar2");

/*Mostrar datos para cifrar */
pantallacifrado.addEventListener("click", function() {
  document.getElementById("mensaje-encode").style.display = 'block'; 
  document.getElementById("login").style.display = 'none'; 
});
/*Mostrar datos para decifrar */
pantalladecifrado.addEventListener("click", function() {
  document.getElementById("mensaje-decode").style.display = 'block'; 
  document.getElementById("login").style.display = 'none'; 
});

/*Regresa a los botones de inicio desde cifrado */
regresar.addEventListener("click", function() {
  document.getElementById("mensaje-encode").style.display = 'none'; 
  document.getElementById("mensaje-decode").style.display = 'none'; 
  document.getElementById("login").style.display = 'block'; 
});

/*Regresa a los botones de inicio desde cifrado */
regresar2.addEventListener("click", function() {
  document.getElementById("mensaje-encode").style.display = 'none'; 
  document.getElementById("mensaje-decode").style.display = 'none'; 
  document.getElementById("login").style.display = 'block'; 
});
/*rescatando el valor del texto a codificar */
const btnTextEncode = document.getElementById("btn_encode");
  btnTextEncode.addEventListener("click", function() {
  let textEncode = document.getElementById("box-msg-encode").value;
  //textEncode = textEncode.toUpperCase();
  let number_offset = document.getElementById("numero-encode").value;
  document.getElementById("resultado-cifrado").innerHTML = cipher.encode(number_offset, textEncode) ;
});

/*rescatando el valor del texto a decodificar*/
const btnTextDecode = document.getElementById("btn_decode");
  btnTextDecode.addEventListener("click", function() {
  let textDecode = document.getElementById("box-msg-decode").value;
  //textDecode = textDecode.toUpperCase();
  let number_offset = document.getElementById("numero-decode").value;
  document.getElementById("respuesta-decode").innerHTML = cipher.decode(number_offset, textDecode);
});

informacion.addEventListener("click", function() {
  alert("No puede utilizar la letra 'Ñ'");  
});

let vacio = ""; 
limpiar2.addEventListener('click', function(){  
  document.getElementById("box-msg-encode").value = "";
  document.getElementById("numero-encode").value = "";
  document.getElementById("resultado-cifrado").innerHTML = vacio; 
}); 

limpiar.addEventListener('click', function(){  
  document.getElementById("box-msg-decode").value = "";
  document.getElementById("numero-decode").value = "";
  document.getElementById("respuesta-decode").innerHTML= vacio; 
});