let i = 0; /*placeholder with typing animation*/
let placeholder = "";
const txt = "Email@domain.ru";
const speed = 200;

function type(){
    placeholder += txt.charAt(i);
    document.getElementById("email-id").setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
}

type();
