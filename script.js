var finalTime=new Date("August 12 2023 11:00:00").getTime();
countdown();
setInterval(countdown,1000);

function countdown()
{
    var now=new Date().getTime();
    var diff=finalTime-now;

    var days=Math.floor((diff)/(1000*60*60*24));
    var hours=Math.floor(((diff)% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes=Math.floor(((diff)% (1000 * 60 * 60 )) / (1000 * 60));
    var seconds=Math.floor(((diff)% (1000 * 60)) / (1000));

    var time=document.querySelectorAll(".time");
    time[0].textContent=days;
    time[1].textContent=hours;
    time[2].textContent=minutes;
    time[3].textContent=seconds;
    
}