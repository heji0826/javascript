const title = document.getElementById('title');
const getData = document.getElementById('getData');
getData.addEventListener('click', e => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
        json.forEach(item => {
            const li = document.createElement('li');
            li.innerText = `${item.userId}의 ${item.title}`;
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.completed;
            li.appendChild(checkbox);
            document.querySelector('ul').appendChild(li);
          })
        });
    })
document.querySelector('ul').addEventListener('click', e =>{
    title.innerText = JSON.parse(e.target.innerText).title;
})