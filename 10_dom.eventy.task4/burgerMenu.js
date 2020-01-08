document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.mobile');

    nav.classList.add("hide");

    const btn = document.querySelector('.mobile-menu-btn');
    console.log(btn);

    function blockRefresh (e) {
        e.preventDefault();
    }

    function removeHide (event) {
        nav.classList.remove('hide');
    }

    function addHide (event) {
        nav.classList.add('hide');
    }


    btn.addEventListener('click', removeHide);
    this.removeEventListener('click', addHide);
    this.addEventListener('click', blockRefresh);
});

