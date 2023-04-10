let display = document.getElementById("default");
let count = 30;
let rest = 5;
let sum = count + rest;
let times = 4;
let clock = document.getElementById("clock");
let countdown = document.getElementById("countdown");
let end = document.getElementById("end");


function count_start(){
    stp = setInterval(count_down, 1000);
}


function count_down(){
    let display = document.getElementById("default");
    if(sum === 1){
        if(times === 1){
            display.innerHTML = "お疲れさまでした!";
            clearInterval(stp);
            end.play();
        }else{
            sum = count + rest;
            times--;
            display.innerHTML = (4-times)+"セット終了!";
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
