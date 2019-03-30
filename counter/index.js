'use strict';
  let count = 0;
  const counter = {
    next: () => {
      var next = document.getElementById("counter");
      next.innerHTML = ++count;
    },
    reset: () => {
      var reset = document.getElementById("counter");
      reset.innerHTML = count = 0;
    },
    previous: () => {
      var previous = document.getElementById("counter");
      previous.innerHTML = --count;
    }
  };
