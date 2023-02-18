function PostSummaryItem(post) {
    return (`
        <div class="list-group-item d-flex align-items-center">
            <ul>
                <li class="text-secondary">${post.topic}</li>
                <li>
                    <b>${post.userName}</b>
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary"> - ${post.time} </span>
                </li>
                <li>
                    <b>${post.title}</b>
                </li>
                <li class="text-secondary">${post.tweets}</li>
            </ul>
            <img class="wd-image-posts ms-auto" src="${post.image}" />
        </div>
    `);
}

export default PostSummaryItem;