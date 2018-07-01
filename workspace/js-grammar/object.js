(function(){
    'use strict';
    var startTime = null;
    var displayArea = document.getElementById('display-area');

    function start(){
        startTime = new Date().getTime();
        document.body.onkeypress = stop;
    }

    function stop() {
        var currentTime = new Date().getTime();
        var seconds = (currentTime - startTime) / 1000;
        if (9.5 <= seconds && seconds <= 10.5) {
            displayArea.innerText = seconds + '秒でした。すごい。';
        } else {
            displayArea.innerText = seconds + '秒でした。残念。';
        }
    }
    
    if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
        start();
    }
})();