//Función onload
function init(){
    cambiarTitulo();
    afegirLlista();
    modificarText();
}

//Exercici 1
//Canviar el contingut del títol
function cambiarTitulo(){
    return document.querySelector('h1').textContent = 'Hola, mundo!';
}

//Afegir un nou element a la llista
function afegirLlista(){
    let nouElement = document.createElement('li');
    nouElement.textContent = 'Nou element';
    let ul = document.querySelector('ul');
    ul.appendChild(nouElement);
}

//Modificar el text del paràgraf quan es faci click al botó
function modificarText(){
    let parrafo = document.querySelector('p');
    let boton = document.getElementById('canviText');
    boton.addEventListener('click', function(){
        parrafo.textContent = 'El text del paràgraf ha canviat!';
    });
}