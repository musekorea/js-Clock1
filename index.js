const secondHand = document.querySelector('#secondHand');
const minuteHand = document.querySelector('#minutedHand');
const hourHand = document.querySelector('#hourHand');
const pin = document.querySelectorAll('.pin');
const container = document.querySelector('.container');

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

for (let i = 0; i < 60; i++) {
  const div = document.createElement('div');
  div.classList.add('pinBox');
  div.innerHTML = `
  <div class="pin pinBlack">
  <div class="pin pinWhite"></div>
  </div>`;
  container.appendChild(div);
}
let i = 0;
const pinboxes = document.querySelectorAll('.pinBox');
pinboxes.forEach((pinBox) => {
  let degree = i * 6;
  i++;
  pinBox.style.transform = `rotate(${degree}deg) translateY(-50%)`;
});
/* pinbox.style.transform = `rotate(12deg)`; */
