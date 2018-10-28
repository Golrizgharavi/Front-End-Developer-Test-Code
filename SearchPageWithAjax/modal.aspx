<%@ Page Language="VB" AutoEventWireup="false" CodeFile="modal.aspx.vb" Inherits="modal" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="Styles/modalStyle.css" rel="stylesheet" type="text/css" />
    <link href="Styles/Main-rtl.css" rel="stylesheet" type="text/css" />
    <link href="/Skins/Red/Main.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="MdlWrapper" id="MdlWrapper">
                    <table class="massage"><tbody><tr><td>Pleas choose the brands...</td></tr></tbody></table>
                    <div class="MdlContainer">
                        <div class="phoneType">
                            <div class="phoneTypeInner" id="phoneTypeInner">
                                <a href="javascript:"  id="Phone" class="activatedPhone"><span class="sp-002 sx-002018 skinColor">phone <i class="sp-001 sx-001025"></i></span></a>
                                <a href="javascript:"  id="Tablet"><span >Tablet <i class="sp-001 sx-001049"></i></span></a>
                            </div>
                        </div>
                        <div class="MdlBrand">
                            <div class="MdlBrandContent">
                                <ul>
                                    <li><a href="javascript:" id="1"><span><img src="/Images/Brands/1.gif" alt=""  /></span><br/><b>Nokia</b></a></li><li>
                                    <a href="javascript:" id="2"><span><img src="/Images/Brands/2.gif" alt="" /></span><br/><b>Motorola</b></a></li><li>
                                    <a href="javascript:" id="3"><span><img src="/Images/Brands/3.gif" alt="" /></span><br/><b>Sony</b></a></li><li>
                                    <a href="javascript:" id="4"><span><img src="/Images/Brands/4.gif" alt="" /></span><br/><b>Sumsung</b></a></li><li>
                                    <a href="javascript:" id="5"><span><img src="/Images/Brands/5.gif" alt="" /></span><br/><b>Apple</b></a></li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>                 
                
                </div>
                
               <div class="MdlBtn">
                       <a href="javascript:" class="MdlBtnA" onclick="sendBrand()"><span><img  src="/Images/CheckMarkIcon.png"/> Select Brand</span></a> 
                </div>

    <script src="/Scripts/if.js" type="text/javascript" language="javascript"></script>
</body>
</html>
