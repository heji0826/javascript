const title = document.getElementById('title');
const getData = document.getElementById('getData');
const ul = document.getElementById('list');

getData.addEventListener('click', () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
      const liList = json.map(item => {
        const li = document.createElement('li');
        li.innerText = `${item.userId}의 ${item.title}`;
        li.dataset.title = item.title;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        li.appendChild(checkbox);
        return li;
      })
      ul.replaceChildren(...liList);
    });
})

ul.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (li) title.innerText = li.dataset.title;
})