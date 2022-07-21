let time = document.getElementById("time");
let timeZone = document.getElementById("timeZone");
let schedule = "AM";
let h, m, s, timeFormat;

function todayTime() {
  let today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
}

// 12 hour clock
function myFun() {
  todayTime();
  if (h > 12) {
    h = h % 12;
    schedule = "PM";
  } else if (h == 12) {
    schedule = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  timeZone.innerHTML = h + ":" + m + ":" + s + " " + schedule;
  setTimeout(myFun, 1000);
}

// 24 hour clock
function digitalTime() {
  todayTime();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (h < 12) {
    timeFormat = "AM";
  } else {
    timeFormat = "PM";
  }

  time.innerHTML = h + ":" + m + ":" + s + " " + timeFormat;
  setTimeout(digitalTime, 1000);
}
