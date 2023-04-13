"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.querySelector('#btnCreate').addEventListener('click', create);
    function create() {
        console.log("Aufgabe hinzugfügen!");
    }
    document.querySelector('#btnDelete').addEventListener('click', löschen);
    function löschen() {
        console.log("Aufgabe hinzugfügen!");
    }
}
//# sourceMappingURL=script.js.map