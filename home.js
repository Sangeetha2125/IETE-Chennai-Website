const ham = document.getElementById("ham");
const nav = document.getElementById("nav");
const close = document.getElementById("close");
let ham_on = true
ham.addEventListener('click',()=>{
  nav.classList.toggle("move");
  ham.style.display = "none";
  close.style.display = "block";
  ham_on = true
})

close.addEventListener('click',()=>{
  nav.classList.remove("move");
  close.style.display = "none";
  ham.style.display = "block";
  ham_on = false
})

window.addEventListener('resize',()=>{
  if(window.innerWidth>1036)
  {
    ham.style.display = "none";
    close.style.display = "none";
  }
})

window.addEventListener('resize',()=>{
  if(window.innerWidth<1036)
  {
    if(ham_on==true)
    {
      ham.style.display = "none";
      close.style.display = "block";
    }
    else
    {
      ham.style.display = "block";
      close.style.display = "none";
    }
  }
})