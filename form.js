const username=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const mobileNumber=document.querySelector("#mobilenumber");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

console.log(email.value);

//errorNodes[0]="name not be blank"
//errorNodes[1]="email not blank"
//errorNodes[2]="password not blank"
//errorNodes[3]="mobile number not blank"
//errorNodes[4]="message not blank"


function validateForm()
{
    clearMessage();
    let errorFlag=false;
    if(username.value.length==""){
        errorNodes[0].innerText ='Name cannot be empty';
        errorFlag=true;
    }

    if(email.value.length ==""){
        errorNodes[1].innerText='Email cannot be empty';
        errorFlag=true;
    }

    if(emailValidation(email.value)){
        errorNodes[1].innerText='Invalid Email';
        errorFlag=true;
    }

    if(password.value.length ==""){
        errorNodes[2].innerText='Password cannot be empty';
        errorFlag=true;
    }

    if(passwordValidation(password.value)){
        errorNodes[2].innerText='Password must be 8 characters with one lowercase,one uppercase,one digit,one special character ';
        errorFlag=true;
    }

    if(mobileNumber.value ==""){
        errorNodes[3].innerText='Mobile number cannot be empty';
        errorFlag=true;
    }

    if(mobileNumber.value.length<10){
        errorNodes[3].innerText='Mobile number must be 10 Digit';
        errorFlag=true;
    }
      
    if(message.value.length<7){
        errorNodes[4].innerText='Message cannot be empty';
        errorFlag=true;
    }

    if(errorFlag==false){
        success.innerText='Form Validation Successful!';
    }
}

function emailValidation(el) {
    let epattern= /\S+@\S+\.\S+/;
    return epattern.test(el);
    // console.log(epattern.test(e1))
}

function passwordValidation(p1){
    let ppattern= /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;
    return ppattern.test(p1);

}

function clearMessage(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText="";
    }

    success.innerText="";
}



