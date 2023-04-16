let display = document.getElementById("default");
let count = Number(document.getElementById("count").value);
let rest = Number(document.getElementById("rest").value);
let sum = count + rest;
let set = Number(document.getElementById("set").value);
let set2 = set;
let clock = document.getElementById("clock");
let countdown = document.getElementById("countdown");
let end = document.getElementById("end");
let time = null;
let initialOffset = 280;
let i = 1;
let count_time = false;

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
            i = 1;
            count_time = false;
            display.innerHTML = (set2 - set)+"セット終了!";
            end.play();
        }
    }else{
        sum--;
        time = sum % count;
        if(sum === count){
            display.innerHTML = "休憩終了!";
            count_time = true;
            i = 1;
            end.play();
        }else{
            if(time === 1 | time === 2){
                countdown.play();
            }else{
                clock.play();
            }
            display.innerHTML = time;
        }
    }
    if (count_time) {
        $('.timer-circle').css('stroke-dashoffset', initialOffset-(i*(initialOffset/count)));
    }else{
        $('.timer-circle').css('stroke-dashoffset', initialOffset-(i*(initialOffset/rest)));
    }
    i++;
}
