import getTodos from "./api.js";
import TodoList from "./todolist.js";
const getData = document.getElementById('getData');
const Todo = new TodoList()

getData.addEventListener('click', async () => {
  Todo.setTodoList(await getTodos())
})

Todo.render()