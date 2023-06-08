var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function BodySetColor(color){
  document.querySelector('body').style.color = color;
}
function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('black');
  }
}
var isClockRunning = true;

function startClock() {
    let clock = document.getElementById("clock");
    clock.addEventListener("click", function() {
        isClockRunning = !isClockRunning;

        if (isClockRunning) {
            timeout(clock); 
        }
    });

    timeout(clock); 
}
function timeout(obj) {
    if (!isClockRunning) {
        return; 
    }

    let date = new Date();
    obj.innerHTML = date.toLocaleTimeString(); 
    setTimeout(function() {
        timeout(obj);
    }, 1000);
}