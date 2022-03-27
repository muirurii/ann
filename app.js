// Loader
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.loader').classList.add('loaded');
    document.body.classList.add('loaded');
})

// Navlinks bounce effect
document.querySelectorAll('.main-nav li').forEach(li => {
    li.addEventListener('mouseout', () => {
        let timeout;
        clearTimeout(timeout);
        li.classList.add('slide');
        timeout = setTimeout(() => {
            li.classList.remove('slide');
        }, 320);
    });
});
// logo
document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo(0, 0);
});
// Mobile Menu
const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.small-nav');
const closeBtn = document.querySelector('.close-menu');
const smallNav = document.querySelector('.small-nav');

const setMenu = () => {
    if (hamb.classList.contains('hide')) {
        smallNav.classList.remove('show');
        hamb.classList.remove('hide');
    } else {
        smallNav.classList.add('show');
        hamb.classList.add('hide');
    }
}

hamb.addEventListener('click', setMenu);
closeBtn.addEventListener('click', setMenu);
smallNav.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', setMenu);
});

// service cards

const cards = document.querySelectorAll('.service');

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('service-animate');
        }
    })
}, {
    threshold: 0.3,
});

cards.forEach(c => cardObserver.observe(c));

// Service buttons
document.querySelectorAll('.to-hire').forEach(b => {
    b.addEventListener('click', e => {
        const value = e.target.getAttribute('data-value');
        document.querySelector(`input[value=${value}]`).checked = true;
    });
});


//Hire form
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const serviceOptions = document.querySelectorAll('input[type="radio"]');

// Highlight option
serviceOptions.forEach(opt => {
    opt.addEventListener('click', e => {
        const prev = document.querySelector('.options .highlight');
        prev && prev.classList.remove('highlight');
        e.target.parentElement.classList.add('highlight');
    });
});

// Validators

const nameValidator = element => element.value.trim().length < 3 ? false : true;

const emailValidator = element => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return !regex.test(element.value) ? false : true;
}

const purposeValidator = elements => Array.from(elements).find(option => option.checked);

const validator = (element, fieldClass, elementValidator) => {
    const isValid = elementValidator(element);
    if (!isValid) {
        document.querySelector(`.${fieldClass}`).classList.add('error');
    } else {
        document.querySelector(`.${fieldClass}`).classList.remove('error');
    }
}


document.querySelector('#hire-form').addEventListener('submit', e => {
    e.preventDefault();
    validator(nameField, 'name', nameValidator);
    validator(emailField, 'email', emailValidator);
    validator(serviceOptions, 'purpose', purposeValidator);
});

// EmailForm 
document.querySelector('#email-form').addEventListener('submit', e => {
    e.preventDefault();
});

// Scroll Observer

const sections = document.querySelectorAll('.observe');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
            document.querySelector(`nav a[href*="${entry.target.id}"]`).parentElement.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(s => observer.observe(s));