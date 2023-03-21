var count = 30;
var sec = 0;
var stp = null;

function count_start(){
    for (var i=0; i < 8; i++){
        stp = setInterval(count_down,1000);
    }
}


function count_down(){
    if(count === 1){
        var display = document.getElementById("default");
        display.innerHTML = "TIME UP!";
        clearInterval(stp);
    } else {
        count--;
        sec = count % 60;
        var count_down = document.getElementById("default");
        count_down.innerHTML = sec;
    }
}