namespace A01 {
    /*
    Aufgabe 01: Zufallsgedicht
    Name: Lena Meister
    Matrikel: 272238
    Datum: 28.03.2023
    */
    let subjects: string[];
    let predicates: string[];
    let objects: string[];

    subjects = ["Lupin", "Snape", "Hagrid", "Ron", "Harry", "Dumbledore"];
    predicates = ["hasst", "liebt", "schützt", "studiert", "besiegt", "hat"];
    objects = ["Dementoren", "Lilli", "Schüler", "Magie", "Voldemort", "Macht"];

    console.log(subjects, predicates, objects);

    for (let index: number = subjects.length; index >= 2; index--) {
        console.log(getVerse(subjects, predicates, objects));
    }

    function getVerse(subjects: string[], predicates: string[], objects: string[]): string {

        let verse: string = "";

        let verseZahl: number;

        verseZahl = Math.floor(Math.random() * subjects.length);
        let versSubjekt: string[] = subjects.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * predicates.length);
        let versPredikat: string[] = predicates.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * objects.length);
        let versObjekt: string[] = objects.splice(verseZahl, 1);

        verse = versSubjekt + " " + versPredikat + " " + versObjekt;

        return verse;


    }

}