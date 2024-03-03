const userName = document.querySelector("[name=userName]");
const userEmail = document.querySelector("[name=userEmail]");
const userNumb = document.querySelector("[name=userNumb]");
const userPassword = document.querySelector("[name=userPassword]");
userName.addEventListener("blur", function (e) {
    const field = e.target;
    const fieldValue = e.target.value;
    if(field.value.length == 0){
        field.classList.add("invalido");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText="el nombre de usuario es requerido"
    }
});
