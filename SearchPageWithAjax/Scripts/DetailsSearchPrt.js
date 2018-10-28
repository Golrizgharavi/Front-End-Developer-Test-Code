

function compute(element, style) {
    if (typeof element.currentStyle != 'undefined') { var s = element.currentStyle[style]; }
    else { s = window.getComputedStyle(element, null).getPropertyValue(style) };
    return s;
}



/*-----------------------------------------------Selector-----------------------*/

function handleSelector(obj) {
    var selectorIcon = obj.getElementsByTagName("a");
    var selecterContainer = obj.getElementsByTagName("div");
    var selecterUl = selecterContainer[0].getElementsByTagName("ul");

//    document.onclick = function () { if (compute(selecterContainer[0], "display") == "block") { alert(this.tagName) } }
    selectorIcon[0].onclick = function () {
        if (compute(selecterContainer[0], "display") == "none") { selecterContainer[0].style.display = "block"; obj.style.zIndex = "10000"; }
        else { selecterContainer[0].style.display = "none"; obj.style.zIndex = "0"; }


    }

    var text = selectorIcon[0].getElementsByTagName("b");
    var selecterLIs = selecterUl[0].getElementsByTagName("li");
    for (var n = 0; n < selecterLIs.length; n++) {
        var option = selecterLIs[n].getElementsByTagName("a");
        option[0].onclick = function () {
            var dataValue = this.getAttribute("data-value");
            var select = selecterContainer[0].getElementsByTagName("select");
            var optSlct = select[0].getElementsByTagName("option")
            for (var m = 0; m < optSlct.length; m++) {
                if (optSlct[m].getAttribute("value") == dataValue) {
                    select[0].value = dataValue;
                    text[0].innerHTML = this.innerHTML; selecterContainer[0].style.display = "none";

                }

            }

        }
    
     }
    

 }


/*-----------------------------------------------checkBox-----------------------*/

 var checkBoxs2 = document.getElementById("TabContent");
    var ULsSecond2 = checkBoxs2.getElementsByTagName("ul");

    for (var r = 0; r < ULsSecond2.length; r++) {
        var lisSecond2 = ULsSecond2[r].getElementsByTagName("li");
        for (var s = 0; s < lisSecond2.length; s++) {
            if (ULsSecond2[r].id != "selecterUl" && ULsSecond2[r].id != "selecterUl2" && ULsSecond2[r].id != "selecterUl3") {
            var lable2 = lisSecond2[s].getElementsByTagName("label");
            lable2[0].onclick = function () {
                var inp2 = this.getElementsByTagName("input");
                if (inp2[0].checked == true) { inp2[0].parentNode.className = "sp-001 sx-001061"; this.onmouseover = function () { inp2[0].parentNode.className = "sp-001 sx-001061" }; this.onmouseout = function () { inp2[0].parentNode.className = "sp-001 sx-001059" } }
                if (inp2[0].checked != true) { inp2[0].parentNode.className = "sp-001 sx-001060"; this.onmouseover = function () { inp2[0].parentNode.className = "sp-001 sx-001060" }; this.onmouseout = function () { inp2[0].parentNode.className = "sp-001 sx-001058" } }

            }
            lable2[0].onmouseover = function () {
                var inp2 = this.getElementsByTagName("input");
                if (inp2[0].checked == false) { inp2[0].parentNode.className = "sp-001 sx-001060"; this.onmouseout = function () { inp2[0].parentNode.className = "sp-001 sx-001058" } }
            }
            }
        }

}


