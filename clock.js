window.addEventListener("load",calculateTime);
function calculateTime(){
    var date=new Date();
    var dayNumber=date.getDay();
    var hour=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var ampm=hour>=12?'PM':'AM';
    var dayNames=['sun','mon','tue','wed','thu','fri','sat'];
    hour=hour%12;
    hour=hour?hour:'12';
    hour=hour<10?'0'+hour:hour;
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;
    document.getElementById("day").innerHTML=dayNames[dayNumber];
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("ampm").innerHTML=ampm;
    setTimeout(calculateTime,1000);
}