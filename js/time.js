const time_S = document.querySelector("#time span:first-child");
const day_S = document.querySelector("#time span:last-child");

const week = new Array("일", "월", "화", "수", "목", "금", "토");


function goTime() {
    const date_S = new Date();
    const hour = String(date_S.getHours()).padStart(2,"0");
    const minute = String(date_S.getMinutes()).padStart(2,"0");
    const second = String(date_S.getSeconds()).padStart(2,"0");
    time_S.innerText = `${hour}:${minute}:${second}`;
}

function goDay() {
    const date_S = new Date();
    const year = date_S.getFullYear();
    const month = String(date_S.getMonth()).padStart(2,"0");
    const date = String(date_S.getDate()).padStart(2,"0");
    const day = week[date_S.getDay()];
    day_S.innerText = `${year}년${month}월${date}일\n${day}요일`;
}

goTime();
goDay();
setInterval(goTime, 1000);
setInterval(goDay, 1000);
