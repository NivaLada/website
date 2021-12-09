const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    img1.style.backgroundPositionY = offset * -0.2 + "px";
    img2.style.backgroundPositionY = offset * -0.08 + "px";
    img3.style.backgroundPositionY = offset * -0.036 + "px";
    img4.style.backgroundPositionY = offset * -0.028 + "px";
})