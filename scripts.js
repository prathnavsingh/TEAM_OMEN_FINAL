document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let valid = true;

    if (!email.value || !email.value.includes('@')) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (!password.value || password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (valid) {
        alert("Login Successful!");
    }
});