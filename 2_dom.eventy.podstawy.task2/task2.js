var button1 = document.querySelector("#button1");

var button2 = document.querySelector("#button2");

var button3 = document.querySelector("#button3");


// Dla button 1
var span1 = document.querySelector(".counter1");

var clickCount1 = 0;

function clickCounter1(event) {
    clickCount1 += 1;
    span1.innerText = clickCount1;
}

button1.addEventListener("click", clickCounter1);


// Dla button 2
var span2 = document.querySelector('.counter2');

var clickCount2 = 0;

function clickCounter2(event) {
    clickCount2 += 1;
    span2.innerText = clickCount2;
}

button2.addEventListener('click', clickCounter2);


// Dla button 3
var span3 = document.querySelector('.counter3');

var clickCount3 = 0;

function clickCounter3(event) {
    clickCount3 += 1;
    span3.innerText = clickCount3;
}

button3.addEventListener('click', clickCounter3);