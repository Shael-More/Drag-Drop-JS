let items = document.getElementsByClassName('item');

let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');

for(let item of items) {
    item.addEventListener("dragstart", e => {
        let select = e.target;

        rightBox.addEventListener("dragover", e => {
            e.preventDefault();
        })

        rightBox.addEventListener("drop", e => {
            rightBox.appendChild(select);
            select = null;
        })
        leftBox.addEventListener("dragover", e => {
            e.preventDefault();
        })

        leftBox.addEventListener("drop", e => {
            leftBox.appendChild(select);
            select = null;
        })


    })
}