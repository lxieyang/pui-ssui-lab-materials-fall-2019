import F9Launching from './assets/f9-launching.png';
import F9Landing from './assets/f9-landing.png';
import F9Landed from './assets/f9-landed.png';
import F9RUD from './assets/f9-rud.png';

let groundY = 0;
let stepX = 10;
let stepY = 10;

const f9 = document.getElementById('falcon9');
const f9Images = {
  launching: F9Launching,
  landing: F9Landing,
  landed: F9Landed,
  exploding: F9RUD,
};
f9.src = f9Images.landed;

document.addEventListener('keyup', ev => {
  if (ev.keyCode === 39) {
    // right
    goRight();
  } else if (ev.keyCode === 37) {
    // left
    goLeft();
  }
});

const goRight = () => {
  if (canGoRight()) {
    const left = parseInt(f9.style.left) || 0;
    f9.style.left = left + stepX + 'px';
  }
};

const goLeft = () => {
  if (canGoLeft()) {
    const left = parseInt(f9.style.left) || 0;
    f9.style.left = left - stepX + 'px';
  }
};

const canGoRight = () => {
  return (parseInt(f9.style.left) || 0) + parseInt(f9.width) + stepX <= window.innerWidth;
};

const canGoLeft = () => {
  return parseInt(f9.style.left) || 0 - stepX >= 0;
};
