//Función onload
function init(){
    //Exercici 1
    cambiarTitulo();
    afegirLlista();
    modificarText();
    //Exercici 2
    crearDiv();
    modificarDiv();
}

//PArt 1: Accés i modificació d'elements del DOM
//Exercici 1
//Canviar el contingut del títol
function cambiarTitulo(){
    return document.querySelector('h1').textContent = 'Hello, world! 🤠';
}

//Afegir un nou element a la llista
function afegirLlista(){
    let nouElement = document.createElement('li');
    nouElement.textContent = 'Nou element 🌚';
    let ul = document.querySelector('ul');
    ul.appendChild(nouElement);
}

//Modificar el text del paràgraf quan es faci click al botó
function modificarText(){
    let parrafo = document.querySelector('p');
    let boton = document.getElementById('canviText');
    boton.addEventListener('click', ()=>{
        parrafo.textContent = 'El text del paràgraf ha canviat! 🧐';
    });
}

//Part 2: Manipulació d'estils i classes
//Exercici 2
//Crea un element div dins la pàgina html amb text
function crearDiv(){
    let body = document.querySelector('body')
    let nouDiv = document.createElement('div');
    nouDiv.id = 'newDiv';
    nouDiv.textContent = 'Fes-me click! 🤪';
    body.appendChild(nouDiv);
}

//Quan el usuari faci click sobre el div canvia el color del text i la mida de la font
function modificarDiv(){
    let div = document.getElementById('newDiv');
    div.addEventListener('click', ()=>{
        div.style.color = 'blue';
        div.style.fontSize = '30px';
    });
}

//Part 3: Esdeveniments i interacció

//Exercici 3
//Crear un formulari amb un camp de text i un botó d'enviament

//Quan l'usuari esqrigui text i faci click al botó, mostra el text que ha introduït dins d'un nou element p

//Exercici 4: Creació dinàmica d'elements
//Afegeix un formulari amb un camp de text per introduir suggeriments

//Afegeix els suggeriments a una llista mostrada a la pàgina

//Cada suggeriment ha de tenir un botó per marcar-lo com realitzat (canviar estil) i un botó per eliminar-lo