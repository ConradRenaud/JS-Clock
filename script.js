const secondsHand = document.querySelector("[data-seconds]");
const minutesHand = document.querySelector("[data-minutes]");
const hoursHand = document.querySelector("[data-hours]");

setInterval(setClock, 1000);

function setClock() {
  let currentTime = new Date();
  let secondsRatio = currentTime.getSeconds() / 60;
  let minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + currentTime.getHours()) / 12;

  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hoursHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
