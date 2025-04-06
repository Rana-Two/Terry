document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Iniciar sesión con: ' + document.getElementById('email').value);
});

document.getElementById('recoverForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Envío de enlace de recuperación a: ' + document.getElementById('recoverEmail').value);
});