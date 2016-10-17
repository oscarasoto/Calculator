(function () {
    "use strict";

    // Prints values in the Inputs
    function handleDigitLeftSide(digit) {
        var display = document.getElementById("leftInput");
        display.value += digit.innerText;
        return display.value;
    }

    function handleOperator(digit) {
        var display = document.getElementById("operator");
        display.value = digit.innerText;
        return display.value;
    }

    function handleDigitRightSide(digit) {
        var display = document.getElementById("rightInput");
        display.value += digit.innerText;
        return display.value;
    }

    // Calculate the math for each type of operation
    function calculate(left, operator, right) {
        var total = 0;
        switch (operator.value){
            case "+" :
                total = parseFloat(left.value) + parseFloat(right.value);
                break;
            case "-" :
                total = parseFloat(left.value) - parseFloat(right.value);
                break;
            case "x" :
                total = parseFloat(left.value) * parseFloat(right.value);
                break;
            case "/" :
                total = parseFloat(left.value) / parseFloat(right.value);
                break;
        }
        return total;

    }

    // Generates an event for each button
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (event) {
            event.preventDefault();
            var objectJustClicked = this;
            if (document.getElementById("operator").value != "" && objectJustClicked.getAttribute("class") == "col-xs-3 digit") {
                var rightInput = handleDigitRightSide(objectJustClicked);
            }
            if (objectJustClicked.getAttribute("class") == "col-xs-3 digit" && document.getElementById("rightInput").value == "") {
                var leftInput = handleDigitLeftSide(objectJustClicked);
            }
            if (objectJustClicked.getAttribute("class") == "col-xs-3 operator" && document.getElementById("leftInput").value != "") {
                var operator = handleOperator(objectJustClicked);
            }
        });
    }

    // Sends information to perform the math and prints the result in the left side
    var equal = document.getElementById("equal");
    equal.addEventListener("click", function (event) {
        event.preventDefault();

        if (document.getElementById("leftInput").value != "" && document.getElementById("rightInput").value != "")
            document.getElementById("leftInput").value = calculate(leftInput,operator,rightInput);
            document.getElementById("operator").value = "";
            document.getElementById("rightInput").value = "";
    });

    // Clears inputs
    var clear = document.getElementById("clear");
    clear.addEventListener("click", function (event) {
         event.preventDefault();

         document.getElementById("leftInput").value = "";
         document.getElementById("operator").value = "";
         document.getElementById("rightInput").value = "";
     })

})();
