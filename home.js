const ham = document.getElementById("ham");
const nav = document.getElementById("nav");
const close = document.getElementById("close");
ham.addEventListener('click',()=>{
  nav.classList.toggle("move");
  ham.style.display = "none";
  close.style.display = "block";
})

close.addEventListener('click',()=>{
  nav.classList.remove("move");
  close.style.display = "none";
  ham.style.display = "block";
})

window.addEventListener('resize',()=>{
  if(window.innerWidth>1250)
  {
    ham.style.display = "none";
    close.style.display = "none";
  }
})

window.addEventListener('resize',()=>{
  if(window.innerWidth<1250)
  {
    ham.style.display = "block";
    close.style.display = "none";
  }
})

// window.addEventListener("scroll",function(){
//   var header = document.querySelector("header div");
//   header.classList.toggle('sticky',window.scrollY>0)
// })
