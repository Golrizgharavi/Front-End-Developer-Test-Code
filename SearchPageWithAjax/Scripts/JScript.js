

 /*-------------------------------------getVersion-----------------------------------*/
    var Browser = { Version: function () {
        var version = 999;
        // we assume a sane browser 
        if (navigator.appVersion.indexOf("MSIE") != -1)
        // bah, IE again, lets downgrade version number   
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
}

 /*-------------------------------------Slider------------------------------------*/

    var middle = document.getElementById("middle");
    var pos = getElementPosition(middle);
//    alert( pos.x + "," + pos.y);   


    function getElementPosition(elem) {

        var posX = 0;
        var posY = 0;

        while (elem != null) {
            posX += parseInt(elem.offsetLeft);
            posY += elem.offsetTop;
            elem = elem.offsetParent;
        }

        return { x: posX, y: posY };

    }

/*-----------------------------------------------------------------------*/
    function compute(element, style) {
        if (typeof element.currentStyle != 'undefined') { var s = element.currentStyle[style]; }
        else { s = window.getComputedStyle(element, null).getPropertyValue(style) };
        return s;
    }


    if (document.getElementById) {

        (function () {
            if (window.opera) {
                document.write("<input type='hidden' id='Q' value=' '>");
            }

            var n = 500;
            var dragok = false;
            var y, x, d, dy, dx;

            var middle = document.getElementById("middle");
            var middleSingleKnob1 = document.getElementById("middleSingleKnob1");
            var middleSingleKnob2 = document.getElementById("middleSingleKnob2");
            var BGKnob = document.getElementById("BGKnob");
            var RedKnob = document.getElementById("RedKnob");


            function move(e) {
                if (!e) e = window.event;
                if (dragok) {
                    var middleWidth = parseInt(compute(middle, "width"));

                    if (Browser.Version() < 8) {

                        if ((e.clientX >= pos.x + 20) && (e.clientX <= pos.x + middleWidth+20)) {
                            if (d.id == "BGKnob") {
                                var width = parseInt(compute(RedKnob.parentNode, "width"));
                                if (e.clientX >= pos.x + 20 && e.clientX <= pos.x + width+20) {
                                    d.style.left = dx + e.clientX - x + "px";
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                            }

                            if (d.id == "RedKnob") {
                                var width2 = parseInt(compute(BGKnob.parentNode, "width"));
                                if (e.clientX >= pos.x + width2 && e.clientX <= pos.x + middleWidth+20) {
                                    d.style.left = dx + e.clientX - x + "px";
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                            }

                        }
                        else if (e.clientX < pos.x || e.clientX > pos.x + middleWidth) {
                            if (d.id == "BGKnob") {
                                if (e.clientX < pos.x) {
                                    d.style.left = '-3px';
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                                else if (e.clientX > pos.x + middleWidth && parseInt(compute(RedKnob.parentNode, "width")) == 250) { d.style.left = '240px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                                else if (e.clientX > pos.x + middleWidth && parseInt(compute(RedKnob.parentNode, "width")) != 250) { d.style.left = compute(RedKnob, "left"); newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                            }
                            if (d.id == "RedKnob") {
                                if (e.clientX > pos.x + middleWidth) {
                                    d.style.left = '247px';
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }

                                else if (e.clientX < pos.x && parseInt(compute(BGKnob.parentNode, "width")) == 0) { d.style.left = '-3px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                                else if (e.clientX < pos.x && parseInt(compute(BGKnob.parentNode, "width")) != 0) { d.style.left = compute(BGKnob, "left"); var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                            }


                        }

                        if (d.id == "Knob4" || d.id == "Knob5") { if (e.clientX >= (pos.x + 20) - 30 && e.clientX <= (pos.x + 20) + 210) { d.style.left = dx + e.clientX - x + "px"; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; } }
                        if (d.id == "Knob4" || d.id == "Knob5") {
                            if (e.clientX < pos.x - 30) {
                                d.style.left = '-3px';
                                var newWidth = parseInt(compute(d, "left")) + 7;
                                d.parentNode.style.width = newWidth + "px";
                            }
                            else if (e.clientX > pos.x + middleWidth) { d.style.left = '240px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }

                        }
                    }
                    /*---------------------------------------------------------endOfIE6&IE7----------------------------------------------------*/
                    else {
                        if ((e.clientX >= pos.x) && (e.clientX <= pos.x + middleWidth)) {
                            if (d.id == "BGKnob") {
                                var width = parseInt(compute(RedKnob.parentNode, "width"));
                                if (e.clientX >= pos.x && e.clientX <= pos.x + width) {
                                    d.style.left = dx + e.clientX - x + "px";
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                            }

                            if (d.id == "RedKnob") {
                                var width2 = parseInt(compute(BGKnob.parentNode, "width"));
                                if (e.clientX >= pos.x + width2 && e.clientX <= pos.x + middleWidth) {
                                    d.style.left = dx + e.clientX - x + "px";
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                            }
                            //                        if (d.id == "Knob4" || d.id == "Knob5") { if (e.clientX >= pos.x && e.clientX <= pos.x + 210) { d.style.left = dx + e.clientX - x + "px"; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; } }

                        }
                        else if (e.clientX < pos.x || e.clientX > pos.x + middleWidth) {
                            if (d.id == "BGKnob") {
                                if (e.clientX < pos.x) {
                                    d.style.left = '-3px';
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }
                                else if (e.clientX > pos.x + middleWidth && parseInt(compute(RedKnob.parentNode, "width")) == 250) { d.style.left = '240px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                                else if (e.clientX > pos.x + middleWidth && parseInt(compute(RedKnob.parentNode, "width")) != 250) { d.style.left = compute(RedKnob, "left"); newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                            }
                            if (d.id == "RedKnob") {
                                if (e.clientX > pos.x + middleWidth) {
                                    d.style.left = '247px';
                                    var newWidth = parseInt(compute(d, "left")) + 7;
                                    d.parentNode.style.width = newWidth + "px";
                                }

                                else if (e.clientX < pos.x && parseInt(compute(BGKnob.parentNode, "width")) == 0) { d.style.left = '-3px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                                else if (e.clientX < pos.x && parseInt(compute(BGKnob.parentNode, "width")) != 0) { d.style.left = compute(BGKnob, "left"); var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }
                            }

                            //                        if (d.id == "Knob4" || d.id == "Knob5") {
                            //                            if (e.clientX < pos.x) {
                            //                                d.style.left = '-3px';
                            //                                var newWidth = parseInt(compute(d, "left")) + 7;
                            //                                d.parentNode.style.width = newWidth + "px";
                            //                            }
                            //                            else if (e.clientX > pos.x + middleWidth) { d.style.left = '240px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }

                            //                        }

                        }

                        if (d.id == "Knob4" || d.id == "Knob5") {if (e.clientX >= pos.x - 30 && e.clientX <= pos.x + 210) { d.style.left = dx + e.clientX - x + "px"; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; } }
                        if (d.id == "Knob4" || d.id == "Knob5") {
                            if (e.clientX < pos.x +30) {
                               
                                d.style.left = '-3px';
                                var newWidth = parseInt(compute(d, "left")) + 7;
                                d.parentNode.style.width = newWidth + "px";
                            }
                            else if (e.clientX > pos.x + middleWidth) {  d.style.left = '240px'; var newWidth = parseInt(compute(d, "left")) + 7; d.parentNode.style.width = newWidth + "px"; }

                        }

                    }

                    return false;
                }
            }

            function down(e) {

                if (!e) e = window.event;
                var temp = (typeof e.target != "undefined") ? e.target : e.srcElement;
                if (temp.tagName != "HTML" | "BODY" && temp.className != "dragclass") {
                    temp = (typeof temp.parentNode != "undefined") ? temp.parentNode : temp.parentElement;
                }
                if (temp.className == "dragclass") {
                    if (window.opera) {
                        document.getElementById("Q").focus();
                    }
                    dragok = true;
                    //                    temp.style.zIndex = n++;
                    d = temp;
                    dx = parseInt(temp.style.left);
                    dy = parseInt(temp.style.top);
                    x = e.clientX;
                    y = e.clientY;
                    document.onmousemove = move;
                    return false;
                }
            }

            var hallow1 = document.getElementById("hall1");
            var hallow2 = document.getElementById("hall2");
            var hallow4 = document.getElementById("hallow4");
            var hallow3 = document.getElementById("hallow3");
            function up() {
                dragok = false;
                document.onmousemove = null;
                hallow1.style.opacity = '0';
                hallow1.style.filter = 'alpha(opacity=0)';
                hallow2.style.opacity = '0';
                hallow2.style.filter = 'alpha(opacity=0)';
                hallow3.style.opacity = '0';
                hallow3.style.filter = 'alpha(opacity=0)';
                hallow4.style.opacity = '0';
                hallow4.style.filter = 'alpha(opacity=0)';
            }

            document.onmousedown = down;
            document.onmouseup = up;

        })();
    }

    function handleHallo(obj) {

        var i = 0;
        var t = window.setInterval(function () {
            if (i <= 1) { i += 0.01; obj.style.opacity = i; obj.style.filter = 'alpha(opacity=' + i * 100; }
            else { window.clearInterval(t) }
        }, 1);
        obj.onmouseup = function () { obj.style.opacity = 0; obj.style.filter = 'alpha(opacity= 0' ;}
    }


 

    /*------------------------------------------Color-------------------------------------*/
    var itemColor = document.getElementById("itemColor");
    var colorLable = itemColor.getElementsByTagName("label");

    for (var x = 0; x < colorLable.length; x++) {
        var inpColor = colorLable[x].getElementsByTagName("input");
        inpColor[0].onclick = function () {

            if (this.checked) { this.parentNode.style.border = "3px solid #bc0000"; this.parentNode.style.padding = "0" }
            else { this.parentNode.style.border = "2px solid #ffffff"; this.parentNode.style.padding = "1px"; }
        }
        colorLable[x].onmouseover = function () { if (inpColor[0].checked == false) { this.style.backgroundColor = "black"; this.onmouseout = function () { this.style.backgroundColor = "gray"; } } }

    }

    



