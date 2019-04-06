'use strict';
  let count = 0;
  const counter = {
    next: () => {
      let next = document.getElementById("counter");
      next.innerHTML = ++count;
    },
    reset: () => {
      let reset = document.getElementById("counter");
      reset.innerHTML = count = 0;
    },
    previous: () => {
      let previous = document.getElementById("counter");
      previous.innerHTML = --count;
    }
  };
