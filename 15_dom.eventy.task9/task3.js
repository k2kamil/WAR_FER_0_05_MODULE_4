document.addEventListener('DOMContentLoaded', function () {
    const textEnter = document.querySelector('#text');
    const textPrint = document.querySelector('.content');
    const textLength = document.querySelector('#length');

    textEnter.addEventListener("keydown", keydown);
    textEnter.addEventListener('keyup', keyup);

    function keydown(e) {
        textPrint.innerText = this.value;
    };

    function keyup(e){
        textLength.innerText = this.value.length;
        if (this.value.length > 30) {
            this.value = this.value.substr(0,30);
        };
    };
});

