// Getting it to show the current time on the page
function showCurrentTime(){
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var meridiem = document.getElementById("meridiem");
  
  var currentTime = new Date();
  var hr = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  var meri =  "AM";
  var noon = 12;
 
  if (hr >= noon) {
    meri = "PM";
  }
  if (hr > noon) {
    hr = hr - 12;
  }
  if (min < 10){
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  meridiem.innerHTML = meri;

//  Getting the day and night modes
  var morning = 7;
  var evening = 18;
  var time = new Date().getHours();
  if(time >= morning){
    document.querySelector("body").classList.add('day-mode');
  }
  if(time >= evening){
    document.querySelector("body").classList.add('night-mode');
  }
};

  // Getting the clock to increment once a second
var oneSecond = 1000;
var clock = setInterval(showCurrentTime, oneSecond);


