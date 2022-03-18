const title = document.getElementById('title');
const ul = document.getElementById('list');
const count = document.getElementById('count');

class TodoList {
  constructor() {
    this.todoList = []
    ul.addEventListener('click', e => {
      const li = e.target.closest('li'); 
      if (li) {
        const itemId = parseInt(li.dataset.id)
        title.innerText = this.todoList.find(todoItem => todoItem.id === itemId).title
        if (e.target.tagName === 'INPUT') {
          this.setTodoList(this.todoList.map(todoItem =>
              todoItem.id === itemId ? { ...todoItem, completed: !todoItem.completed } : todoItem)
          )
        }
      }
    })
  }

  setTodoList(todos) {
    if (typeof todos === 'function') this.todoList = todos(this.todoList)
    else this.todoList = todos
    this.render()
  }

  render() {
    const liList = this.todoList.map(item => {
      const li = document.createElement('li');
      li.innerText = `${item.userId}의 ${item.title}`;
      li.dataset.id = item.id;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      li.appendChild(checkbox);
      return li;
    })
    ul.replaceChildren(...liList);
    const doneCnt = this.todoList.filter(todoItem => todoItem.completed).length
    count.innerText = `완료 : ${doneCnt} 미완료: ${this.todoList.length - doneCnt}`
  }

}

export default TodoList