//TODO https://jsonplaceholder.typicode.com/todos/${id}
//TODO calc stats
//TODO register on https://apilayer.com/marketplace/fixer-api

let countTrue = 0;
let countFalse = 0;
const fetchFunction = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId.value}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            const h2 = document.createElement('h2');
            h2.innerHTML = `ID: ${data.id},</br>Title: ${data.title}, </br>Сompleted: ${data.completed}`;
            // h2.appendChild(document.createTextNode(`ID: ${data.id},\nTitle: ${data.title}, Body: ${data.body}`));
            document.body.appendChild(h2);


            if (data.completed === true) {
                countTrue++;
            } else {
                countFalse++;
            }
            const countCompleted = document.createElement('h3');
            countCompleted.textContent = `Completed true: ${countTrue}, completed false: ${countFalse}`;
            countCompleted.style.color = 'red';
            document.body.appendChild(countCompleted);
            // console.log(countTrue);
            // console.log(countFalse);

        })
        .catch(e => {
            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`O-o-ops ${e.message}`));
            document.body.appendChild(h2);
        })
};

sendPostId.onclick = fetchFunction;

postId.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        fetchFunction()
    }
});

//
// console.log(countTrue);
// console.log(countFalse);