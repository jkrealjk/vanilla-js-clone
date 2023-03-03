const clock = document.querySelector("#clock");
const date = new Date();

const handleClock = () => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hour = String(date.getHours());
  const min = String(date.getMinutes());
  const sec = String(date.getSeconds());
  clock.innerText = `${year} ${month} ${day} ${hour.padStart(
    2,
    0
  )} ${min.padStart(2, 0)} ${sec.padStart(2, 0)}`;
};
handleClock();
setInterval(handleClock, 1000);
