
function loadJSON(callback) {
    var $MyNoteRowsHolder = document.getElementById("EncouragingNoteRowHolderUL");
    var $template = '';
    var xobj = new XMLHttpRequest();
    var MyObj;
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/Json/db.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

            MyObj = JSON.parse(xobj.responseText);
            for (i in MyObj.data) {
                //$template += "<h1>" + MyObj.data[i].name + "</h1>";
                $template += '<li class="EncNoteRow">'+
                    '<img src="' + MyObj.data[i].image_url +'" class="iconImgHolder" alt="" />'+
                    '<a href="javascrript:" class="EncNoteContent">' +
                    '<b class="InfoHolder skinColor">' + MyObj.data[i].name + '</b>' +
                    '<span class="InfoHolder italic">' + MyObj.data[i].birthday + '</span>'+        
                        '<span class="Note">' +
                    MyObj.data[i].quote + '</span></a></li>';
               
                  //  alert(MyObj.data[i].name);
            }
            $MyNoteRowsHolder.innerHTML = $template;

        }
    };
    xobj.send(null);
}