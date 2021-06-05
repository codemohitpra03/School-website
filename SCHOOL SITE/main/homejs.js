//PM~KS

//------------------------------------OPENING OF QUICK CONTACT CONTAINER

var container=document.getElementsByClassName('quick'); //quick contact opening area
var close=document.getElementById('close');   //closeebtn
var submit_button=document.getElementById('sub');
var form_area=document.getElementsByClassName('form'); //form area


//opening css
var opencss=" width: 500px; height: 700px; border-color: rgb(248, 191, 4); background: rgb(243, 216, 140); cursor: default; ";
var closebtn_open="display: inline; position:absolute; visibility: visible; left:320px; top:628px; border: 1px solid rgb(207, 148, 21); border-radius:5px;";
var submit_btn_open="display: inline; position:absolute; left:0px; top:0px; border: 1px solid rgb(207, 148, 21); border-radius:5px;";
var form_area_open="display: inline; position:absolute; visibility: visible; left:3px; top:50px; transition: left 0.72s linear 1.25s;";
function open_(){
    container[0].style.cssText=opencss;
    close.style.cssText=closebtn_open;
    form_area[0].style.cssText=form_area_open;
    submit_button.style.cssText=submit_btn_open;
}

//closecss
var closecss="  width:140px; height:25px; background: rgb(243, 216, 140); border-radius: 68px;";
var closebtn_close="left:1000px ; top:628px; transition: left 0.5s linear";
var form_area_close="left:1000px ; top:50px; transition: left 0.5s linear";
function close_(){
    container[0].style.cssText=closecss;
    close.style.cssText=closebtn_close;
    form_area[0].style.cssText=form_area_close;
    // container[0].style.background=" rgb(255,255,255)"
}





//more dropdown
var dropdown=document.getElementById('anim');
var dropdowncss="display:inline; background:red;"
function moreclick(){
    dropdown.style.cssText=dropdowncss;
}


