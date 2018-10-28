<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="/Styles/Home-rtl.css" rel="stylesheet" type="text/css" />
    <link href="Styles/modalStyle.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div id="SideCol">
        <img src="/Images/SideColAdv.jpg" style="width:228px;height:228px;margin-bottom:10px;" alt="" />

         <div class="sideBox">
            <div class="sideBoxInner">
                 <h1 class="boxTitle"><i class="sp-icon sp-icon001"></i><b>Views/Search </b></h1>  

                 <div class="statisticsBox">
                    <div class="statisticsBoxInner">
                        <ul class="statisticsBoxInnerBg sp-002 sx-002003">
                            <li class="statisticsBoxLi"><span><i class="sp-001 sx-001020"></i><b class="skinColor number">137</b></span><b class="When"> Today's View</b></li>
                            <li class="statisticsBoxLi"><span><i class="sp-001 sx-001020"></i><b class="skinColor number">2684</b></span><b class="When">Last Week Views</b></li>
                            <li class="statisticsBoxLi"><span><i class="sp-001 sx-001021"></i><b class="skinColor number">26843544444</b></span><b class="When"> Lat Month Views</b></li>
                            <li class="statisticsBoxLi"><span><%--<i class="sp-001 sx-001021"></i>--%><b class="skinColor number" style="width:90px;">264208444345555</b></span><b class="When" style="width:70px">Total Views</b></li>
                        
                        </ul>
                    </div>
                 </div>
            </div>
        </div>

        <img src="/Images/SideColAdsDown.jpg" alt="" style="width:228px;height:141px;border:1px solid #dddddd;direction:ltr;"/>


    </div>
    <div id="contentCol">
        <div class="sideBox">
            <div class="sideBoxInner">

                <h1 class="contentTitle"><i class="sp-001 sx-001004"></i><b class="skinColor"> Advanced Search</b></h1>

                <div id="TabContent">
                  <div class="TabDiv">
                    <table class="TabTbl sp-002 sx-002014 ">
                            <tr>
                                 <td>
                                    <span class="TabSpan selected"><span></span><a href="#" class="TabItems"> Phones</a></span> 
                                </td>
                                   <td>
                                    <span class="TabSpan "><span></span><a href="#" class="TabItems">Softwares </a></span> 
                                </td>
                                <td>
                                    <span class="TabSpan"><span></span><a href="#" class="TabItems">Accessories </a></span> 
                                </td>
                                <td>
                                    <span class="TabSpan"><span></span><a href="#" class="TabItems">Review</a></span> 
                                </td>
                                <td>
                                    <span class="TabSpan"><span></span><a href="#" class="TabItems"> Froum</a></span>  
                                </td>
                                <td>
                                    <span class="TabSpan "><span></span><a href="#" class="TabItems">Blog</a></span> 
                                </td>
                                <td>
                                    <span class="TabSpan"><span></span><a href="#" class="TabItems">News</a></span> 
                                </td>
                   

                        </tr>
                      </table>
               
                   </div>
                   <div class="contentTitleHolder">
                         <h1 class="contentTitle"><i class="sp-001 sx-001025"></i><b class="skinColor">General Information</b></h1>
                   </div>


                   <div id="ForCheckBox">
                   <div class="checkBoxs" id="Div12" >
                        <div class="row">
                            <b class="rowTitle" style="margin-top:20px;"> Brands :</b>
                            <div class="rowContent first-row">
                                 <ul id="rowUL">

                                </ul>
                                <a href="javascript:" class="addBtn" id="addBtn" onclick="Showmodal({width:700,height:390,src:'modal.aspx'})"><span  class="addBtnBg sp-002 sx-002017"><img  src="/Images/addIcon-1.png" alt=""/></span></a>
                               
                            
                            </div>
                        </div>
                   </div>


                   <div class="checkBoxs" id="checkBoxs">
                        <div class="row">
                            <b class="rowTitle"> Status:</b>
                            <div class="rowContent first-row">
                                <ul id="status&price" >
                                    <li class="rowItem"><label for="st_0"  hidefocus="hidefocus"><i  class="sp-001 sx-001058"><input class="inputCheckBox" type="checkbox" id="st_0" name="status" value="0"/></i><b>Available</b></label></li>
                                    <li class="rowItem"><label for="st_1"  hidefocus="hidefocus"><i  class="sp-001 sx-001058"><input class="inputCheckBox" type="checkbox" id="st_1" name="status" value="1"/></i><b>Coming Soon</b></label></li>
                                </ul>
                            
                            </div>
                        </div>


                        <div class="row">
                            <b class="rowTitle"> Price:</b>
                            <div class="rowContent" >
                              
                              <div class="sliderHolder">
                                <span class="round">
                                    <span class="roundLeft"></span>
                                    <span class="roundRight"></span>
                                    <span class="middle" id="middle">
                                        <span class="wrraper2">
                                            <span class="dragclass" id="RedKnob"   style="left:240px;top:-2px;">
                                                <b class="hallow" id="hall1"  onmousedown="handleHallo(this)" ></b>
                                            </span>
                                        </span>
                                        <span class="wrraper1">
                                             <span class="dragclass" id="BGKnob"   style="left:-3px;top:-2px;" >
                                                    <b class="hallow" id="hall2" onmousedown="handleHallo(this)" ></b>
                                             </span>
                                        </span>
                                    </span>
    
                                </span>

                               </div>
                               
                            </div>
                        </div>
                   
                   </div>

                    <div class="checkBoxs" id="checkBoxsSecondPrt">
      
                        <div class="row">
                            <b class="rowTitle"> Color:</b>
                            <div class="rowContent first-row">
                                <div id="itemColor">
                                    <label for="color-1" class="item"><i class="i" style="background-image:url(/Images/Colors/color-1.gif);background-repeat:no-repeat;" title="pink"></i><input type="checkbox" id="color-1" class="ColorInput"/></label>
                                    <label for="color-2" class="item"><i class="i"style="background-image:url(/Images/Colors/color-2.gif);background-repeat:no-repeat;" title="yello"></i><input type="checkbox" id="color-2" class="ColorInput"/></label>
                                    <label for="color-3" class="item"><i class="i" style="background-image:url(/Images/Colors/color-3.gif);background-repeat:no-repeat;" title="green"></i><input type="checkbox" id="color-3" class="ColorInput"/></label>
                                    <label for="color-4" class="item"><i class="i" style="background-image:url(/Images/Colors/color-4.gif);background-repeat:no-repeat;" title="green"></i><input type="checkbox" id="color-4" class="ColorInput"/></label>
                                </div>
                            
                            </div>
                        </div>

                    </div>


                    <div class="checkBoxs" id="Div1">
                        <div class="row">
                            <b class="rowTitle"> Weight :</b>
                            <div class="rowContent first-row">
                               
                                <div class="singleKnobSlider">
                                    
                                    <i class="sp-001 sx-001064" style="*margin-right:250px"></i>
                                    <div class="singleKnob">
                                    <span class="round singleKnobRound" >
                                    <span class="roundLeft" style="background-image:url(/Images/Slider/ctrlRange_ls_red.png);background-repeat:no-repeat;width:4px;height:11px;display:inline-block;"></span>
                                    <span class="roundRight"></span>
                                    <span class="middle" id="middleSingleKnob1">
                                        
                                        <span class="wrraper1" style="background:#B41818">
                                             <span class="dragclass" id="Knob4"   style="left:-3px;top:-2px;" >
                                                    <b class="hallow" id="hallow3" onmousedown="handleHallo(this)" ></b>
                                             </span>
                                        </span>
                                    </span>
    
                                </span>
                                </div>
                                    <i class="sp-001 sx-001034"></i>
                                </div> 
                            
                            </div>
                        </div>


                        <div class="row">
                            <b class="rowTitle"> Size:</b>
                            <div class="rowContent ">

                                <div class="singleKnobSlider">
                                    <i class="sp-001 sx-001065" style="*margin-right:250px"></i>
                                    <div class="singleKnob">
                                    <span class="round singleKnobRound" >
                                    <span class="roundLeft" style="background-image:url(/Images/Slider/ctrlRange_ls_red.png);background-repeat:no-repeat;width:4px;height:11px;display:inline-block;"></span>
                                    <span class="roundRight"></span>
                                    <span class="middle" id="middleSingleKnob2">
                                        
                                        <span class="wrraper1" style="background:#B41818">
                                             <span class="dragclass" id="Knob5"   style="left:-3px;top:-2px;" >
                                                    <b class="hallow" id="hallow4" onmousedown="handleHallo(this)" ></b>
                                             </span>
                                        </span>
                                    </span>
    
                                </span>
                                </div>
                                    <i class="sp-001 sx-001035"></i>
                                
                                </div> 
                                
                            
                            </div>
                        </div>


                    

                    </div>


                    </div>

