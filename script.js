
function showTime() {
  let currentTime = new Date();

  let hours = currentTime.getHours().toString().padStart(2, '0');
  let minutes = currentTime.getMinutes().toString().padStart(2, '0');
  let seconds = currentTime.getSeconds().toString().padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  document.getElementsByClassName("hours")[0].innerHTML = hours;
  document.getElementsByClassName("mins")[0].innerHTML = minutes;
  document.getElementsByClassName("sec")[0].innerHTML = seconds;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;
}

showTime();

setInterval(showTime, 1000);
