
    document.addEventListener('DOMContentLoaded', function() {
        let list1 = document.querySelector('#list1');
        let list2 = document.querySelector('#list2');
        const allBtn = document.querySelectorAll('.moveBtn');
        allBtn.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                let toMove = this.parentElement;
                console.log(toMove);
                let whichList = this.closest('ul').id;
                if(whichList === 'list1') {
                    list2.append(toMove);
                } else {
                    list1.append(toMove)
                }
            });
        });
    });

