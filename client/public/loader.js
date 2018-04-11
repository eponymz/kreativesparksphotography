// LOADER
let timerTroll;
function trollLoad() {
  let teeHee = Math.floor(Math.random() * 15) + 1;
  if (teeHee <= 1) {
    timerTroll = setTimeout(pageDrop, 4000);
  } else if (teeHee <= 3) {
    timerTroll = setTimeout(pageDrop, 3000);
  } else if (teeHee <= 5) {
    timerTroll = setTimeout(pageDrop, 2000);
  } else if (teeHee <= 7) {
    timerTroll = setTimeout(pageDrop, 2500);
  } else timerTroll = setTimeout(pageDrop, 1000);

  console.log(teeHee);
}

function pageDrop() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('root').style.display = 'block';
}
trollLoad();
