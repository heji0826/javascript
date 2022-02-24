const title = document.getElementById('title');
const getData = document.getElementById('getData');
getData.addEventListener('click', e => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerText = JSON.stringify(item)
            document.querySelector('ul').appendChild(li);
          })
        });
})
document.querySelector('ul').addEventListener('click', e =>{
    var el = JSON.parse(e.target.innerText);
    title.innerText = el.title;
})