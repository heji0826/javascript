const title = document.getElementById('title');
const getData = document.getElementById('getData');
getData.addEventListener('click', e => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        for(var key in data){
            const li = document.createElement('li');
            li.innerText = JSON.stringify(data[key])
            document.querySelector('ul').appendChild(li);
          }
        });
    })
document.querySelector('ul').addEventListener('click', e =>{
    title.innerText = JSON.parse(e.target.innerText).title;
})