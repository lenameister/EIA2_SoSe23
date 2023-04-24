"use strict";
window.addEventListener("load", handleload);
function handleload(_event) {
    let input = ['person', 'aufg', 'comment', 'date', 'status'];
    document.querySelector('#btnCreate').addEventListener('click', create);
    function create() {
        let neueTask = document.createElement("p");
        neueTask.innerHTML = input.values;
        let task = document.getElementById("task");
        let trash = document.createElement("div");
        let wrapper = document.createElement("div");
        wrapper.textContent = "";
        task.appendChild(wrapper);
        wrapper.appendChild(neueTask);
        wrapper?.appendChild(trash);
        task?.appendChild(wrapper);
        neueTask.id = "eingabe";
        wrapper.id = "neuesDiv";
        trash.className = "fas fa-trash";
        trash.addEventListener("click", deleteToDo);
        function deleteToDo() {
            wrapper.parentElement.removeChild(wrapper);
        }
        document.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                create();
            }
        });
    }
    /*function create(): void {
        console.log("Aufgabe hinzugfügen!");
    }
    document.querySelector('#btnCreate')!.addEventListener ('click', create);

    
    function deleteTask(): void {
        console.log("Aufgabe hinzugfügen!");
    }
    document.querySelector('#btnDelete')!.addEventListener ('click', deleteTask);*/
}
//# sourceMappingURL=script.js.map