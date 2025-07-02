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
});