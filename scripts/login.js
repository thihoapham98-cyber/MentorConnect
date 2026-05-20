function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const account = accounts.find(acc => acc.email === email && acc.password === password);
    if(!account) {
        alert("Sai email hoặc mật khẩu");
        return;
    }

    sessionStorage.setItem("role", account.role);
    if(account.role === "mentor") {
        window.location.href = "/public/home-mentor.html";
    }
    else {
        window.location.href = "/public/home-student.html";
    }
}