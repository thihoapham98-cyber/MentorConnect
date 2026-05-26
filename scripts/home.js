function renderImages() {
    const grid = document.getElementById("bg-grid");
    for(let i = 0; i < bgGridImages.length; i++) {
        grid.innerHTML += `
            <img src="${bgGridImages[i]}" class="grid-img">
        `;
    }
}

function renderRatings() {
    const container = document.getElementById("rating-list");
    for(let i = 0; i < ratings.length; i++) {
        container.innerHTML += `
            <div class="rating-card">
                <img src="${ratings[i].image}"
                     class="rating-img">
                <div class="p-6">
                    <div class="text-yellow-400 text-xl mb-4">
                        ★★★★★
                    </div>
                    <p class="text-gray-300 text-sm leading-7 mb-6">
                        ${ratings[i].text}
                    </p>
                    <div>
                        <h4 class="text-white font-bold text-lg">
                            ${ratings[i].name}
                        </h4>
                        <span class="text-gray-500 text-sm">
                            ${ratings[i].role}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

function openLoginModal() {
    const modal = document.getElementById("login-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeLoginModal() {
    const modal = document.getElementById("login-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

function togglePassword() {
    const input = document.getElementById("login-password");
    const icon = document.getElementById("eye-icon");

    if(input.type === "password") {

        input.type = "text";
        icon.className = "fa-solid fa-eye-slash";

    }
    else {
        input.type = "password";
        icon.className = "fa-solid fa-eye";
    }
}