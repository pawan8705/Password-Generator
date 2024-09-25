let lengthslider = document.getElementById("lengthslider");
let slidervalue = document.getElementById("slidervalue");

slidervalue.textContent = lengthslider.value;

lengthslider.addEventListener("input", () => {
    slidervalue.textContent = lengthslider.value
});

let checkboxes = document.querySelectorAll(".checkbox");

Array.from(checkboxes).forEach(Element => {
    Element.addEventListener("click", (e) => {
        if (e.target.innerText == "radio_button_unchecked") {
            e.target.innerText = "task_alt";
            e.target.nextElementSibling.nextElementSibling.checked = true;
        }
        else {
            e.target.innerText = "radio_button_unchecked";
            e.target.nextElementSibling.nextElementSibling.checked = false;
        }
    });
});

let includelable = document.querySelectorAll(".row lable");

Array.from(includelable).forEach(Element => {
    Element.addEventListener("click", (e) => {
        if (e.target.previousElementSibling.innerText == "radio_button_unchecked") {
            e.target.previousElementSibling.innerText = "task_alt";
        }
        else {
            e.target.previousElementSibling.innerText = "radio_button_unchecked";
        }
    });
});

let genratebtn = document.getElementById("generatebtn");
let password = document.getElementById("password");

genratebtn.addEventListener("click", function () {
    let length = lengthslider.value;
    let uppercase = document.getElementById('uppercase').checked;
    let lowercase = document.getElementById('lowercase').checked;
    let symbols = document.getElementById('symbols').checked;
    let numbers = document.getElementById('numbers').checked;

    let password_generated = generatepassword(length, uppercase, lowercase, symbols, numbers);
    password.value = password_generated;
});

function generatepassword(length, uppercase, lowercase, symbols, numbers) {
    let charset = "";
    let string = "";

    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbols) {
        charset += "!@#$%^&*()";
    }
    if (numbers) {
        charset += "0123456789";
    }
    for (let i = 0; i < length; i++) {
        string += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return string;

};

let copypassword = document.getElementById("copypassword");

copypassword.addEventListener("click", () => {

    if (password.value != "") {
        navigator.clipboard.writeText(password.value);
        copypassword.innerText = "check";
        
        setTimeout(() => {
            copypassword.innerText = "content_copy"
        }, 3000);
    }

});

let electric = document.querySelector(".electric");

genratebtn.addEventListener("mouseover", function () {
    electric.style.color = "#e2e2b6";
});
genratebtn.addEventListener("mouseout", function () {
    electric.style.color = "#040426";
});


