const secondHand = document.querySelector('#secondHand');
const minuteHand = document.querySelector('#minutedHand');
const hourHand = document.querySelector('#hourHand');

setInterval(clock, 1000);
function clock() {
  const currentTime = new Date();
  const second = currentTime.getSeconds();
  const minute = currentTime.getMinutes();
  const hour = currentTime.getHours();
  secondMove(second);
  minuteMove(minute);
  hourMove(hour);
}

function secondMove(a) {
  secondHand.style.transform = `rotate(${a * 6}deg)`;
}
function minuteMove(a) {
  minuteHand.style.transform = `rotate(${a * 6}deg)`;
}
function hourMove(a) {
  hourHand.style.transform = `rotate(${a * 30}deg)`;
}
