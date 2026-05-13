function renderPosts() {
    const postList =
        document.getElementById("post-list");

    for(let i = 0; i < mentorPosts.length; i++) {
        const post = mentorPosts[i];
        postList.innerHTML += `

        <div class="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center gap-4">
                    <img src="${post.avatar}"
                         class="w-14 h-14 rounded-full object-cover">
                    <div>
                        <h3 class="text-white font-bold text-lg">
                            ${post.name}
                        </h3>
                        <p class="text-gray-400 text-sm">
                            ${post.role} • ${post.time}
                        </p>
                    </div>
                </div>
            </div>

            <div class="px-6 pb-5">
                <p class="text-gray-200 leading-8 text-[15px]">
                    ${post.content}
                </p>
            </div>

            <img src="${post.image}"class="w-full h-[500px] object-cover">

            <div class="flex items-center justify-around py-5 border-t border-white/10">
                <button class="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition">
                    <i class="fa-regular fa-heart text-xl"></i>
                    <span class="font-semibold">
                        Like
                    </span>
                </button>

                <button class="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition">
                    <i class="fa-regular fa-comment text-xl"></i>
                    <span class="font-semibold">
                        Comment
                    </span>
                </button>

                <button class="flex items-center gap-3 text-gray-400 hover:text-green-400 transition">
                    <i class="fa-solid fa-share"></i>
                    <span class="font-semibold">
                        Share
                    </span>
                </button>
            </div>
        </div>
        `;
    }
}