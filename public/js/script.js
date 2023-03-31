let display = document.getElementById("default");
var obj11 = document.getElementById('count');
var obj1 = parseInt(30, 10);
var count = 10;
let obj22 = document.getElementById('rest');
var obj2 = parseInt(15, 10);
let rest = 5;
let sum = obj1 + obj2;
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
            sum = obj1 + obj2;
            times--;
            display.innerHTML = (4-times)+"セット終了!";
        }            
    }else{
        sum--;
        if(sum === obj1){
            display.innerHTML = "休憩終了!";
        }else{
            display.innerHTML = sum % obj1;
        }
    }
    
}
