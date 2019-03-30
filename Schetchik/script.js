var a = 0;
var displayValue = document.getElementById('Value');

var updateValue = function () {
    displayValue.innerHTML = a;
};

var plus = function (valueToPlus) {
    a += valueToPlus;
    document.getElementById('Value').innerHTML = a;
};

var minus = function (valueToMinus) {
    a -= valueToMinus;
    document.getElementById('Value').innerHTML = a;
};

var reset = function () {
    a = 0;
    document.getElementById('Value').innerHTML = 0;
};
