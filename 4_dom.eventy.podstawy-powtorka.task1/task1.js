const boxes = document.querySelectorAll(".box");

function colorChanger(event){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    event.target.style.backgroundColor = randomColor;
    console.log(event);
}

boxes.forEach(div => {
    div.addEventListener('click', colorChanger);
});

