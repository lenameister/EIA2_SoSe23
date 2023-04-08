namespace A03 {
    /*
    Aufgabe 03: Aufgabenliste
    Name: Lena Meister
    Matrikel: 272238
    Datum: 08.04.2023
    */
}

window.addEventListener("load", handleload);
function handleload(_event: Event): void {

}

document.querySelector("#btnCreate")!.addEventListener('click', function create() {

    console.log("Aufgabe hinzufügen!");

})

document.querySelector("#btnDelete")!.addEventListener('click', function () {

    console.log("Eintrag löschen!");

})