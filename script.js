const daysE1= document.getElementById('days');
const hoursE1= document.getElementById('hours');
const minE1= document.getElementById('min');
const secondsE1= document.getElementById("seconds");

const newYears = "January 1, 2025";

function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate= new Date();

    const totalseconds =(newYearsDate - currentDate)/1000;

    const days =Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600)%24;
    const minutes= Math.floor(totalseconds/60)%60;
    const seconds= Math.floor(totalseconds)%60;

    daysE1.innerHTML= days;
    hoursE1.innerHTML= formatTime(hours);
    minE1.innerHTML= formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);

    console.log(newYearsDate);
}

function formatTime(time)
{
    return time< 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown,100);


