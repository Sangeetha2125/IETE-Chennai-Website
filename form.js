const form = document.querySelector(".login")

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  validateInputs();
})

function validateInputs()
{
  message = ''
  const username = document.querySelector("#uname");
  const email = document.querySelector("#email-id");
  const subject = document.querySelector("#subject");
  const msg = document.querySelector("#message");

  if(username.value === ""){
    message = "Please fill username !";
    showerror(username,message);
  }
  else
    showsuccess(username)

  if(email.value===""){
    message = "Please fill Email !"
    showerror(email,message);
  }
  else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
    message = "Email address is not valid"
    showerror(email,message);
}
  else 
    showsuccess(email);

  if(subject.value === '')
  {
    message = "Please enter subject !"
    showerror(subject,message);
  }
  else 
    showsuccess(subject,message);

  if(msg.value === '')
  {
    message = "Please enter the message !"
    showerror(msg,message);
  }
  else 
    showsuccess(msg,message);

}

function showerror(element,message) {
  const parent = element.parentElement;
  const error = parent.querySelector('.error');
  const input = parent.querySelector('input');
  const textarea = parent.querySelector('textarea');
  if(textarea)
    textarea.style.borderColor = "red";
  else
    input.style.borderColor = "red";
  error.innerHTML = message;
}

function showsuccess(element) {
  const parent = element.parentElement;
  const error = parent.querySelector('.error');
  const input = parent.querySelector('input');
  const textarea = parent.querySelector('textarea');
  if(textarea)
    textarea.style.borderColor = "#01023b";
  else
    input.style.borderColor = "#01023b";
  error.innerHTML = '';
}



