//Basic lines of java script

//for key board typing 


document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        display.value = eval(display.value);
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        display.value = "";
    }
});


//both same lines but as a rule if it works don't touch it :)


const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay() {
    display.value = "";

}
function calculate() {

    try {
        display.value = eval(display.value);

    }
    catch (error) {

        display.value = "ERROR"
    }

}