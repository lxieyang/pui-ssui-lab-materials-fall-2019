import F9Launching from './assets/f9-launching.png';
import F9Landing from './assets/f9-landing.png';
import F9Landed from './assets/f9-landed.png';
import F9RUD from './assets/f9-rud.png';

let groundY = 0;
let groundHeight = 82;
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

document.addEventListener('keydown', ev => {
  if (ev.keyCode === 39) {
    // right
    goRight();
  } else if (ev.keyCode === 37) {
    // left
    goLeft();
  } else if (ev.keyCode == 38) {
    // up
    goUp();
  } else if (ev.keyCode === 40) {
    // down
    goDown();
  }
});

let exploded = false;

f9.addEventListener('click', () => {
  exploded = true;
  f9.src = f9Images.exploding;
});

const goRight = () => {
  if (canGoRight() && !exploded) {
    const left = parseInt(f9.style.left) || 0;
    f9.style.left = left + stepX + 'px';
  }
};

const goLeft = () => {
  if (canGoLeft() && !exploded) {
    const left = parseInt(f9.style.left) || 0;
    f9.style.left = left - stepX + 'px';
  }
};

const goUp = () => {
  if (exploded) {
    return;
  }
  const bottom = parseInt(f9.style.bottom) || groundY;
  f9.style.bottom = bottom + stepY + 'px';
  f9.src = f9Images.launching;
};

const goDown = () => {
  if (!canGoDown() || exploded) {
    return;
  }
  const bottom = parseInt(f9.style.bottom) || groundY;
  f9.style.bottom = bottom - stepY + 'px';
  if (parseInt(f9.style.bottom) === 0) {
    f9.src = f9Images.landed;
  } else {
    f9.src = f9Images.landing;
  }
};

const canGoRight = () => {
  return (parseInt(f9.style.left) || 0) + parseInt(f9.width) + stepX <= window.innerWidth;
};

const canGoLeft = () => {
  return parseInt(f9.style.left) || 0 - stepX >= 0;
};

const canGoDown = () => {
  return parseInt(f9.style.bottom) || 0 - stepY >= 0;
};
