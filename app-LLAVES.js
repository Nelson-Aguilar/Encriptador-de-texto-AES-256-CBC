//Funciones encriptar/desencriptar vistas en la mentoría de este challenge
//////////////////////////////////////////////////////////////////////////
var llaves = [
    ["e", "enter"], //indice 0
    ["i", "imes"],  //indice 1
    ["a", "ai"],    //indice 2
    ["o", "ober"],  //indice 3
    ["u", "ufat"]   //indice 4
];

function encriptar(mensaje){
    for(let i=0;i<llaves.length;i++){
        if(mensaje.includes(llaves[i][0])){
            mensaje=mensaje.replaceAll(
                llaves[i][0],
                llaves[i][1]
            )
        }
    }
    return mensaje;
};

function desencriptar(mensaje){
    for(let i=0;i<llaves.length;i++){
        if(mensaje.includes(llaves[i][1])){
            mensaje=mensaje.replaceAll(
                llaves[i][1],
                llaves[i][0]
            )
        }
    }
    return mensaje;
};


/*/INICIO FUNCIONES ENCRYP/DECRYP PRIMERA OPCION
// Función que encripta un texto usando las llaves de encriptación
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
//FIN FUNCIONES ENCRYP/DECRYP PRIMERA OPCION

*//////////////////////////////////////////////////////
/*/INICIO FUNCIONES ENCRYP/DECRYP SEGUNDA OPCION
// Objeto que guarda las llaves de encriptación
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
// Reemplaza los valores por las letras usando una función de callback
var desencriptado = texto.replace(regex, function(match) {
// Busca la llave que tiene el valor coincidente
for (var llave in llaves) {
    if (llaves[llave] == match) {
        return llave;
    }
}
});
return desencriptado;
}
//FIN FUNCIONES ENCRYP/DECRYP SEGUNDA OPCION*/

////////////////////////////////////////////////////////////
//INICIO FUNCIONES ENCRYP/DECRYP TERCERA OPCION
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
//FIN FUNCIONES ENCRYP/DECRYP TERCERA OPCION
////////////////////////////////////////////////////////////////////

/*/ Función que copia el texto de un elemento al portapapeles
function copiar(elemento) {
// Selecciona el texto del elemento
elemento.select();
// Copia el texto al portapapeles
navigator.clipboard.writeText(elemento.value);
}*/

//////////////////////////////////////////////////////////////

// Función que copia el texto de un elemento al portapapeles
function copiar(elemento) { 
    // Selecciona el texto del elemento
    elemento.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    if(elemento.value==""){alert("El texto está vacío. Ingrese un texto para procesarlo")}else{
    alert("Texto copiado al portapapeles");}
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
        alert("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas sin tilde.");
        // Devuelvo falso
        return false;
    } else {
        // Devuelvo verdadero
        return true;
    }
}
// Función que procesa el texto según la opción elegida
function procesar(opcion) {
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
            } else if (opcion == "desencriptar") {
                // Desencripto el texto y lo asigno al texto encriptado
                textoProcesado.value = desencriptar(texto);
            }
            }
            // Limpio el texto original
            limpiar(textoIngresado);
        } else {
        // Muestro un mensaje de error
        alert("El texto está vacío. Por favor, introduzca algún texto.");
    }
}
////////////////////////////////////////////////////////////////
//Funcion onclick del boton Copiar
function onclickCopiar(){
    copiar(document.getElementById('resultado'));
    limpiar(document.getElementById('resultado'));
}
//////////////////////////////////////////////
//Funcion onclick del boton Limpiar
function onclickLimpiar(){
    limpiar(document.getElementById('texto')); 
    limpiar(document.getElementById('resultado'));
    limpiarPortapapeles();
}
////////////////////////////////////////
