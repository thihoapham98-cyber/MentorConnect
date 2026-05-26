const progressSocket = new WebSocket("https://mentorconnect-u6z3.onrender.com");

progressSocket.onopen = () => {
    console.log("Progress socket connected");
};

progressSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if(data.type !== "progress") return;

    applyProgress(data.checkedList);
};

function updateProgress() {
    const checkboxes = document.querySelectorAll(".goal-checkbox");
    const checkedList = [];

    checkboxes.forEach(cb => {
        checkedList.push(cb.checked);
    });

    applyProgress(checkedList);

    const data = {
        type: "progress",
        checkedList: checkedList
    };

    if(progressSocket.readyState === WebSocket.OPEN) {
        progressSocket.send(JSON.stringify(data));
    }
}

function applyProgress(checkedList) {
    const checkboxes = document.querySelectorAll(".goal-checkbox");

    let completed = 0;

    checkboxes.forEach((cb, index) => {
        cb.checked = checkedList[index];

        if(cb.checked) {
            completed++;
        }
    });

    const percent =
        Math.round((completed / checkboxes.length) * 100);

    document.getElementById("progress-bar")
        .style.width = percent + "%";

    document.getElementById("progress-text")
        .innerText = percent + "%";
}

function toggleGoals() {
    const content = document.getElementById("goal-content");
    const arrow = document.getElementById("goal-arrow");

    content.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
}

function initProgress() {
    const role = sessionStorage.getItem("role");
    const checkboxes = document.querySelectorAll(".goal-checkbox");

    checkboxes.forEach(cb => {
        if(role === "student") {
            cb.disabled = true;
        }
        else {
            cb.addEventListener("change", updateProgress);
        }
    });

    applyProgress([false, false, false]);
}

document.addEventListener("DOMContentLoaded", initProgress);