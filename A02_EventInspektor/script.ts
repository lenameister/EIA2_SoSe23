namespace A02 {
    /*
    Aufgabe 02: Event Inspektor
    Name: Lena Meister
    Matrikel: 272238
    Datum: 31.03.2023
    */

    window.addEventListener("load", handleLoad);

    console.log("Test");
    function handleLoad(): void {

        let div0: HTMLElement = <HTMLElement>document.getElementById("div0");
        let div1: HTMLElement = <HTMLElement>document.getElementById("div1");
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");

        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);

        button.addEventListener("click", customEvent);
        document.addEventListener("MyCustomEvent", output);
    }

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLElement = <HTMLElement>document.getElementById("span");
        let x: number = _event.clientX;
        let x1: number = x + 15;
        let y: number = _event.clientY;
        let y1: number = y + 15;
        let target = _event.target;
        let position: string = "X-Koordinate: " + x + "<br>" + "Y-Koordinate: " + y + "<br>" + "Target: " + target;
        span.innerHTML = position;
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`;
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    function customEvent(_event: MouseEvent): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
        let MyEvent = new CustomEvent('MyCustomEvent', {
            detail: {},
            bubbles: true
        });
        button.dispatchEvent(MyEvent);
    }

    function output(_event: Event): void {
        console.log("That's my CustomEvent: " + _event);
    }
}