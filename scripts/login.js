function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const profile = profiles.find(profile =>
        profile.email === email &&
        profile.password === password
    );

    if(!profile) {
        alert("Sai email hoặc mật khẩu");
        return;
    }

    sessionStorage.setItem("profileId", profile.id);
    sessionStorage.setItem("profileName", profile.name);
    sessionStorage.setItem("role", profile.role);
    sessionStorage.setItem("profileImage", profile.img_profile);

    if(profile.role === "mentor") {
        window.location.href = "home-mentor.html";
    }
    else {
        window.location.href = "home-student.html";
    }
}
