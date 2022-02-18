document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const ntd = document.getElementById("new-task-description");
    const prio = document.getElementById("dropdown");
    buildToDo(ntd.value, prio.value);
  })
});




function buildToDo(todo, priority){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'X'
  p.textContent = `${todo} `;
  if (priority === "high") {p.style.color = 'red'}
  else if (priority === "med") {p.style.color = 'yellow'}
  else if (priority === "low") {p.style.color = 'green' }
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);

}


function handleDelete(e) {
  e.target.parentNode.remove();
}