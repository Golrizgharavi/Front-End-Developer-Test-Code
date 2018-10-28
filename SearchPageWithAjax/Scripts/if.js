function compute(element, style) {
    if (typeof element.currentStyle != 'undefined') { var s = element.currentStyle[style]; }
    else { s = window.getComputedStyle(element, null).getPropertyValue(style) };
    return s;
}

//var brandId=[];
var SelectedBrand = [];
var MdlWrapper = document.getElementById("MdlWrapper");
var MdlUl = MdlWrapper.getElementsByTagName("ul");
var MdlLis = MdlUl[0].getElementsByTagName("li");
/*-------------------------------------------------------------------*/

for (var i = 0; i < MdlLis.length; i++) {
    var MdlA = MdlLis[i].getElementsByTagName("a");
    for (var x = 0; x < window.frameElement.modal.length; x++) { if (MdlA[0].id == window.frameElement.modal[x]) { var imageSelected = MdlA[0].getElementsByTagName("img"); imageSelected[0].style.borderColor = "gray"; imageSelected[0].className = "selected" } }
    MdlA[0].onclick = function () { var MdlImg = this.getElementsByTagName("img"); if (MdlImg[0].className == "") { MdlImg[0].className = "selected"; MdlImg[0].style.borderColor = "gray"; /* brandId+=this.id;alert(brandId)*/ } else if (MdlImg[0].className == "selected") { MdlImg[0].style.borderColor = "#F7F7F7"; MdlImg[0].className = ""; } }
    MdlA[0].onmouseover = function () { var MdlImg = this.getElementsByTagName("img"); if (MdlImg[0].className == "") { MdlImg[0].style.borderColor = "gray"; this.onmouseout = function () { if (MdlImg[0].className == "") { MdlImg[0].style.borderColor = "#F7F7F7" } } } }

}

function sendBrand() {
    for (var i = 0; i < MdlLis.length; i++) {
        var MdlA = MdlLis[i].getElementsByTagName("a"); var MdlImg = MdlA[0].getElementsByTagName("img"); var mdlB = MdlA[0].getElementsByTagName("b"); if (MdlImg[0].className == "selected") {
            // alert(mdlB[0].innerHTML);
            var obj = { id: '', name: '' };
            obj.id = MdlA[0].id;
            obj.name = mdlB[0].innerHTML;
            SelectedBrand.push(obj);
            // alert(obj.id +'--'+ obj.name) 
        } 
    }
    for (var j = 0; j < SelectedBrand.length; j++) {
        window.frameElement.modal.push(SelectedBrand[j]);

    }
    window.frameElement.close();
    //  alert(SelectedBrand.length); 
}

var phoneTypeInner = document.getElementById("phoneTypeInner");
var phoneTypeInnerOptions = phoneTypeInner.getElementsByTagName("a");
var Phone = document.getElementById("Phone");
var Tablet = document.getElementById("Tablet");
for (var s = 0; s < phoneTypeInnerOptions.length; s++) {
    phoneTypeInnerOptions[s].onclick = function () {
        if (this.id == "Phone") {
            //            var phoneSpan = this.getElementsByTagName("span"); phoneSpan[0].className = "skinColor activatedPhone";
            //            var tabletSpan = Tablet.getElementsByTagName("span"); tabletSpan[0].className = ""
            this.className = "activatedPhone";
            Tablet.className = ""
            var phoneSpan = this.getElementsByTagName("span");
            phoneSpan[0].className = "sp-002 sx-002018 skinColor";
            var disactivePhone = Tablet.getElementsByTagName("span");
            disactivePhone[0].className = "";
            
        }
        if (this.id == "Tablet") {
            //            var disactivePhone = Phone.getElementsByTagName("span");
            //            disactivePhone[0].className = ""; var activTablet = this.getElementsByTagName("span");
            //            activTablet[0].className = "skinColor activatedPhone"
            this.className = "activatedPhone";
            Phone.className = "";
            var phoneSpan = this.getElementsByTagName("span");
            phoneSpan[0].className = "sp-002 sx-002018 skinColor";
            var disactivePhone = Phone.getElementsByTagName("span");
            disactivePhone[0].className = ""
            
        }
    }
 }