document.addEventListener ('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function(el){
        el.addEventListener('click', function (e) {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    });
});

