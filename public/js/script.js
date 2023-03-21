var count = 10;
var sec = 0;
var times = 4;
var stp = null;
var display = document.getElementById("default");

display.innerHTML = count;


function count_start(){
    stp = setInterval(count_down,1000);
}


function count_down(){
        if(count === 1){
            if(times === 1){
                display.innerHTML = "お疲れさまでした!";
                clearInterval(stp);
            }else{
                count = 10;
                times--;
                display.innerHTML = (4-times)+"セット終了!";
            }            
        }else{
            count--;
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = sec;
        }

}