<!-------------------------------------------detailsSearch----------------------------------------------------->

                   <div id="detailSearch">
                      <div id="SimCard" class="detailsPrt">
                        <div class="contentTitleHolder">
                            <h1 class="contentTitle"><i class="sp-001 sx-001036"></i><b class="skinColor"> SIM Cards</b></h1>
                        </div>

                        <div class="checkBoxs" id="Div3">
                          <div class="row">
                            <b class="rowTitle"> SIM Card :</b>
                             <div class="rowContent first-row">

                                 <div id="selecter" class="selecter" >
                                        <div id="selecterControl" class="selecterControl" onmousedown="handleSelector(this)">
                                            <a href="javascript:" id="selectorIcon" class="selectorIcon" data-value>
                                                <i id="icon" class="sp-001 sx-001067 icon"></i>
                                                <b id="text"  class="text">Both</b>
                                            </a>
                                            <div id="selecterContainer" class="selecterContainer">
                                              <ul id="selecterUl">
                                                <li><a href="javascript:" data-value="1" class="selectorA">Both</a></li>
                                                <li><a href="javascript:" data-value="2" class="selectorA">1 SIM Card</a></li>
                                                <li><a href="javascript:" data-value="3" class="selectorA">2 SIM Card</a></li>
                                              </ul>
                                             <select name="options" id="optionsCtrl" >
                                                <option value="1" id="mohem">Both </option>
                                                <option value="2" id="adad">1 SIM Card</option>
                                                <option value="3" id="majazi">2 SIM Card</option>
                                             </select>
                                            </div>
                                            </div>
    
                                       </div>
                            
                            </div>
                        </div>
                       </div>


                     </div>



