document.querySelector(".cta-button").addEventListener("click", () => {
    alert("Redirecting to safety tips!");
  });
  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Add login logic here
    alert(`Logged in as: ${email}`);
  });
  