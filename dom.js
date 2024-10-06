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
    mostrarSugeriments();
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
    let nouParagraf=document.createElement('p');
    nouParagraf.id = 'paragraf'
    nouInput.type = 'text';
    nouInput.id = 'inputText';
    nouInput.placeholder = 'Escriu el que vulguis';
    let nouButton = document.createElement('button');
    nouButton.id = 'enviar';
    nouButton.textContent = 'Enviar ➡️';
    nouForm.appendChild(nouInput);
    nouForm.appendChild(nouButton);
    nouForm.appendChild(nouParagraf);
    body.appendChild(nouForm);
}

//Quan l'usuari escrigui text i faci click al botó, mostra el text que ha introduït dins d'un nou element p
function mostrarText(){
    let paragraf = document.getElementById('paragraf')
    let boto = document.getElementById('enviar');
    boto.addEventListener('click', (event)=>{
        event.preventDefault();
        let textIntro = document.getElementById('inputText').value;
        paragraf.textContent=textIntro;
        textIntro.textContent = "";
    });
}

//Exercici 4: Creació dinàmica d'elements
//Afegeix un formulari amb un camp de text per introduir suggeriments
function afegirFormSugeriments(){
    let body = document.querySelector('body');
    let form = document.createElement('form');
    let input = document.createElement('input');
    let btn = document.createElement('button');
    let div = document.createElement('div');
    div.id = 'llista';
    btn.textContent = 'Suggerir 🤔';
    btn.id = 'sug';
    input.type = 'text';
    input.id = 'sugeriment';
    input.placeholder = 'Suggeriments';
    form.appendChild(input);
    form.appendChild(btn);
    form.appendChild(div);
    body.appendChild(form);
}

//Afegeix els suggeriments a una llista mostrada a la pàgina
function mostrarSugeriments(){
    let llista = document.getElementById('llista');
    let boto = document.getElementById('sug');
    boto.addEventListener('click', (event)=>{
        event.preventDefault();
        let suggeriment = document.getElementById('sugeriment').value;
        let nouLi = document.createElement('li');
        nouLi.textContent = suggeriment;
        llista.appendChild(nouLi);
        suggeriment.textContent = "";
        afegirBotonsSugeriments(nouLi)
    });
}

//Cada suggeriment ha de tenir un botó per marcar-lo com realitzat (canviar estil) i un botó per eliminar-lo
function afegirBotonsSugeriments(li){
    let btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.id = 'eliminar';
    let btnRealitzat = document.createElement('button');
    btnRealitzat.textContent = 'Realitzat';
    btnRealitzat.id = 'realitzat';
    li.appendChild(btnEliminar);
    li.appendChild(btnRealitzat);
    btnEliminar.addEventListener('click', (event)=>{
        event.preventDefault();
        li.remove();
    });
    btnRealitzat.addEventListener('click', (event)=>{
        event.preventDefault();
        if (li.style.textDecoration === 'line-through'){
            li.style.textDecoration = 'none';
            li.style.color = 'black';
            btnRealitzat.textContent = 'Realitzat';
        } else {
            li.style.textDecoration = 'line-through';
            li.style.color = 'grey';
            btnRealitzat.textContent = 'Desfer';
        }
    });
}