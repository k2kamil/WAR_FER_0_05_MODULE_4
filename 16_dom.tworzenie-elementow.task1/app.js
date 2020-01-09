document.addEventListener('DOMContentLoaded', function() {
    const usun= document.querySelectorAll('.deleteBtn');
    console.log(usun);



    usun.forEach(btn => {
       btn.addEventListener('click', function() {
           this.closest("tr").remove();
        });
    });
});