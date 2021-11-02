function newsDetail() {
    document.querySelector(".news-detail").style.display = "block";
    document.getElementsByClassName("close-btn")[0].onclick = close;
    document.getElementsByClassName("close-btn")[1].onclick = close;

}

function close() {
    document.querySelector(".news-detail").style.display = "none";
}

function init() {
    let a = document.querySelectorAll(".item");
    a[0].onclick = newsDetail;
    for (i = 0; i < 9; i++) {
        document.querySelectorAll(".item")[i].onclick = newsDetail;
    }
}

window.addEventListener("load", init, false);