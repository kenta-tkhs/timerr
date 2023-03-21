var count = 180; //カウントダウンの数字を格納する変数
    var min = 0; //残り時間「分」を格納する変数
    var sec = 0; //残り時間「秒」を格納する変数
    var stp = null; //setInterval・clearIntervalを制御する変数
    var i = 0; //ボタンの2回クリック等禁止イベントを制御する変数
    
    //1000ミリ秒毎にcont_down関数を呼び出す
    function count_start(){
        i++;
        if(i === 1){
            stp = setInterval(count_down,1000);
        } else {
            alert("2度押し厳禁やで!");
            i = 0;
        }
    }

    //カウンドダウン表示
    function count_down(){
        if(count === 1){
            var display = document.getElementById("default");
            display.innerHTML = "TIME UP!";
            clearInterval(stp);
        } else {
            count--;
            min = parseInt(count / 60);
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min).slice(-2) +":" + ("0"+sec).slice(-2);
        }
    }
    
    //ストップボタンクリック時のアクション
    function count_stop(){
        clearInterval(stp);
        i = 0;
    }

    //リセットボタンクリック時のアクション
    function count_reset(){
        count = 180;
        min = parseInt(count / 60);
        sec = count % 60;
        i = 0;
        var count_down = document.getElementById("default");
        count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
    }    
    
    //ボタンイベント制御
    window.onload = function(){
            var start = document.getElementById('start');
            var stop = document.getElementById("stop");
            var reset = document.getElementById("reset");
            start.addEventListener('click',count_start, false);
            stop.addEventListener("click",count_stop, false);
            reset.addEventListener("click",count_reset,false);
        }     