document.addEventListener('DOMContentLoaded', function(){

    const orders = document.querySelector('#orders');

    const inputOrderId = document.querySelector('#orderId');

    const inputItem = document.querySelector('#item');

    const inputQuantity = document.querySelector('#quantity');

    const button = document.querySelector('#add');

    button.addEventListener('click', function () {
        console.log(inputOrderId.value);
        let orderId = inputOrderId.value;
        let item = inputItem.value;
        let quantity = inputQuantity.value;

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.innerText = orderId;
        td2.innerText = item;
        td3.innerText = quantity;

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);

        orders.append(tr);

        //pobierz wartość inputów 3x
        //Tworzysz elementy tr, td x3
        //td wrzucasz text z inputów - innerText
        //td wrzucasz do tr
        //tr wrzucasz do #orders
    })

});