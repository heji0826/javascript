const title = document.getElementById('title');
const getData = document.getElementById('getData');
getData.addEventListener('click', () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
      const ul = document.createElement('ul')
      json.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.userId}의 ${item.title}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        li.appendChild(checkbox);
        li.addEventListener('click', () => {
          title.innerText = item.title;
        })
        ul.appendChild(li);
      })
      document.body.replaceChild(ul, document.querySelector('ul'));
    });
})