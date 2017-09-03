(function () {
    "use strict";

    var showTwitterIcon = function (e) {
        var text = '';
        var pageX = e.pageX;
        var pageY = e.pageY;

        if (window.getSelection) {
            text = window.getSelection();
        } else if (document.getSelection) {
            text = document.getSelection();
        } else if (document.selection) {
            text = document.selection.createRange().text;
        }

        var tweetObj = document.getElementsByClassName('tools');
        if (text != '') {
            for (var i = 0; i < tweetObj.length; i += 1) {
                tweetObj[i].style.position = "absolute";
                tweetObj[i].style.left = pageX + 5 + 'px';;
                tweetObj[i].style.top = pageY - 55 + 'px';;
                tweetObj[i].style.display = 'block';
                var tweetObj = document.getElementById("tweet");
                tweetObj.href = "https://twitter.com/share?url=https://codepen.io/jawi1&amp;text="+text.toString();
            }
        } else {
            for (var i = 0; i < tweetObj.length; i += 1) {
                tweetObj[i].style.display = 'none';
            }
        }
    }

    document.onmouseup = showTwitterIcon;
    if (!document.all) {
        document.captureEvents(Event.MOUSEUP);
    }

    document.getElementById("tweet").addEventListener("click", function(){
        var tweetObj = document.getElementsByClassName('tools');
        for (var i = 0; i < tweetObj.length; i += 1) {
            tweetObj[i].style.display = 'none';
        }
    });
})();



