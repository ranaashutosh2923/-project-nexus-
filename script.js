
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="pswd"]').value;

       
        const users = [
            { email: 'user1@example.com', password: 'password1' },
            { email: 'user2@example.com', password: 'password2' }
        ];

        
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert('Invalid email or password.');
        } else {
            alert('Login successful!');
           
             window.location.href = 'dashboard.html';
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = signupForm.querySelector('input[name="txt"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="pswd"]').value;

       
        const users = [
            { email: 'user1@example.com', password: 'password1' },
            { email: 'user2@example.com', password: 'password2' }
        ];

        
        if (users.some(user => user.email === email)) {
            alert('Email already exists.');
        } else {
            
            users.push({ email, password });
            alert('Signup successful!');
            
             window.location.href = 'dashboard.html';
        }
    });
});
