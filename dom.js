//Función onload
function init(){
    //Exercici 1
    cambiarTitulo();
    afegirLlista();
    modificarText();
    //Exercici 2
    crearDiv();
    modificarDiv();

    //exercici 3
    createForm();
    mostrarText();

    //Exercici 4
    afegirFormSugeriments();
}

//PArt 1: Accés i modificació d'elements del DOM
//Exercici 1
//Canviar el contingut del títol
function cambiarTitulo(){
    return document.querySelector('h1').textContent = 'Hello, world! 🩷';
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
function createForm(){
    let body = document.querySelector('body');
    let nouForm = document.createElement('form');
    let nouInput = document.createElement('input');
    nouInput.type = 'text';
    nouInput.id = 'inputText';
    nouInput.placeholder = 'Escriu el que vulguis';
    let nouButton = document.createElement('button');
    nouButton.id = 'enviar';
    nouButton.textContent = 'Enviar ➡️';
    nouForm.appendChild(nouInput);
    nouForm.appendChild(nouButton);
    body.appendChild(nouForm);
}

//Quan l'usuari escrigui text i faci click al botó, mostra el text que ha introduït dins d'un nou element p
function mostrarText(){
    let body = document.querySelector('body');
    let boto = document.getElementById('enviar');
    boto.addEventListener('click', (event)=>{
        event.preventDefault();
        let textIntro = document.getElementById('inputText').value;
        let nouParagraf=document.createElement('p');
        nouParagraf.textContent=textIntro;
        body.appendChild(nouParagraf);
        textIntro.textContent = "";
    });
}

//Exercici 4: Creació dinàmica d'elements
//Afegeix un formulari amb un camp de text per introduir suggeriments
function afegirFormSugeriments(){
    let body = document.querySelector('body');
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'sugeriment';
    input.placeholder = 'Suggeriments';
    form.appendChild(input);
    body.appendChild(form);
    
}

//Afegeix els suggeriments a una llista mostrada a la pàgina

//Cada suggeriment ha de tenir un botó per marcar-lo com realitzat (canviar estil) i un botó per eliminar-lo

init();