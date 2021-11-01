

function plus() {
    let amount = document.getElementById("amount");

    if (parseInt(amount.value) < 100) {
        amount.value = parseInt(amount.value) + 1;
    }
}

function minus() {
    let amount = document.getElementById("amount");
    if (parseInt(amount.value) > 1) {
        amount.value = parseInt(amount.value) - 1;
    }
}

function init() {
    document.getElementById("plus").onclick = plus;
    document.getElementById("minus").onclick = minus;
}


window.addEventListener("load", init, false)