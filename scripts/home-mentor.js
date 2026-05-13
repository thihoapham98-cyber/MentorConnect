function renderParticles(){
    const container = document.getElementById("particles");

    for(let i = 0; i < 500; i++){
        const particle = document.createElement("div");
        const rotateDirection = Math.random() > 0.5 ? 1 : -1;

        particle.style.setProperty("--rotate-direction", rotateDirection);
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = 5 + Math.random() * 10 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particle.style.opacity = Math.random() * 0.3;
        particle.style.width = particle.style.height = 6 + Math.random() * 6 + "px";
        particle.style.opacity = 0.2 + Math.random() * 0.5;
        container.appendChild(particle);
    }
}