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
/**
 * Importa los objetos de una array a un formato html
 * @param {string} taskName 
 * @param {boolean} done 
 * @returns
 */
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
/**
 * Convierte cada elemento de una array en un formato string
 * @param {objebt} array 
 */
function taskListHTML (array) {
    let HTMLtext = "";
    for ( let item of array ) {
        const HTMLelemento = checklist(item.taskName, item .done)
        HTMLtext += HTMLelemento;
    }
    document.querySelector("#tasksList").innerHTML = HTMLtext
}
/**
 * Crea un nuevo objeto, lo añade a la array y aztualiza el contenido mostrado
 * @param {object} array 
 */
function addTaskHandler (array) {
    const newTask = {
        taskName: document.querySelector("#textlist").value,
        done: false,
    }
    array.push(newTask);
    taskListHTML();
}
/**
 * Analiza el estado del checkbox y añade o elimina una clase(cambia el estilo dependiendo si tienes la clase por css) en funcion de su estado
 * @param {*} target 
 */
function updateStatusTasks(target){
    if ( target.checked === true ) {
        target.parentElement.classList.add("done")
    } else {
        target.parentElement.classList.remove("done")
    }
}
window.addEventListener('load',taskListHTML);
document.querySelector("#blist").addEventListener("click", addTaskHandler);