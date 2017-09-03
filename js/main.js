var t = '';
function gText(e) {
    pageX = e.pageX;
    pageY = e.pageY;
    t = (document.all) ? document.selection.createRange().text : document
        .getSelection();

    // document.getElementById('input').value = t;
    // document.getElementById('id01').style.display = 'block'
    var appBanners = document.getElementsByClassName('tools');
    if(t != '') {
         console.log(t.toString());
        
         for (i = 0; i < appBanners.length; i += 1) {
            appBanners[i].style.position = "absolute";
            appBanners[i].style.left = pageX + 5 + 'px';;
            appBanners[i].style.top = pageY - 55 + 'px';;
            appBanners[i].style.display = 'block';
         }
    } else {
        for (i = 0; i < appBanners.length; i += 1) {
            appBanners[i].style.display = 'none';
         }
    }

   

    // document.querySelector('ul.tools').css({
    //             'left': pageX + 5,
    //             'top' : pageY - 55
    //         }).fadeIn(200);

    //     var el = document.getElementsByClassNameyId('#content');

    // el.style.left = pageX + 5;
    // el.style.top = pageY - 55;

    // el.style.dispaly = 'block';

    

}


var pageX;
var pageY;

document.onmouseup = gText;
if (!document.all) {
    document.captureEvents(Event.MOUSEUP);
}
