function renderNavbar() {
    const navContainer =
        document.getElementById("nav-items");

    for(let i = 0; i < navItems.length; i++) {
        navContainer.innerHTML += `
            <a href="${navItems[i].link}"
               class="text-white font-semibold hover:text-pink-400 transition">

                ${navItems[i].title}
            </a>
        `;
    }
}