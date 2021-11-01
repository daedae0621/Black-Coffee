
function check() {
    document.getElementById("menu").classList.toggle("hidden");
}
function init() {
    document.getElementById("hbBtn").onclick = check;
}

window.addEventListener("load", init, false);
