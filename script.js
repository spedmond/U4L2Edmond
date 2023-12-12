fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
    const posts = json.map(post => {
        return `
        <div id="post">
            <h3>${post.title}</h2>
            <p id=${post.userId}>${post.body}</p>
        </div>
        `
    }).join("")
    document.getElementById("posts").innerHTML = posts;
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const users = json.map(user => {
            return `
            <div id="user">
                <p id="name">@${user.username} (${user.name})</h2>
            </div>
            `
        }).join("");
        document.getElementById("users").innerHTML = `<h2 id="online-users">Online users: ${json.length}</h2>` + users;
    })
