let buttons = document.querySelectorAll(".buttons");
let basketCase = document.querySelector(".basketCase");
let basket = document.querySelector(".basket");
let totalPriceDiv = document.querySelector(".totalPrice");
let fruitBasket = document.querySelector(".fruitBasket");

buttons.forEach(x => {
    x.addEventListener("click", function () {
        if (x.getAttribute("data-target") == "Səbət") {
            basketCase.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "Hesabla") {
            totalPriceDiv.classList.remove("hide");
        }
    })
})


let pear1 = document.querySelector(".pear1");
let pear2 = document.querySelector(".pear2");
let pear3 = document.querySelector(".pear3");
let dragItem;
pear1.ondragstart = function () {
    dragItem = this;
}

pear2.ondragstart = function () {
    dragItem = this;
}

pear3.ondragstart = function () {
    dragItem = this;
}


let apple1 = document.querySelector(".apple1");
let apple2 = document.querySelector(".apple2");
let apple3 = document.querySelector(".apple3");


apple1.ondragstart = function () {
    dragItem = this;
}

apple2.ondragstart = function () {
    dragItem = this;
}

apple3.ondragstart = function () {
    dragItem = this;
}

let Peach1 = document.querySelector(".peach1");
let Peach2 = document.querySelector(".peach2");
let Peach3 = document.querySelector(".peach3");


Peach1.ondragstart = function () {
    dragItem = this;
}

Peach2.ondragstart = function () {
    dragItem = this;
}

Peach3.ondragstart = function () {
    dragItem = this;
}
let Orange1 = document.querySelector(".orange1");
let Orange2 = document.querySelector(".orange2");
let Orange3 = document.querySelector(".orange3");


Orange1.ondragstart = function () {
    dragItem = this;
}

Orange2.ondragstart = function () {
    dragItem = this;
}

Orange3.ondragstart = function () {
    dragItem = this;
}


basket.ondragover = function (e) {
    e.preventDefault();
}

let fruitType = null;
let totalPrice = 0;

basket.ondrop = function () {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPriceDiv.classList.add("hide")
        basket.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id");
        totalPrice += parseFloat(dragItem.children[2].children[0].textContent.split(":")[1])
        totalPriceDiv.textContent = "( Ümumi qiymət: " + totalPrice + " )"
        fruitBasket.textContent = fruitType
    }
}