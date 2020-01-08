document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll(".btn");

    console.log(btns);

    btns.forEach(btn => btn.addEventListener('click', finishedTask))
});

function finishedTask(event) {
    event.preventDefault();

    console.log(this.dataset.id);
    let li = document.querySelector(`li[data-id = "${this.dataset.id}"]`);

    console.log(li);

    li.classList.add('finished');

    this.classList.remove('btn-primary');
    this.classList.add('btn-success');
    this.innerText = 'Zakończone';
    this.removeEventListener('click', finishedTask);
    this.addEventListener('click', blockRefresh);
}

function blockRefresh (e) {
    e.preventDefault();
    console.log('Siema');
}