
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email && senha) {
            window.location.href = "index.html";
        }
    });
}


// REGISTRO DE CHAMADOS

const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
    ticketForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const chamado = {
            numero: Date.now(),
            nome: document.getElementById("nome").value,
            email: document.getElementById("emailChamado").value,
            categoria: document.getElementById("categoria").value,
            prioridade: document.getElementById("prioridade").value,
            descricao: document.getElementById("descricao").value,
            status: "Aberto",
            data: new Date().toLocaleDateString("pt-BR")
        };

        const chamados = JSON.parse(
            localStorage.getItem("chamados")
        ) || [];

        chamados.push(chamado);

        localStorage.setItem(
            "chamados",
            JSON.stringify(chamados)
        );

        alert("Chamado registrado com sucesso!");

        ticketForm.reset();
    });
}

