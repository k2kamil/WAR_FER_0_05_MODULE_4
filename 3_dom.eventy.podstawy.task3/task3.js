var btns = document.querySelectorAll("button");

const span = document.querySelector('.counter');

console.log(btns);

var clickCount = 0;

function clickCounter (event) {
    clickCount += 1;
    span.innerText = clickCount;
}

btns.forEach(btn => {
    btn.addEventListener('click', clickCounter);
});
