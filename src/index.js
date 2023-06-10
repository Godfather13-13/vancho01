
import throttle from  "lodash.throttle";

const ref = {
form : document.querySelector('.feedback-form'),
email :  document.querySelector(`input[name="email"]`),
message : document.querySelector(`textarea[name="message"]`)
};


const STORAGE_KEYS = {
    email: 'review_email',
    messageRev: 'review_msg',
  };


ref.form.addEventListener("submit", onFormSubmit )
ref.email.addEventListener("input", throttle(onEmailInput, 11500));
ref.message.addEventListener("input", throttle(onTextAreaInput, 500));


populateTexarea();

populateEmail();

function onFormSubmit(evt){
    evt.preventDefault();
    const formData = {
       email : ref.email.value,
      message : ref.message.value 
};
console.log(formData)
evt.target.reset()
localStorage.removeItem(STORAGE_KEYS.email);
localStorage.removeItem(STORAGE_KEYS.messageRev);
};



function onEmailInput(evt){
    const messageRev = evt.target.value;
    localStorage.setItem(STORAGE_KEYS.email, messageRev);
};

function onTextAreaInput(evt){
    const messageRev = evt.target.value;
    localStorage.setItem(STORAGE_KEYS.messageRev, messageRev );
};

function populateEmail(){
    const saveEmail = localStorage.getItem(STORAGE_KEYS.email);
    if (saveEmail){
        ref.email.value = saveEmail
    }
}

function populateTexarea(){
    const saveTextarea = localStorage.getItem(STORAGE_KEYS.messageRev)
    if (saveTextarea){
        ref.message.value = saveTextarea
    }
}