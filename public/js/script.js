var count = 10;
var sec = null;
var rest = 5;
var times = 4;
var stp = null;



function count_start(){
    stp = setInterval(count_down, 1000);
}


function count_down(){
    let rest_time = true;
    const display = document.getElementById("default");
    if(rest_time){
        if(rest === 1){
            if(times === 1){
                display.innerHTML = "error";
                clearInterval(stp);
            }else{
                rest = 5;
                rest_time = false;
                display.innerHTML = (4-times)+"休憩終了!";
            }            
        }else{
            rest--;
            display.innerHTML = rest;
        }
    }else{
        if(count === 1){
            if(times === 1){
                display.innerHTML = "お疲れさまでした!";
                clearInterval(stp);
            }else{
                count = 10;
                times--;
                display.innerHTML = (4-times)+"セット終了!";
                rest_time = True;
            }            
        }else{
            count--;
            display.innerHTML = count;
        }
    }
}