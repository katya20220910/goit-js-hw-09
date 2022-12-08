function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', bodyChangeColor);

function bodyChangeColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    buttonStart.setAttribute('disabled', 'disabled');
}

buttonStop.addEventListener('click', bodyStopChangeColor);

function bodyStopChangeColor() {
    timerId = clearInterval(timerId);
    buttonStart.removeAttribute('disabled', 'disabled');
}



// buttonStart.setAttribute('disabled', true);
// buttonStart.removeAttribute('disabled');