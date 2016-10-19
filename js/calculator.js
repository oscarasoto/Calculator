(function () {
    "use strict";

// Check functions.
    function isARightSideDigit(objectJustClicked) {
        return !!(document.getElementById("operator").value != "" && objectJustClicked.getAttribute("class") == "col-xs-3 digit");
    }
    function isALeftSideDigit(objectJustClicked) {
        return !!(objectJustClicked.getAttribute("class") == "col-xs-3 digit" && document.getElementById("rightInput").value == "");

    }
    function isAnOperator(objectJustClicked) {
        return !!(objectJustClicked.getAttribute("class") == "col-xs-3 operator" && document.getElementById("leftInput").value != "");
    }

// Prints values in the Inputs.
    function handleDigitLeftSide(digit) {
        var display = document.getElementById("leftInput");
        display.value += digit.innerText;
    }

    function handleOperator(digit) {
        var display = document.getElementById("operator");
        display.value = digit.innerText;
    }

    function handleDigitRightSide(digit) {
        var display = document.getElementById("rightInput");
        display.value += digit.innerText;
    }

// Calculate the math for each type of operation.
    function calculate(left, operator, right) {

        var total = 0;
        switch (operator){
            case "+" :
                total = parseFloat(left) + parseFloat(right);
                break;
            case "-" :
                total = parseFloat(left) - parseFloat(right);
                break;
            case "x" :
                total = parseFloat(left) * parseFloat(right);
                break;
            case "/" :
                total = parseFloat(left) / parseFloat(right);
                break;
        }
        return total;
    }

// Generates an event for each button.
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            event.preventDefault();
            var objectJustClicked = this;

            if (isARightSideDigit(objectJustClicked)) {
                handleDigitRightSide(objectJustClicked);
            }
            if (isALeftSideDigit(objectJustClicked)) {
                handleDigitLeftSide(objectJustClicked);
            }
            if (isAnOperator(objectJustClicked)) {
                handleOperator(objectJustClicked);
            }
        });
    }

// Sends information to perform the math and prints the result in the left side.
    var equal = document.getElementById("equal");
    equal.addEventListener("click", function (event) {
        event.preventDefault();
        var leftInput = document.getElementById("leftInput");
        var operator = document.getElementById("operator");
        var rightInput = document.getElementById("rightInput");
        // Check if has input before performing the math.
        if (leftInput.value != "" && rightInput.value != ""){
            leftInput.value = calculate(leftInput.value,operator.value,rightInput.value);
            operator.value = "";
            rightInput.value = "";
        }
    });

// Clears inputs.
    var clear = document.getElementById("clear");
    clear.addEventListener("click", function (event) {
         event.preventDefault();
         document.getElementById("leftInput").value = "";
         document.getElementById("operator").value = "";
         document.getElementById("rightInput").value = "";
     })

})();
