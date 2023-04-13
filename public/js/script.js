let display = document.getElementById("default");
let count = Number(document.getElementById("count").value);
let rest = Number(document.getElementById("rest").value);
let sum = count + rest;
let set = Number(document.getElementById("set").value);
let set2 = set;
let clock = document.getElementById("clock");
let countdown = document.getElementById("countdown");
let end = document.getElementById("end");

document.getElementById("count").onchange = function() {
    count = Number(document.getElementById("count").value); 
    sum = count + rest;
};
document.getElementById("rest").onchange = function() {
    rest = Number(document.getElementById("rest").value);
    sum = count + rest; 
};
document.getElementById("set").onchange = function() {
    set = Number(document.getElementById("set").value);
    sum = count + rest;
    set2 = set;
};



function count_start(){
    stp = setInterval(count_down, 1000);
    var time = sum * set; 
    var initialOffset = '280';
    var i = 1;
    var interval = setInterval(function() {
        $('.timer-circle').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
        $('.timer-time').text(10-i);
        if (i == time) { clearInterval(interval); } // 連続の場合： i=1; 
        i++;
    }, 1000);
}

function count_down(){
    let display = document.getElementById("default");
    if(sum === 1){
        if(set === 1){
            display.innerHTML = "お疲れさまでした!";
            clearInterval(stp);
            end.play();
        }else{
            sum = count + rest;
            set--;
            display.innerHTML = (set2 - set)+"セット終了!";
            end.play();
        }            
    }else{
        sum--;
        if(sum === count){
            display.innerHTML = "休憩終了!";
            end.play();
        }else{
            if(sum % count === 1 | sum % count === 2){
                countdown.play();
            }else{
                clock.play();
            }
            display.innerHTML = sum % count;      
        }
    }
}
