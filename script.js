let names = [0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
    const posts = json.map(post => {
        return `
        <div>
            <h2>${post.title}</h2>
            <p id=${post.userId}>${post.body}</p>
            <p>${post.userId}</p>
        </div>
        `
    }).join("")

    document.getElementById("posts").innerHTML = posts;
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const users = json.map(user => {
            names.append(user.username);
            return `
            <div>
                <h2>${user.name}</h2>
                <p>@${user.username}</p>
            </div>
            `
        })

        for (let i=1; i<=10; i++) {
            document.getElementById(`${i}`).textContent=names[i];
        }
    })


    for (let i=1; i<=10; i++) {
        document.getElementById(i).textContent=names[i];
    }
