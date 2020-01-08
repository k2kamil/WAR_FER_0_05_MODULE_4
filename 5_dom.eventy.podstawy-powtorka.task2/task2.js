const width = document.querySelector("#windowWidth");

const height = document.querySelector("#windowHeight");

width.innerText = window.innerWidth;

height.innerText = window.innerHeight;

window.addEventListener("resize", function (){
    console.log("1234");

    width.innerText = window.innerWidth;

    height.innerText = window.innerHeight;
});