const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const newYearDay = new Date('January 1, 2024 00:00:00').getTime();

const updateCount = function(){
    const now = new Date().getTime();
    const until = newYearDay - now;
    
    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    const days = Math.floor(until / d);
    const hours = Math.floor((until % d) / h );
    const minutes = Math.floor((until % h) / m);
    const seconds = Math.floor((until % m) / s);

    dayEl.innerText = days;
    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
    setTimeout(updateCount, 1000);
};

updateCount();