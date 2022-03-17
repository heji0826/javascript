async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}
export default getTodos;