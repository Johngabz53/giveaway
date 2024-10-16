const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const fDate = new Date("2024-12-21T00:00:00Z");

const year = fDate.getFullYear();
const hours = fDate.getHours();
const minutes = fDate.getMinutes();

let month = fDate.getMonth();
month = months[month];

const weekday = weekdays[fDate.getDate()];

const date = fDate.getDate();

giveaway.textContent = "Giveaway start on "+date+" , "+month+' , '+year;

const futerTime = fDate.getTime();

function getRemTime(){
    const today = new Date().getTime();

    const t = futerTime - today;

    //1s = 1000ms
    //1m = 60s
    //1h = 60min
    //1d = 24h

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay)/oneHour);
    let minutes = Math.floor((t % oneHour)/oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values
    const values = [days,hours,minutes,seconds];
    function format(item){
        if(item<10){
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = "<h4 class='expired'>Sorry, this giveaway expired..</h4>";
    }
}

//countdown
let countdown = setInterval(getRemTime,1000);

getRemTime();