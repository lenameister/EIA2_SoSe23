namespace A03 {
    /*
    Aufgabe 03: Aufgabenliste
    Name: Lena Meister
    Matrikel: 272238
    Datum: 08.04.2023
    */
}

window.addEventListener("load", handleLoad);
function handleLoad(_event: Event): void {

    document.querySelector('#btnCreate')!.addEventListener ('click', create);
    function create() {
        console.log("Aufgabe hinzugfügen!");
    }

    document.querySelector('#btnDelete')!.addEventListener ('click', löschen);
    function löschen() {
        console.log("Aufgabe hinzugfügen!");
    }

}

