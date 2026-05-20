const socket = new WebSocket("ws://127.0.0.1:3000");

socket.onopen = () => {
    console.log("WebSocket connected client");
};

socket.onerror = (error) => {
    console.log("WebSocket error:", error);
};

socket.onclose = () => {
    console.log("WebSocket closed");
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const currentRole = sessionStorage.getItem("role")
    console.log("Me = " + currentRole);
    console.log("You = " + data.role)
    if(data.role === currentRole){
        return;
    }

    renderOtherMessage(data.message);
};

function renderChats(chatArray = chats){
    const chatList =
        document.getElementById("chat-list");

    chatList.innerHTML = "";

    for(let i = 0; i < chatArray.length; i++){
        const chat = chatArray[i];
        chatList.innerHTML += `
            <div onclick="renderChat(${i})"
                 class="flex items-center gap-4 px-5 py-4 hover:bg-white/5 cursor-pointer transition">
                <img src="../${chat.img}"
                     class="w-14 h-14 rounded-full object-cover">
                <div class="flex-1">
                    <h3 class="text-white font-bold">
                        ${chat.name}
                    </h3>
                </div>
            </div>
        `;
    }
}
function searchChats(){
    const keyword =
        document.getElementById("chat-search")
        .value
        .toLowerCase();

    const filteredChats =
        chats.filter(chat =>
            chat.name.toLowerCase().includes(keyword)
        );

    renderChats(filteredChats);
}

function renderChat(index){
    const chat = chats[index];
    document.getElementById("right-chat").classList.remove("hidden");
    document.getElementById("chat-name").innerText = chat.name;
    document.getElementById("chat-avatar").src = "../" + chat.img;
}

function renderMyMessage(message){
    const chatMessages = document.getElementById("chat-messages");

    chatMessages.innerHTML += `
        <div class="flex justify-end">
            <div class="bg-blue-500 text-white px-5 py-4 rounded-[1.5rem] max-w-[400px] break-words">
                ${message}
            </div>
        </div>
    `;

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderOtherMessage(message){
    const chatMessages = document.getElementById("chat-messages");

    chatMessages.innerHTML += `
        <div class="flex justify-start">
            <div class="bg-white/10 text-white px-5 py-4 rounded-[1.5rem] max-w-[400px] break-words">
                ${message}
            </div>
        </div>
    `;

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage(){
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if(message === "") return;

    const currentRole = sessionStorage.getItem("role")

    renderMyMessage(message);

    const data = {
        message: message,
        role: currentRole
    };

    if(socket.readyState === WebSocket.OPEN){
        socket.send(JSON.stringify(data));
    }

    input.value = "";
}