namespace A04 {
    /*
    Aufgabe 03: Aufgabenliste Datenstruktur
    Name: Lena Meister
    Matrikel: 272238
    Datum: 24.04.2023
    Quellen: Aufgaben aus EIA1, W3S
    */
}

window.addEventListener("load", handleload);
function handleload(_event: Event): void {

    let input: string[] = ['person', 'aufg', 'comment', 'date', 'status'];

    document.querySelector('#btnCreate')!.addEventListener('click', create);
    function create(): void {

        let neueTask: HTMLElement = document.createElement("p");
        neueTask.innerHTML = input.values;

        let task: HTMLElement = document.getElementById("task");
        let trash: HTMLDivElement = document.createElement("div");
        let wrapper: HTMLDivElement = document.createElement("div");

        wrapper.textContent = "";
        task.appendChild(wrapper);
        wrapper.appendChild(neueTask);
        wrapper?.appendChild(trash);
        task?.appendChild(wrapper);

        neueTask.id = "eingabe";
        wrapper.id = "neuesDiv";
        trash.className = "fas fa-trash";

        trash.addEventListener("click", deleteToDo);

        function deleteToDo(): void {
            wrapper.parentElement.removeChild(wrapper);
        }

        document.addEventListener("keydown", function (event: KeyboardEvent): void { 
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




