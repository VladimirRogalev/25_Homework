//TODO https://jsonplaceholder.typicode.com/todos/${id}
//TODO calc stats
//TODO register on https://apilayer.com/marketplace/fixer-api

sendPostId.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            const h2 = document.createElement('h2');
            h2.innerHTML = `ID: ${data.id},</br> Title: ${data.title}, </br>  Body: ${data.body}`;
            // h2.appendChild(document.createTextNode(`ID: ${data.id},\nTitle: ${data.title}, Body: ${data.body}`));
            document.body.appendChild(h2);
        })
        .catch(e => {
            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`O-o-ops ${e.message}`));
            document.body.appendChild(h2);
        })
}