/*------------------------moreSetting-----------------------------*/
function handleMoreSetting(btn) {
    var TabContent = document.getElementById("TabContent");
    //alert(TabContent.scrollHeight + 'px');
    //alert(TabContent.offsetHeight + 'px');
    if (TabContent.offsetHeight == 400) {
        var timer = window.setInterval(function () { if (TabContent.offsetHeight <= 815) { var height = parseInt(compute(TabContent, "height")); height += 40; TabContent.style.height = height + 'px'; var arrow = btn.getElementsByTagName("i"); arrow[0].className = "sp-001 sx-001069" } else { window.clearInterval(timer) } }, 20);
      
    }
    else  {
        var height = 820;
        var timer2 = window.setInterval(function () { if (TabContent.offsetHeight > 400) { height -= 20; TabContent.style.height = height + 'px'; var arrow = btn.getElementsByTagName("i"); arrow[0].className = "sp-001 sx-001068" } else { window.clearInterval(timer2) } }, 20);
      }
   
 }



 /*--------------------------------------------------------modal-----------------------------------------------*/

 function compute(element, style) {
     if (typeof element.currentStyle != 'undefined') { var s = element.currentStyle[style]; }
     else { s = window.getComputedStyle(element, null).getPropertyValue(style) };
     return s;
 }




 var rowUL = document.getElementById("rowUL");

 function Showmodal(obj) {
     var divMdlDialog = document.createElement("div");
     divMdlDialog.className = "MdlDialog";
     document.body.appendChild(divMdlDialog);
     var divMdlBG = document.createElement("div");
     divMdlBG.className = "MdlBG";
     divMdlDialog.appendChild(divMdlBG);
     var divMdlBox = document.createElement("div");
     divMdlBox.className = "MdlBox";
     divMdlDialog.appendChild(divMdlBox);
     var divMdlCaption = document.createElement("div");
     divMdlCaption.className = "MdlCaption";
     divMdlBox.appendChild(divMdlCaption);
     var AcloseBtn = document.createElement("a");
     AcloseBtn.className = "closeBtn";
     divMdlCaption.appendChild(AcloseBtn);
     var img = document.createElement("img");
     img.src = "/Images/PhoneIcon05.png";
     divMdlCaption.appendChild(img);
     var textTit = document.createTextNode(" Phone/Tablet Brand Selection");
     divMdlCaption.appendChild(textTit);
     var divMdlStage = document.createElement("div");
     divMdlStage.className = "MdlStage";
     divMdlBox.appendChild(divMdlStage);
     var iframe = document.createElement("iframe");
     iframe.src = obj.src;
     iframe.style.height = obj.height + 'px';
     iframe.style.width = obj.width + 'px';
     iframe.scrolling = "no";
     divMdlBox.style.top = "45%";
     divMdlBox.style.marginTop = '-' + obj.height / 2 + 'px';
     divMdlBox.style.left = "50%";
     divMdlBox.style.marginLeft = '-' + obj.width / 2 + 'px';
     iframe.modal = []
     /*---------------------------------------------------------*/

     var slcBrands = rowUL.getElementsByTagName("li");
     //alert(slcBrands.length);
     for (var j = 0; j < slcBrands.length; j++) {
         iframe.modal.push(slcBrands[j].id);
         //alert(iframe.modal)
     }


     /*------------------------------------------------------------*/
     iframe.close = function () {
         document.body.removeChild(divMdlDialog);
         rowUL.innerHTML = null;
         for (var i = 0; i < iframe.modal.length; i++) {
             if (iframe.modal[i].id != null) {
                 var BrdLI = document.createElement("li");
                 BrdLI.className = "brdItem";
                 BrdLI.id = iframe.modal[i].id;
                 rowUL.appendChild(BrdLI);
                 var brdImage = document.createElement("img");
                 brdImage.src = '/Images/Brands/' + iframe.modal[i].id + '.gif'
                 BrdLI.appendChild(brdImage);
                 var closeIcon = document.createElement("a");
                 closeIcon.className = "closeIcon sp-001 sx-001070";
                 closeIcon.title = "delete";
                 BrdLI.appendChild(closeIcon);
                 var rowUlA = rowUL.getElementsByTagName("a");
                 for (var l = 0; l < rowUlA.length; l++) { rowUlA[l].onclick = function () { rowUL.removeChild(this.parentNode) } }


             }
         }
     }

     divMdlStage.appendChild(iframe);
     //alert(iframe.modal.id)

     AcloseBtn.onclick = function () {
         document.body.removeChild(divMdlDialog);
         //for(var n=0;n<iframe.modal.length;n++){alert(iframe.modal[n].id +'----'+iframe.modal[n].name);}
     }



 }

 var addBtn = document.getElementById("addBtn");
 addBtn.onmouseover = function () { addBtn.style.borderColor = "#99c162" };
 addBtn.onmouseout = function () { addBtn.style.borderColor = "#bae085" }

