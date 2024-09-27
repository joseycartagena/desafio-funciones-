// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


const ele = document.getElementById("ele1")

function pintar(color = 'green') {
        ele.style.backgroundColor = color;
}
pintar();

ele.addEventListener("click", function() {
        pintar('yellow');
});