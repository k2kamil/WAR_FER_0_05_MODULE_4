let a1 = document.querySelector("article:nth-child(1) > a");

let a2 = document.querySelector("article:nth-child(2) > a");

let a1hide = document.querySelector("article:nth-child(1) > .content a");

let a2hide = document.querySelector("article:nth-child(2) > .content a");

let div1 = document.querySelector("article:nth-child(1) > .content");

let div2 = document.querySelector("article:nth-child(2) > .content");

console.log(a1);

console.log(a2);

console.log(a1hide);

console.log(a2hide);

console.log(div1);

console.log(div2);

// Ustawienia dla 1.linku
function removeHide1 () {
    div1.classList.remove("hide");
}

function addHide1 () {
    div1.classList.add("hide");
}

a1.addEventListener('click', removeHide1);

a1hide.addEventListener('click', addHide1);

// Ustawienia dla 2.linku
function removeHide2 () {
    div2.classList.remove("hide");
}

function addHide2 () {
    div2.classList.add("hide");
}

a2.addEventListener('mouseover', removeHide2);

a2hide.addEventListener('click', addHide2);


