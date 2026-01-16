// Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleDateString() + " • " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Quotes
const quotes = [
    "You don’t have to be perfect, just consistent.",
    "BTS is the key to Life!",
    "Every expert was once a beginner.",
    "Small progress is still progress.",
    "Failure makes you strong."
];

document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];

// Todo List
function addTodo() {
    const input = document.getElementById("todoInput");
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => li.style.textDecoration = "line-through";

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

// Number Converter
function convertNumber() {
    const value = document.getElementById("decimalInput").value;
    if (value === "") return;

    document.getElementById("binaryOutput").textContent =
        Number(value).toString(2);

    document.getElementById("hexOutput").textContent =
        Number(value).toString(16).toUpperCase();
}

// Calculator
function appendValue(value) {
    document.getElementById("calcDisplay").value += value;
}

function clearDisplay() {
    document.getElementById("calcDisplay").value = "";
}

function calculate() {
    const display = document.getElementById("calcDisplay");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
