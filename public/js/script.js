let display = document.getElementById("default");
var obj1 = document.getElementById('count');
var count = 10;
let obj2 = document.getElementById('rest');
let rest = 5;
let sum = count + rest;
let times = 4;


function count_start(){
    stp = setInterval(count_down, 1000);
}


function count_down(){
    let display = document.getElementById("default");
    if(sum === 1){
        if(times === 1){
            display.innerHTML = "お疲れさまでした!";
            clearInterval(stp);
        }else{
            sum = count + rest;
            times--;
            display.innerHTML = (4-times)+"セット終了!";
        }            
    }else{
        sum--;
        if(sum === count){
            display.innerHTML = "休憩終了!";
        }else{
            display.innerHTML = sum % count;
        }
    }
    
}
