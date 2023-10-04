let hour=0o0 ;
let minute=0o0;
let second=0o0;
let count =0o0;
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");

start.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stop.addEventListener('click', function () {
    timer = false;
});
reset.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
function stopWatch(){
    if(timer){
        count++;
    
        if(count==100){
        second++;
        count=0;
    }
        if(second==60){
        minute++;
        second=0;
    }
        if(minute==60){
        hour++;
        minute=0;
        second=0;
    }
    var hr=hour;
    var min=minute;
    var sec=second;
    var cou=count;

    hr=hour<10 ?"0"+hr:hr;
    min=minute<10 ?"0"+min:min;
    sec=second<10 ?"0"+sec:sec;
    cou=count<10 ?"0"+cou:cou;

    document.getElementById('hr').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('count').innerHTML = cou;
    setTimeout(stopWatch, 10);
    }
}