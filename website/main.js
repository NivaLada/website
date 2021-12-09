const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    img1.style.backgroundPositionY = offset * -0.3 + "px";
    img2.style.backgroundPositionY = offset * -0.08 + "px";
})