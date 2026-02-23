document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    if (user === 'admin' && pass === '123456') {
        window.location.href = "index.html";
    } else {
        message.textContent = "Usuário ou senha incorretos.";
        message.style.color = "red";
    }
});