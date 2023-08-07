function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  updateDigit('hoursTens', hours.charAt(0));
  updateDigit('hoursOnes', hours.charAt(1));
  updateDigit('minutesTens', minutes.charAt(0));
  updateDigit('minutesOnes', minutes.charAt(1));
  updateDigit('secondsTens', seconds.charAt(0));
  updateDigit('secondsOnes', seconds.charAt(1));
}

function updateDigit(digitId, value) {
  const digitElement = document.getElementById(digitId);
  digitElement.textContent = value;
}

setInterval(updateClock, 1000);


function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(changeBackgroundColor, 1000);