document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const msg = document.getElementById('formMsg');

    if (!nome || !email || !celular || !senha || !confirmarSenha) {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.style.color = "red";
        return;
    }

    if (senha !== confirmarSenha) {
        msg.textContent = "As senhas não coincidem.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Formulário enviado com sucesso!";
    msg.style.color = "green";

    // Aqui você pode adicionar envio para servidor ou limpar os campos
    // this.reset();
});
