const lista = [
    {
        taskName: "Ir a clase",
        done: false,
    },
    {
        taskName: "Comprar el pan",
        done: false,
    },
]
function checklist (taskName, done){
    let completedHTML = done ? "checked" : "";
    const taskHTML = `
    <li>
        <p>${taskName}</p>
        <input type="checkbox" name="completed" class="checkbutton" ${completedHTML} onchange="updateStatusTasks(this)">
    </li>
    `;
    return taskHTML
}
function taskListHTML () {
    let HTMLtext = "";
    for ( let item of lista ) {
        const HTMLelemento = checklist(item.taskName, item .done)
        HTMLtext += HTMLelemento;
    }
    document.querySelector("#tasksList").innerHTML = HTMLtext
}
function addTaskHandler () {
    const newTask = {
        taskName: document.querySelector("#textlist").value,
        done: false,
    }
    lista.push(newTask);
    taskListHTML();
}
function updateStatusTasks(target){
    if ( target.checked === true ) {
        target.parentElement.classList.add("done")
    } else {
        target.parentElement.classList.remove("done")
    }
}
window.addEventListener('load',taskListHTML);
document.querySelector("#blist").addEventListener("click", addTaskHandler);