function listToggle0() {
    document.getElementsByClassName("list-item")[0].classList.toggle("check");
}
function listToggle1() {
    document.getElementsByClassName("list-item")[1].classList.toggle("check");
}
function listToggle2() {
    document.getElementsByClassName("list-item")[2].classList.toggle("check");
}
function listToggle3() {
    document.getElementsByClassName("list-item")[3].classList.toggle("check");
}


function init() {
    document.getElementsByClassName("list-item")[0].classList.toggle("check");
    category = document.getElementsByClassName("category");
    category[0].onclick = listToggle0;
    category[1].onclick = listToggle1;
    category[2].onclick = listToggle2;
    category[3].onclick = listToggle3;
}


window.addEventListener("load", init, false);
