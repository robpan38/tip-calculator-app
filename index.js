let billInput = null;
let peopleInput = null;
let tipDisplay = null;
let totalDisplay = null;
let percent5 = null;
let percent10 = null;
let percent15 = null;
let percent25 = null;
let percent50 = null;
let percentCustom = null;
let errorText = null;

const initElements = () => {
    billInput = document.querySelector(".bill input");
    peopleInput = document.querySelector(".people input");
    tipDisplay = document.querySelector(".tipDisplay");
    totalDisplay = document.querySelector(".totalDisplay");
    percentCustom = document.querySelector(".tip input");
    errorText = document.querySelector(".error");
}

// hsl(17, 79%, 54%)

let percentValue = 0;
let tipValue = 0;

const highlightButton = (percentValue) => {
    document.querySelector(".p" + percentValue).style.backgroundColor = "hsl(172, 67%, 45%)";
    document.querySelector(".p" + percentValue).style.color = "hsl(183, 100%, 15%)";
}

const unhighlightButton = (percentValue) => {
    document.querySelector(".p" + percentValue).style.backgroundColor = "hsl(183, 100%, 15%)";
    document.querySelector(".p" + percentValue).style.color = "white";
}

const changePercent = percentValue => {
    const peopleValue = Number(peopleInput.value);
    const billValue = Number(billInput.value);
    
    if(percentValue === 5) {
        percentValue = 0.05;
        highlightButton(5);
        unhighlightButton(10);
        unhighlightButton(15);
        unhighlightButton(25);
        unhighlightButton(50);
        document.querySelector(".tip input").value = "";
    }
    else if(percentValue === 10) {
        percentValue = 0.1;
        unhighlightButton(5);
        highlightButton(10);
        unhighlightButton(15);
        unhighlightButton(25);
        unhighlightButton(50);
        document.querySelector(".tip input").value = "";
    }
    else if(percentValue === 15) {
        percentValue = 0.15;
        unhighlightButton(5);
        unhighlightButton(10);
        highlightButton(15);
        unhighlightButton(25);
        unhighlightButton(50);
        document.querySelector(".tip input").value = "";
    }
    else if(percentValue === 25) {
        percentValue = 0.25;
        unhighlightButton(5);
        unhighlightButton(10);
        unhighlightButton(15);
        highlightButton(25);
        unhighlightButton(50);
        document.querySelector(".tip input").value = "";
    }
    else if(percentValue === 50) {
        percentValue = 0.5;
        unhighlightButton(5);
        unhighlightButton(10);
        unhighlightButton(15);
        unhighlightButton(25);
        highlightButton(50);
        document.querySelector(".tip input").value = "";
    }
    else {
        percentValue = Number(percentCustom.value) / 100;
        unhighlightButton(5);
        unhighlightButton(10);
        unhighlightButton(15);
        unhighlightButton(25);
        unhighlightButton(50);
    }
    document.querySelector(".percentValue").innerHTML = percentValue;
    if(peopleValue !== 0) {
        tipValue = (percentValue * billValue);
        tipDisplay.innerHTML = "$" + (tipValue / peopleValue).toFixed(2);
        totalDisplay.innerHTML = "$" + ((billValue + tipValue) / peopleValue).toFixed(2);
    }
}

const changeBill = () => {
    const billValue = Number(billInput.value);
    const peopleValue = Number(peopleInput.value);
    const percentValue = document.querySelector(".percentValue").innerHTML;

    if(peopleValue === 0) {
        peopleInput.style.borderColor = "hsl(17, 79%, 54%)";
        errorText.style.opacity = "100%";
    }
    if(peopleValue === 0 && billValue === 0) {
        peopleInput.style.borderColor = "hsl(189, 41%, 97%)";
        errorText.style.opacity = "0%";
    }
    if(peopleValue !== 0) {
        tipValue = (percentValue * billValue);
        tipDisplay.innerHTML = "$" + (tipValue / peopleValue).toFixed(2);
        totalDisplay.innerHTML = "$" + ((billValue + tipValue) / peopleValue).toFixed(2);
    }
}

const changePeople = () => {
    const billValue = Number(billInput.value);
    const peopleValue = Number(peopleInput.value);
    const percentValue = document.querySelector(".percentValue").innerHTML;

    if(billValue !== 0) {
        if(peopleValue === 0) {
            peopleInput.style.borderColor = "hsl(17, 79%, 54%)";
            errorText.style.opacity = "100%";
        }
        else {
            peopleInput.style.borderColor = "hsl(189, 41%, 97%)";
            errorText.style.opacity = "0%";
        }
    }
    
    if(peopleValue !== 0) {
        tipValue = (percentValue * billValue);
        tipDisplay.innerHTML = "$" + (tipValue / peopleValue).toFixed(2);
        totalDisplay.innerHTML = "$" + ((billValue + tipValue) / peopleValue).toFixed(2);
    }
}

const clickReset = () => {
    billInput.value = "";
    peopleInput.value = "";
    percentCustom.value = "";
    tipDisplay.innerHTML = "$0.00";
    totalDisplay.innerHTML = "$0.00";
    unhighlightButton(5);
    unhighlightButton(10);
    unhighlightButton(15);
    unhighlightButton(25);
    unhighlightButton(50);
    document.querySelector(".percentValue").innerHTML = "0";
}