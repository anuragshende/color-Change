let btn = document.querySelector(".btn");
let h1 =  document.querySelector("h1")
btn.addEventListener("click",()=>{
      
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let color = `rgba(${r}, ${g}, ${b}, 1)`;

     
document.body.style.backgroundColor = color;


})