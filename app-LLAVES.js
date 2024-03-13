///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 1
/*
// Matriz de llaves
var llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];
// Función para encriptar
function encriptar(inputText) {
    var resultado = procesarTexto(inputText, 'encrypt');
    return resultado;
}
// Función para desencriptar
function desencriptar(inputText) {
    var resultado = procesarTexto(inputText, 'decrypt');
    return resultado;
}
// Función para procesar el texto
function procesarTexto(mensaje, opcion) {
    //Selector de columna de "llaves"
    var columna = [0, 1];
    if (opcion === 'decrypt') {
        columna.reverse();
        llaves.reverse();
    }
    for (let i = 0; i < llaves.length; i++) {
        mensaje = mensaje.replaceAll(llaves[i][columna[0]], llaves[i][columna[1]]);
    }
    if(opcion === 'decrypt'){llaves.reverse(); columna.reverse();}
    return mensaje;
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 2
/*
// Definir la matriz de llaves de encriptación

var llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
// Definir una función que encripta un texto dado
function encriptar(texto) {
// Crear una variable para almacenar el texto encriptado
var encriptado = "";
// Recorrer cada letra del texto
for (var i = 0; i < texto.length; i++) {
    // Obtener la letra actual
    var letra = texto[i];
    // Buscar si la letra tiene una llave de encriptación
    var encontrada = false;
    for (var j = 0; j < llaves.length; j++) {
    // Comparar la letra con la primera columna de la llave
    if (letra == llaves[j][0]) {
        // Si coincide, reemplazar la letra por la segunda columna de la llave
        encriptado += llaves[j][1];
        // Marcar que se encontró la llave
        encontrada = true;
        // Salir del bucle interno
        break;
    }
    }
    // Si no se encontró la llave, mantener la letra original
    if (!encontrada) {
    encriptado += letra;
    }
}
// Devolver el texto encriptado
return encriptado;
}

// Definir una función que desencripta un texto dado
function desencriptar(texto) {
// Crear una variable para almacenar el texto desencriptado
var desencriptado = "";
// Recorrer cada letra del texto
for (var i = 0; i < texto.length; i++) {
    // Obtener la letra actual
    var letra = texto[i];
    // Buscar si la letra forma parte de una llave de encriptación
    var encontrada = false;
    for (var j = 0; j < llaves.length; j++) {
    // Comparar la letra con la primera letra de la segunda columna de la llave
    if (letra == llaves[j][1][0]) {
        // Si coincide, verificar si el resto de la segunda columna de la llave también coincide
        var coincidencia = true;
        for (var k = 1; k < llaves[j][1].length; k++) {
        // Si alguna letra no coincide, romper el bucle interno
        if (texto[i + k] != llaves[j][1][k]) {
            coincidencia = false;
            break;
        }
        }
        // Si todas las letras coinciden, reemplazar la segunda columna de la llave por la primera columna
        if (coincidencia) {
        desencriptado += llaves[j][0];
        // Marcar que se encontró la llave
        encontrada = true;
        // Avanzar el índice del texto según la longitud de la llave
        i += llaves[j][1].length - 1;
        // Salir del bucle interno
        break;
        }
    }
    }
    // Si no se encontró la llave, mantener la letra original
    if (!encontrada) {
    desencriptado += letra;
    }
}
// Devolver el texto desencriptado
return desencriptado;
}  
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 3
/*
//Funciones encriptar/desencriptar

var llaves=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];
function encriptar(mensaje){
    for(let i=0;i<llaves.length;i++){
    mensaje=mensaje.replaceAll(llaves[i][0],llaves[i][1]);
    }
    return mensaje;
}
//NO USAR llaves = llaves.reverse(); USAR LO SIGUIENTE:
var llavesReverse=[
    ["u","ufat"],
    ["o","ober"],
    ["a","ai"],
    ["i","imes"],
    ["e","enter"] 
];
function desencriptar(mensaje){
    for(let i=0;i<llavesReverse.length;i++){
    mensaje=mensaje.replaceAll(llavesReverse[i][1],llavesReverse[i][0]);
    }
    return mensaje;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 4

//Matriz de llaves
var llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];
//Selector de columna de "llaves"
var columna = [0,1];

//Funcion encriptar
function encriptar(mensaje){  

//Procesando el mensaje a encriptar
for (let i = 0; i < llaves.length; i++) {
    mensaje = mensaje.replaceAll(llaves[i][columna[0]], llaves[i][columna[1]]);
}
//Retornando el mensaje encriptado
return mensaje;
}

//Funcion desencriptar
function desencriptar(mensaje){

//Para que la desencripcion sea correcta debe revertirse el orden de
//los elementos internos de cada matriz: "llaves" y "columna"
llaves.reverse(); columna.reverse();

//Procesando el mensaje a desencriptar
for (let i = 0; i < llaves.length; i++) {
//En la siguiente linea de codigo, en las matrices "llaves" y "columna",
//el orden interno de sus elementos se ha revertido, por ejemplo "columna"
//en su elemento [0], tiene un valor de "1" y en su elemnto [1], tiene
//un valor de "0". En "llaves" su elemento [0] es ['u', 'ufat']
//y su elemento [4] es ['e', 'enter']
//Todo lo anterio es necesario para una correcta desencriptacion
    mensaje = mensaje.replaceAll(llaves[i][columna[0]], llaves[i][columna[1]]);
}

//Los elementos internos de cada matriz, deben volver a su orden original
//para que nuevamente se pueda encriptar o desencriptar, de manera correcta
llaves.reverse(); columna.reverse();

//Retornando el mensaje desencriptado
return mensaje;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 5

// Función que encripta un texto usando las llaves de encriptación
/*
function encriptar(texto) {
// Reemplaza cada letra por su correspondiente llave
texto = texto.replace(/e/g, "enter");
texto = texto.replace(/i/g, "imes");
texto = texto.replace(/a/g, "ai");
texto = texto.replace(/o/g, "ober");
texto = texto.replace(/u/g, "ufat");
// Devuelve el texto encriptado
return texto;
}

// Función que desencripta un texto usando las llaves de encriptación
function desencriptar(texto) {
// Reemplaza cada llave por su correspondiente letra
texto = texto.replace(/ufat/g, "u");
texto = texto.replace(/ober/g, "o");
texto = texto.replace(/ai/g, "a");
texto = texto.replace(/imes/g, "i");
texto = texto.replace(/enter/g, "e");
// Devuelve el texto desencriptado
return texto;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 6

// Objeto que guarda las llaves de encriptación
/*
var llaves = {
"e": "enter",
"i": "imes",
"a": "ai",
"o": "ober",
"u": "ufat"
};

// Función que encripta el texto
function encriptar(texto) {
// Expresión regular que busca las letras que tienen llave
var regex = /[eiaou]/g;
// Reemplaza las letras por los valores de las llaves usando una función de callback
var encriptado = texto.replace(regex, function(match) {
return llaves[match];
});
return encriptado;
}

// Función que desencripta el texto
function desencriptar(texto) {
// Expresión regular que busca los valores de las llaves
var regex = /enter|imes|ai|ober|ufat/g;
// Reemplaza los valores de las llaves por las letras usando una función de callback
var desencriptado = texto.replace(regex, function(match) {
// Busca la llave que tiene el valor coincidente
for (var llave in llaves) {
    if (llaves[llave] == match) {
        return llave;
    }
}
});
return desencriptado;
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 7
/*
//Objeto que guarda las llaves de encriptación
var llaves = {
"e": "enter",
"i": "imes",
"a": "ai",
"o": "ober",
"u": "ufat"
};

// Función que encripta el texto
function encriptar(texto) {
var encriptado = "";
for (var i = 0; i < texto.length; i++) {
var letra = texto[i];
if (llaves[letra]) {
    // Si la letra tiene una llave, la reemplaza por el valor
    encriptado += llaves[letra];
} else {
    // Si no, la deja igual
    encriptado += letra;
}
}
return encriptado;
}

//Función que desencripta el texto
function desencriptar(texto) {
var desencriptado = "";
var i = 0;
while (i < texto.length) {
var letra = texto[i];
var encontrado = false;
// Busca si la letra es el inicio de una llave
for (var llave in llaves) {
    var valor = llaves[llave];
    var longitud = valor.length;
    // Compara el texto con el valor de la llave
    if (texto.substring(i, i + longitud) == valor) {
        // Si coincide, lo reemplaza por la llave
        desencriptado += llave;
        // Avanza el índice según la longitud del valor
        i += longitud;
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    // Si no encuentra ninguna llave, deja la letra igual
    desencriptado += letra;
    i++;
}
}
return desencriptado;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*/ Función que copia el texto de un elemento al portapapeles
function copiar(elemento) {
// Selecciona el texto del elemento
elemento.select();
// Copia el texto al portapapeles
navigator.clipboard.writeText(elemento.value);
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const SelecElement = (selec) => {
    return document.querySelector(selec);
  }

  const setWarn = (text) => {
    SelecElement('.warning p').textContent = `${text}`;
  }*/

  function SelecElement(selec) {
    return document.querySelector(selec);
}

function info(text) {
    const pElement = SelecElement('.warning p');
    pElement.textContent = text;
    pElement.style.color = 'red'; // Cambia el color del texto a rojo
}

function infoOriginal(text) {
    const pElement = SelecElement('.warning p');
    pElement.textContent = text;
    pElement.style.color = 'var(--dark-blue-500)'; // Cambia el color del texto a negro
}


// Función que copia el texto de un elemento al portapapeles
function copiar(elemento) { 
    // Selecciona el texto del elemento
    elemento.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    /*if(elemento.value==""){alert("El texto está vacío. Ingrese un texto para procesarlo")}else{
    alert("Texto copiado al portapapeles");}*/
    info("Texto copiado al portapapeles");
    setTimeout(()=>{infoOriginal("Sólo letras minúsculas y sin tilde")},3500);
    }
    
    // Función que limpia el texto de un elemento
    function limpiar(elemento) {
        // Borro el texto del elemento
        elemento.value = "";
    }
    // Función que limpia el portapapeles
    function limpiarPortapapeles() {
        // Limpio el portapapeles
        navigator.clipboard.writeText("");
    }
// Función que valida que el texto introducido sea válido
function validar(texto) {
    // Creo una expresión regular para buscar caracteres no permitidos
    var regex = /[A-ZÁÉÍÓÚáéíóú]/g;
    // Verifico si el texto contiene caracteres no permitidos
    if (regex.test(texto)) {
        // Muestro un mensaje de error
        //alert("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas sin tilde.");
        info("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas sin tilde.");
        setTimeout(()=>{infoOriginal("Sólo letras minúsculas y sin tilde")},3500);
        // Devuelvo falso
        return false;
    } else {
        // Devuelvo verdadero
        return true;
    }
}

// Función que procesa el texto según la opción elegida
function procesar(opcion) {
    var btncopiar = document.getElementById("copy")
    // Obtengo el elemento que contiene el texto original
    var textoIngresado = document.getElementById("texto");
    // Obtengo el elemento que contiene el texto encriptado
    var textoProcesado = document.getElementById("resultado");
    // Obtengo el valor del texto original
    var texto = textoIngresado.value;
    // Verifico que el texto no esté vacío
    if (texto != "") {
        // Verifico que el texto sea válido
        if (validar(texto)) {
            // Verifico la opción elegida
            if (opcion == "encriptar") {
                // Encripto el texto y lo asigno al texto encriptado
                textoProcesado.value = encriptar(texto);
                textoProcesado.style.backgroundImage="none";
                btncopiar.style.display='block';
                
            } else if (opcion == "desencriptar") {
                // Desencripto el texto y lo asigno al texto encriptado
                textoProcesado.value = desencriptar(texto);
                textoProcesado.style.backgroundImage="none";
                btncopiar.style.display='block';
            }
            }
            // Limpio el texto original
            limpiar(textoIngresado);
        } else {
        // Muestro un mensaje de error
        info("El texto está vacío. Por favor, introduzca algún texto.");
        setTimeout(()=>{infoOriginal("Sólo letras minúsculas y sin tilde")},3500);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var texto = document.getElementById("texto");
//Restablecer mensaje informativo al borrar contenido del input de texto
texto.addEventListener("input", function() {
    if (texto.value === "") {
    infoOriginal("Sólo letras minúsculas y sin tilde");
        }
    });
    
//Limpiar "resultado" si se hace click en input de texto
texto.addEventListener("click", function() {
limpiar(document.getElementById('resultado'));
document.getElementById("resultado").style.backgroundImage=muneco;
infoOriginal("Sólo letras minúsculas y sin tilde");
});
    

var muneco="url('imagenes/search-img.svg')";
var btncopiar = document.getElementById("copy");

//Funcion onclick del boton Copiar
function onclickCopiar(){
    //var btncopiar = document.getElementById("copy");
    copiar(document.getElementById('resultado'));
    limpiar(document.getElementById('resultado'));
    document.getElementById("resultado").style.backgroundImage=muneco;
    btncopiar.style.display='none'; 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion onclick del boton Limpiar
function onclickLimpiar(){
    //var btncopiar = document.getElementById("copy");
    limpiar(document.getElementById('texto')); 
    limpiar(document.getElementById('resultado'));
    limpiarPortapapeles();
    document.getElementById("resultado").style.backgroundImage=muneco;
    btncopiar.style.display='none';
    infoOriginal('Sólo letras minúsculas y sin tilde');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