<!----------------------------software------------------------------------>
                    <div id="software" class="detailsPrt">
                        <div class="contentTitleHolder">
                            <h1 class="contentTitle"><i class="sp-001 sx-001047"></i><b class="skinColor"> Software</b></h1>
                        </div>

                         <div class="checkBoxs" id="Div7">
                       <div class="row">
                            <b class="rowTitle">OS :</b>
                            <div class="rowContent first-row">
                                <ul id="Ul8" >
                                    <li class="rowItem"><label for="st_26"  hidefocus="hidefocus"><i  class="sp-001 sx-001058"><input class="inputCheckBox" type="checkbox" id="st_26" name="them" value="10"/></i><b>android</b></label></li>
                                    <li class="rowItem"><label for="st_27"  hidefocus="hidefocus"><i  class="sp-001 sx-001058"><input class="inputCheckBox" type="checkbox" id="st_27" name="them" value="11"/></i><b>windows</b></label></li>
                                    <li class="rowItem"><label for="st_28"  hidefocus="hidefocus"><i  class="sp-001 sx-001058"><input class="inputCheckBox" type="checkbox" id="st_28" name="them" value="11"/></i><b>ios</b></label></li>
                                </ul>
                            
                            </div>
                        </div>
                       
                        </div>
                    
                    </div>
<!--------------------------------------------memory------------------------------------------->
                        <div id="memory" class="detailsPrt">
                            <div class="contentTitleHolder">
                                <h1 class="contentTitle"><i class="sp-001 sx-001048"></i><b class="skinColor"> Memory</b></h1>
                            </div>
                            <div class="checkBoxs" id="Div8">
                                  <div class="row">
                                    <b class="rowTitle"> Internal :</b>
                                    <div class="rowContent first-row">

                                    <div id="Div9" class="selecter">
                                        <div id="Div10" class="selecterControl" onmousedown="handleSelector(this)">
                                            <a href="javascript:" id="A1" class="selectorIcon" data-value>
                                                <i id="i2" class="sp-001 sx-001067 icon"></i>
                                                <b id="B2"  class="text">None</b>
                                            </a>
                                            <div id="Div11" class="selecterContainer">
                                              <ul id="selecterUl3">
                                                <li><a href="javascript:" data-value="7" class="selectorA">None</a></li>
                                                <li><a href="javascript:" data-value="8" class="selectorA">Item 1</a></li>
                                                <li><a href="javascript:" data-value="9" class="selectorA">Item 2</a></li>
                                              </ul>
                                             <select name="options2" id="Select1" >
                                                <option value="7" id="Option4">None</option>
                                                <option value="8" id="Option5">Item 1</option>
                                                <option value="9" id="Option6">Item 2</option>
                                             </select>
                                            </div>
                                            </div>
    
                                       </div>
                            
                                    </div>
                                </div>




                            </div>
                        
                        </div>
                   
                   
                   </div>

                   

<!--------------------------------------------endOfDetailsSearch-------------------------------->
                    

                </div>
                <div id="moreSettingBtn">
                        <a href="javascript:" id="moreSettingA" class="sp-002 sx-002015" onclick="handleMoreSetting(this)"><i class="sp-001 sx-001068"></i><b>Detail Search</b></a>
                    </div>

                    <div id="btnSearch">
                        <a href="javascript:" class="btnSearchA"><span class="sp-002 sx-002016"><i class="sp-001 sx-001066"></i><b>Search</b></span></a>
                    </div>
            
            </div>
        </div>
    
    </div>

</asp:Content>

