function showAlert() { alert( 'HOLA! ¿cómo estas?'); }

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    if (!validateEmail(email)) {
        alert('Chequea como escribiste tu email, porque hay algo que no va');
     } else {
        alert('Todo perfecto!');
     }
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")})

