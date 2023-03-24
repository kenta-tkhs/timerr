let count = 10;
let sec = null;
let rest = 5;
let times = 4;
let stp = null;



function count_start(){
    stp = setInterval(count_down, 1000);
}


function count_down(){
    const display = document.getElementById("default");
    for (let i=times; i>0; i--){
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

$(function(){
    $('.setting-btn').on('click', function(){
      $('.setting-menu').toggleClass('active');
    });
  }());