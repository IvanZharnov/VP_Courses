'use strict';
function makeCounter(){
  var count=0;
  return {
      next: function() {
        var next= document.getElementById("counter");
        next.innerHTML= ++count;
        return counter.next;
      },
      reset: function() {
        var reset= document.getElementById("counter");
        reset.innerHTML= count=0;
        return counter.reset;
      },
      previous: function() {
        var previous= document.getElementById("counter");
        previous.innerHTML= --count;
        return counter.previous;
      }
    };
  }

  var counter = makeCounter();
