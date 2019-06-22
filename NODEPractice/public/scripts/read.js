async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const blogPost = document.createElement('div');
        const publishDate = document.createElement('p');
        const postTitle = document.createElement('p');
        const postAuthor = document.createElement('p');
        const postContent = document.createElement('div');
        const postBreak = document.createElement('hr');

        blogPost.setAttribute('class', 'blogPost px-5 py-4');
        publishDate.setAttribute('class', 'publishDate');
        postTitle.setAttribute('class', 'postTitle');
        postAuthor.setAttribute('class', 'postAuthor');
        postContent.setAttribute('class', 'postContent');

        publishDate.innerHTML = item.postDate;
        postTitle.innerHTML = item.postTitle;
        postAuthor.innerHTML = `By ${item.postAuthor}`;

        const content = item.postContent.split('\n');
        for (p of content) {
            if (p.length > 0) {
                const para = document.createElement('p');
                para.innerHTML = p;
                postContent.append(para);
            }
        }
        blogPost.append(publishDate, postTitle, postAuthor, postContent, postBreak);
        document.getElementById("main").appendChild(blogPost);
    }
}

getData();