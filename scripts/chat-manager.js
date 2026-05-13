function renderChats(chatArray = chats){
    const chatList =
        document.getElementById("chat-list");

    chatList.innerHTML = "";

    for(let i = 0; i < chatArray.length; i++){
        const chat = chatArray[i];
        chatList.innerHTML += `
            <div onclick="renderChat(${i})"
                 class="flex items-center gap-4 px-5 py-4 hover:bg-white/5 cursor-pointer transition">

                <img src="${chat.img}"
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

    document.getElementById("right-chat")
        .classList.remove("hidden");

    const chat = chats[index];

    document.getElementById("chat-name")
        .innerText = chat.name;

    document.getElementById("chat-avatar")
        .src = chat.img;

    const chatMessages =
        document.getElementById("chat-messages");

    chatMessages.innerHTML = "";
}