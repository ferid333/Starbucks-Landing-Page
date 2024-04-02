const mainphoto=document.querySelector(".mainphoto")
const btns=document.querySelectorAll(".btns")
const green=document.querySelector(".greens")

btns.forEach(item=>{
    item.addEventListener("click",e=>{
        console.log(e.target)
        link=e.target.src.split("/")[4]
        if(link=="thumb1.png"){
            mainphoto.src="img/img1.png"
            green.style.background="green"
        }
        if(link=="thumb2.png"){
            mainphoto.src="img/img2.png"
            green.style.background="pink"
        }
        if(link=="thumb3.png"){
            mainphoto.src="img/img3.png"
            green.style.background="rgb(235, 11, 235)"
        }
        
       
    })
})