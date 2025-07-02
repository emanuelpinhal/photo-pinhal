document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("loginMessage").textContent = "Credenciais inválidas.";
      }
    });
  }

  // Dashboard logic
  if (window.location.pathname.includes("dashboard.html")) {
    const user = JSON.parse(localStorage.getItem("user"));
    const emailEl = document.getElementById("userEmail");
    const featuresEl = document.getElementById("features");

    if (!user) {
      window.location.href = "login.html";
    } else {
      emailEl.textContent = user.email;

      if (user.role === "fotografo") {
        featuresEl.innerHTML = `
          <h2>Bem-vindo, Fotógrafo</h2>
          <ul>
            <li><strong>Upload de Fotos:</strong> (em breve)</li>
            <li><strong>Gerir Álbuns</strong></li>
            <li><strong>Ver Pedidos</strong></li>
          </ul>
        `;
      } else {
        featuresEl.innerHTML = `
          <h2>Bem-vindo, Cliente</h2>
          <ul>
            <li><strong>Ver Álbuns Privados</strong></li>
            <li><strong>Agendar Sessão</strong> (em breve)</li>
          </ul>
        `;
      }
    }
  }
});

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}