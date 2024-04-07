fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then(response => {
        if(response.ok){
            return response.json();
        }else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(`Title: ${data.title}`));
        document.body.appendChild(h2);
    })
    .catch(e => {
        console.log(e);
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(`O-o-ops 404`));
        document.body.appendChild(h2);
    })

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode(`My first Fetch:`));
document.body.appendChild(h1);