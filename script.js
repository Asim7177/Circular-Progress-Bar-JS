let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressFail = 40;
let progressPass = 41;
let progressAve = 71;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;

  if (progressValue <=progressFail){
    progressBar.style.background = `conic-gradient(
      #FF0000 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`
  }

else if ((progressValue < progressPass || progressValue > progressFail)&& progressValue < progressAve){
  progressBar.style.background = `conic-gradient(
    #FFA500 ${progressValue * 3.6}deg,
    #cadcff ${progressValue * 3.6}deg
)`;
}
else {
  progressBar.style.background = `conic-gradient(
    #00FF00 ${progressValue * 3.6}deg,
    #cadcff ${progressValue * 3.6}deg
)`;
}
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
