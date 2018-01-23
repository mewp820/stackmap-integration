// version 2.
/* StackMap: Start */
(function(){
    console.log("StackMap working");

    var a = document.querySelector("head");
    var css1 = document.createElement("link"); 
    css1.type = "text/css";
    css1.rel = "Stylesheet";
    css1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    css1.crossorigin = "anonymous";
    a.appendChild(css1);

    var css2 = document.createElement("link"); 
    css2.type = "text/css";
    css2.rel = "Stylesheet";
    css2.href = "https://www.stackmap.com/integration/southerncross-primo2/StackMap.css";
    a.appendChild(css2);

    var w = document.createElement("script"); 
    w.type = "text/javascript"; w.async = true;
    w.src = "https://www.stackmap.com/integration/southerncross-primo2/StackMap.js";
    var b = document.body;
    b.appendChild(w);

})();
/* StackMap: END */



(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/  

})();



/*----------below is the code for libchat-----------*/
var s = document.createEement('script');
s.id ='localScript';
s.src = 'https://v2.libanswers.com/load_chat.php?hash=5c317d79e89d4f80c4152c32fa4db85b';
document.body.appendChild(s);

app.component('prmLogoAfter', {
template: '<div id="libchat_5c317d79e89d4f80c4152c32fa4db85b"></div>'
});
/*---------------libchat code ends here---------------*/
