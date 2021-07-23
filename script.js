let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
        second
    )}`;

    let secondDeg = (360 / 60) * second - 90;
    let minuteDeg = (360 / 60) * minute - 90;
    let hourDeg = (360 / 12) * hour - 90;

    sElement.style.transform = `rotate(${secondDeg}deg)`;
    mElement.style.transform = `rotate(${minuteDeg}deg)`;
    hElement.style.transform = `rotate(${hourDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

updateClock();
setInterval(updateClock, 1000);
