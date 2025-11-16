function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    const display = document.getElementById("display");
    try {
    let result = eval(display.value);
    if (result === undefined || isNaN(result)) {
        display.value = "Error";
    } else {
        display.value = result;
    }
    } catch (error) {
    display.value = "Error";
    }
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    const validKeys = "0123456789+-*/().";
    if (validKeys.includes(key)) {
    appendToDisplay(key);
    } else if (key === "Enter") {
    calculateResult();
    } else if (key === "Backspace") {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
    clearDisplay();
    }
});
