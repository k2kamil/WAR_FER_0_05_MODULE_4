document.addEventListener('DOMContentLoaded', function(){
    const div = document.querySelector("#box");

    const span1 = document.querySelector('#globalX');
    const span2 = document.querySelector('#globalY');
    const span3 = document.querySelector('#localX');
    const span4 = document.querySelector('#localY');


    div.addEventListener('mousemove', function(event){
        span1.innerText = event.screenX;
        span2.innerText = event.screenY;

        let divX = this.offsetLeft;
        let divY = this.offsetTop;

        span3.innerText = event.screenX - divX;
        span4.innerText = event.screenY - divY;

    });
});
