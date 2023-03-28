"use strict";
var A01;
(function (A01) {
    /*
    Aufgabe 01: Zufallsgedicht
    Name: Lena Meister
    Matrikel: 272238
    Datum: 28.03.2023
    */
    let subjects;
    let predicates;
    let objects;
    subjects = ["Lupin", "Snape", "Hagrid", "Ron", "Harry", "Dumbledore"];
    predicates = ["hasst", "liebt", "schützt", "studiert", "besiegt", "hat"];
    objects = ["Dementoren", "Lilli", "Schüler", "Magie", "Voldemort", "Macht"];
    console.log(subjects, predicates, objects);
    for (let index = subjects.length; index >= 2; index--) {
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(subjects, predicates, objects) {
        let verse = "";
        let verseZahl;
        verseZahl = Math.floor(Math.random() * subjects.length);
        let versSubjekt = subjects.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * predicates.length);
        let versPredikat = predicates.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * objects.length);
        let versObjekt = objects.splice(verseZahl, 1);
        verse = versSubjekt + " " + versPredikat + " " + versObjekt;
        return verse;
    }
})(A01 || (A01 = {}));
//# sourceMappingURL=script.js.map