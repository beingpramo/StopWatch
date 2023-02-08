let startTime, endTime, running, timerId;

function start() {
  if (running)
    return;
  running = true;
  startTime = new Date();
  timerId = setInterval(() => {
    document.getElementById("timer").innerHTML = getTime();
  }, 10);
}

function stop() {
  if (!running)
    return;
  running = false;
  clearInterval(timerId);
  endTime = new Date();
}

function lap() {
  if (!running)
    return;
  document.getElementById("laps").innerHTML += `<li style="list-style:none;">${getTime()}</li>`;
}

function reset() {
  stop();
  document.getElementById("timer").innerHTML = "0:00.0";
  document.getElementById("laps").innerHTML = "";
  startTime = null;
  endTime = null;
}

function getTime() {
  if (!startTime)
    return "0:00.0";
  let now = new Date();
  let time = (now - startTime) / 1000;
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  let milliseconds = Math.floor((time * 100) % 100);
  return `<h1>${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}</h1>`;
}
