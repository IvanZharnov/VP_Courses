'use strict';

let c = 0;

function addition () {
  return document.getElementById("counter").innerHTML = ++c;
}

function subtraction () {
  return document.getElementById("counter").innerHTML = --c;
}

function reset () {
  return document.getElementById("counter").innerHTML = c = 0;
}
