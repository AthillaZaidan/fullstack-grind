const containerSelector = document.querySelector(".container");
const hasilSelector = document.querySelector(".hasil");
const clearButton = document.getElementById("clear");
const changeButton = document.getElementById("change");
const moduloButton = document.getElementById("modulo");
const divButton = document.getElementById("div");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const timesButton = document.getElementById("times");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const minusButton = document.getElementById("minus");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const plusButton = document.getElementById("plus");
const zeroButton = document.getElementById("zero");
const resultButton = document.getElementById("result");
const num1Span = document.getElementById("num1");
const operatorSpan = document.getElementById("operator");
const num2Span = document.getElementById("num2");

let calcArr = ["", "", ""];

/*Function*/
function updateDisplay() {
    num1Span.textContent = calcArr[0];
    operatorSpan.textContent = calcArr[1];
    num2Span.textContent = calcArr[2];
}

clearButton.onclick = clear;

function clear(){
    calcArr = ["", "", ""];
    updateDisplay();
}

function addNum(num) {
    let isOperator = true;
    if (calcArr[1] === ""){
        isOperator = false;
    }
    if (!isOperator){
        calcArr[0] += num;
    } else {
        calcArr[2] += num;
    }
    updateDisplay();
}

oneButton.onclick = () => addNum(1);
twoButton.onclick = () => addNum(2);
threeButton.onclick = () => addNum(3);
fourButton.onclick = () => addNum(4);
fiveButton.onclick = () => addNum(5);
sixButton.onclick = () => addNum(6);
sevenButton.onclick = () => addNum(7);
eightButton.onclick = () => addNum(8);
nineButton.onclick = () => addNum(9);
zeroButton.onclick = () => addNum(0);

function addOperator(operator){
    if (calcArr[1] == ""){
        calcArr[1] = operator;
        updateDisplay();
    }
}

divButton.onclick = () => addOperator("/");
timesButton.onclick = () => addOperator("X");
minusButton.onclick = () => addOperator("-");
plusButton.onclick = () => addOperator("+");
moduloButton.onclick = () => addOperator("%");

function calculate(calcArr) {
    const [num1, operator, num2] = calcArr;
    if (num1 === "" || operator === "" || num2 === "") {
        return "";
    }
    let n1 = Number(num1);
    let n2 = Number(num2);
    let result = "";
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "X":
            result = n1 * n2;
            break;
        case "/":
            result = n2 !== 0 ? n1 / n2 : "Err";
            break;
        case "%":
            result = n1 % n2;
            break;
        default:
            result = "";
    }
    return result;
}

resultButton.onclick = () => {
    const res = calculate(calcArr);
    calcArr = [res.toString(), "", ""];
    updateDisplay();
};