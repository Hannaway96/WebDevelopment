
function createPost() {
    const postTitle = document.getElementById("postTitle").value;
    const postAuthor = document.getElementById("postAuthor").value;
    const postContent = document.getElementById("postContent").value;
    const postDate = new Date().toDateString();

    const data = {
        postTitle,
        postAuthor,
        postDate,
        postContent
    };
    return data;
}

async function postBlog() {
    const blogPost = createPost();
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(blogPost),
    };

    const response = await fetch('/blogAPI', options);
    const jsonData = await response.json();
    console.log(jsonData);
}