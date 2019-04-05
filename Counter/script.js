'use strict';

let a = 0;

const plus = () => {
    document.getElementById('value').innerHTML = ++a;
};

const minus = () => {
    document.getElementById('value').innerHTML = --a;
};

const reset = () => {
    a = 0;
    document.getElementById('value').innerHTML = 0;
};
