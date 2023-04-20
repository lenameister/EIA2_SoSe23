namespace A04 {
    /*
    Aufgabe 03: Aufgabenliste
    Name: Lena Meister
    Matrikel: 272238
    Datum: 08.04.2023
    */
}

window.addEventListener("load", handleload);
function handleload(_event: Event): void {

    function create(): void {
        console.log("Aufgabe hinzugfügen!");
    }
    document.querySelector('#btnCreate')!.addEventListener ('click', create);

    
    function deleteTask(): void {
        console.log("Aufgabe hinzugfügen!");
    }
    document.querySelector('#btnDelete')!.addEventListener ('click', deleteTask);


}




