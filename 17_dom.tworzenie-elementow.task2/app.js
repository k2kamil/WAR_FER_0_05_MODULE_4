document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('add');

    const ul = document.querySelector('.menu');

    let clickCount = 0;

    btn.addEventListener('click', function(){
        let newLi = document.createElement('li');
        clickCount++;
        newLi.innerText = clickCount;
        ul.append(newLi);
    });
});