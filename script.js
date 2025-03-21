var csr = document.querySelector(".csr")
var main = document.querySelector("#main")
var kaka = document.querySelectorAll("#bottom .elem")


main.addEventListener("mousemove",function(elem){

    gsap.to(csr,{
        x:elem.x,
        y:elem.y
    })
    
})
gsap.from(kaka,{
    x:500,
    duration:1,
    
})