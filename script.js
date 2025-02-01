document.addEventListener('DOMContentLoaded', () => {
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Form toggle functionality
    showRegister.addEventListener('click', () => toggleForms('register'));
    showLogin.addEventListener('click', () => toggleForms('login'));

    // Handle registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        if(isUserExists(user.email)) {
            alert('Email already registered!');
            return;
        }

        saveUser(user);
        alert('Registration successful!');
        registerForm.reset();
        toggleForms('login');
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if(validateCredentials(email, password)) {
            alert('Login successful!');
            loginForm.reset();
        } else {
            alert('Invalid credentials!');
        }
    });
});

function toggleForms(formType) {
    document.querySelectorAll('.auth-form').forEach(form => 
        form.classList.remove('active-form'));
    
    document.getElementById('showRegister').classList.toggle('btn-primary', formType === 'register');
    document.getElementById('showRegister').classList.toggle('btn-outline-primary', formType !== 'register');
    document.getElementById('showLogin').classList.toggle('btn-primary', formType === 'login');
    document.getElementById('showLogin').classList.toggle('btn-outline-primary', formType !== 'login');
    
    document.getElementById(`${formType}Form`).classList.add('active-form');
}

function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function isUserExists(email) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(user => user.email === email);
}

function validateCredentials(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(user => user.email === email && user.password === password);
}