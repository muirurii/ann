// Navlinks bounce effect
document.querySelectorAll('.main-nav li').forEach(li => {
    li.addEventListener('mouseout', () => {
        let timeout;
        clearTimeout(timeout);
        li.className = "slide";
        timeout = setTimeout(() => {
            li.className = "";
        }, 320);
    });
});

//Hire form
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const purposeField = document.querySelector('#purpose');

const nameValidator = element => {
    console.log(element.value.trim().length)
        // element.value.trim().length < 3 ? false : true
    if (element.value.trim().length < 3) {
        return false;
    } else {
        return true;
    }
}

const emailValidator = element => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // !regex.test(element.value) ? false : true;
    if (!regex.test(element.value)) {
        return false;
    } else {
        return true;
    }
}

const validator = (element, errorClass, elementValidator) => {
    const isValid = elementValidator(element);
    console.log(isValid)
    if (!isValid) {
        document.querySelector(`.${errorClass}`).classList.add('error');
        element.classList.add('invalid-input');
    } else {
        document.querySelector(`.${errorClass}`).classList.remove('error');
        element.classList.remove('invalid-input');
    }
}


document.querySelector('#hire-form').addEventListener('submit', e => {
    e.preventDefault();
    validator(nameField, 'name', nameValidator);
    validator(emailField, 'email', emailValidator)
});