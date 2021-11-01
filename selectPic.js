function showLarge(e) {
    let small = e.target;
    let imgAlt = small.alt;
    let coffeeIntro = document.getElementById("coffeeIntro");
    let coffeeName = document.getElementById("coffeeName");
    document.getElementsByClassName("lgPic")[0].src = small.src;
    console.log(coffeeName.innerHTML);
    switch (imgAlt) {
        case "americano":
            coffeeIntro.innerText = "以歐洲方式調製，結合經典濃縮咖啡及熱水，帶來濃郁豐富的咖啡滋味。"
            coffeeName.innerHTML = "美式咖啡 <small>Caffè Americano</small>"
            break;
        case "latte":
            coffeeIntro.innerText = "濃郁醇厚的濃縮咖啡，搭配新鮮蒸煮的優質鮮奶，覆上綿密細緻的奶泡。"
            coffeeName.innerHTML = "那堤 <small>Caffè Latte</small>"
            break;

        case "Macchiato":
            coffeeIntro.innerText = "融合優質鮮奶及香草風味糖漿後，倒入濃縮咖啡並在牛奶上覆以香甜焦糖醬，呈現多層次風味。"
            coffeeName.innerHTML = "焦糖瑪奇朵<small>Caramel Macchiato</small>"
            break;
    }
}

function init() {
    let imgs = document.getElementsByClassName("smPic");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
    }
}
window.addEventListener("load", init, false);