function renderProfile(){

    const profileId = Number(sessionStorage.getItem("profileId"));
    const profile = profiles.find(profile => profile.id === profileId);
    if(!profile) return;

    document.getElementById("profile-cover-photo")
        .src = profile.img_coverphoto;

    document.getElementById("profile-avatar")
        .src = profile.img_profile;

    document.getElementById("profile-name")
        .innerText = profile.name;

    document.getElementById("profile-intro")
        .innerText = profile.intro;

    document.getElementById("profile-nationality")
        .innerHTML = `
            <i class="fa-solid fa-flag mr-2"></i>
            ${profile.nationality}
        `;

    document.getElementById("profile-skills")
        .innerHTML = `
            <span class="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                ${profile.skill}
            </span>
        `;

    document.getElementById("profile-role-badge")
        .innerHTML = `
            <i class="fa-solid fa-user-tie mr-2"></i>
            ${profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
        `;
    
    document.getElementById("profile-intro-card")
        .innerText = profile.intro;
}

function renderProfilePosts(){
    const profileId = Number(sessionStorage.getItem("profileId"));
    const profile = profiles.find(profile => profile.id === profileId);
    const profilePosts = posts.filter(post => post.profile_id === profileId);
    const postList = document.getElementById("profile-post-list");
    postList.innerHTML = "";

    for(let i = 0; i < profilePosts.length; i++){
        const post = profilePosts[i];
        postList.innerHTML += `

        <div class="profile-post">
            <div class="post-head">
                <img src="${profile.img_profile}"
                     class="post-avatar">
                <div>
                    <h3 class="font-bold">
                        ${profile.name}
                    </h3>
                    <p class="text-gray-500 text-sm">
                        ${profile.role} • ${post.time}
                    </p>
                </div>
            </div>

            <p class="text-gray-300 leading-7 px-6 pb-5">
                ${post.content}
            </p>
            ${
                post.image
                ?
                `
                <img src="${post.image}"
                     class="w-full h-[360px] object-cover">
                `
                :
                ""
            }

            <div class="post-actions">
                <button>
                    <i class="fa-regular fa-heart"></i>
                    Like
                </button>

                <button>
                    <i class="fa-regular fa-comment"></i>
                    Comment
                </button>

                <button>
                    <i class="fa-solid fa-share"></i>
                    Share
                </button>
            </div>
        </div>
        `;
    }
}