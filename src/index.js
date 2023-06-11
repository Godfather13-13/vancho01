import throttl from "lodash.throttle";


const ref =
{ 
form : document.querySelector(`.feedback-form`),
email : document.querySelector(`input[name="email"]`),
message : document.querySelector(`textarea[name="message"]`)
};
const KEYS_NAME = {
    email : `ref_email`,
    message : `ref_message`
};

ref.form.addEventListener('submit', sendForm )
ref.email.addEventListener(`input`, throttl(sendemail, 500))
ref.message.addEventListener(`input`,throttl(sendMessage, 500))

function sendForm (evt) { 
    evt.preventDefault();
    const formDate = {
        email : ref.email.value,
        message : ref.message.value 
    };
    if(formDate.email == "" || formDate.message == ""){
        return
    };
    evt.target.reset()
    console.log(formDate);
localStorage.removeItem(KEYS_NAME.email)
localStorage.removeItem(KEYS_NAME.message)
};
getEmail ();
getMessage ();

function sendemail (evt) { 
    const emailData = evt.target.value
    localStorage.setItem(KEYS_NAME.email, emailData)
};


function sendMessage (evt) { 
    const messageDate = evt.target.value;
    localStorage.setItem(KEYS_NAME.message, messageDate)
};

function getEmail () {
    const emailav = localStorage.getItem(KEYS_NAME.email);
    if(emailav) { 
        ref.email.value = emailav
    }
};


function getMessage (){
    const messageev = localStorage.getItem(KEYS_NAME.message);
    if(messageev){
        ref.message.value = messageev
    }
}