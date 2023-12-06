fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json=>{
        const posts = json.map(post => {
            return `
            <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p>${post.userId}</p>
            </div>
            `
        })
        document.getElementById("posts").innerHTML = posts;
        })
      
