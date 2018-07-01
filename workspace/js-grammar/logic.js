(function(){
    'use strict';
    var age =16;
    var result = null;
    if(age>= 18 ) {
        //age >= 18が真のときに実行
        result = '成年';
    } else {
        //age >= 18が偽のときに実行
        result = '未成年';
    }
    document.write(result);
})();