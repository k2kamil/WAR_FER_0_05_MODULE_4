document.addEventListener('DOMContentLoaded', function (){
   let list = document.querySelectorAll('li');

   let btn = document.querySelector('#remove');

   btn.addEventListener('click', function(){
      list.forEach(li => {
          li.remove();
      });
   });
});