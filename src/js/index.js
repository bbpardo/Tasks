const lista = [
    {
        taskName: "Ir a clase",
        done: false,
    },
    {
        taskName: "Comprar el pan",
        done: true,
    }
]
const newTask = {
    taskName: "",
    done: false
}
function checklist (taskName, done){
    let completedHTML = done ? "checked" : "";
    const taskHTML = `
    <li>
        <p>${taskName}</p>
        <input type="checkbox" name="completed" class="checkbutton" ${completedHTML} onchange="updateTasks(this)">
    </li>
    `;
    return taskHTML
}
function taskListHTML () {
    let HTMLtext = "";
    for ( let item of lista ) {
        const HTMLelemento = checklist(item.taskName, item.done)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}
function insertTasksHTML () {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListHTML();
}
function updateNewTask(event){
    console.log(event.target.value);
    newTask.taskName =  event.target.value;
}
function addTask () {
    lista.push(newTask);
    insertTasksHTML();
}
function updateTasks(target){
    console.log(target.checked);
    if ( target.checked === true ) {
        target.parentElement.classList.add("done")
    } else {
        target.parentElement.classList.remove("done")
    }

    //lista.done = 
}
window.addEventListener('load',insertTasksHTML);
document.querySelector("#textlist").addEventListener("input",updateNewTask);
document.querySelector("#blist").addEventListener("click", addTask);