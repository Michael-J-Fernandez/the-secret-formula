// ** PART 1: The alerter **

let alertForm = document.querySelector('#alert-form');
let alertInput = document.querySelector('#alert-input');

alertForm.addEventListener('submit', function (event) {
    event.preventDefault();

    alert(alertInput.value);
    alertInput.value = "";
})




// ** PART 2: Sandwich Builder **

let sandwichForm = document.querySelector('#sandwich-form');
let ingredients = document.querySelectorAll('#sandwich-form .ingredients');

sandwichForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let newStr = "";

    ingredients.forEach(item => {
        if (item.checked) {
            newStr += ` ${item.id}`;
        }
    })
    
    alert(`Your sandwich contains:${newStr}.`);
    
    ingredients.forEach(item => {
        item.checked = false;
    })
})




// ** PART 3: Haircut Appointment Scheduler **

let haircutForm = document.querySelector('#haircut-form');
let date = document.querySelector('#haircut-date');
let haircutter = document.querySelector('#haircutter');
let hairLength = document.querySelectorAll('.hair-length')

haircutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    hairLength.forEach(item => {
        if (item.checked) {
            length = item.id;
        }
    })
    alert(`Haircut scheduled for ${date.value} with ${haircutter.value} for ${length} hair.`);

    date.value = "";
    haircutter.value = "";
    hairLength[0].checked = true;
})




// ** PART 4: Create Account **

let createAccountForm = document.querySelector('#create-account');
let userName = document.querySelector('#user-name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let passwordHidden = "";
    for (i = 0; i < password.value.length; i++){
        passwordHidden += "*"
    }
    
    alert(`Your User Name is: ${userName.value}.
    Your Email is: ${email.value}.
    Your Password is: ${passwordHidden}`)
    console.log(passwordHidden);

    userName.value = "";
    email.value = "";
    password.value = "";
    passwordConfirm.value = "";
})



