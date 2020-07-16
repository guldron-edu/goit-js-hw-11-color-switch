import colors from './colors';

let timerId = null;

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.stop.disabled = true;

const scriptStart = () => {
  if (!timerId) {
    timerId = setInterval(changeColor, 1000);
    refs.start.disabled = true;
    refs.stop.disabled = false;
  }
};

const scriptStop = () => {
  clearInterval(timerId);
  timerId = null;
  refs.start.disabled = false;
  refs.stop.disabled = true;
};

refs.start.addEventListener('click', scriptStart);
refs.stop.addEventListener('click', scriptStop);

const changeColor = () => {
  let randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = `${randomColor}`;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
