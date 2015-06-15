window.fbAsyncInit = function() {
   FB.init({
appId      : '439749989534358',
xfbml      : true,
version    : 'v2.3'
});
};

function myScroll(id){
    $t = $('#'+id);
    if($t.is(':visible')==false){
        $t.fadeIn();
    }

    $('html,body').animate(
            {scrollTop: $t.offset().top-50},
            'slow'
            );
}

var ansList = [];
function saveAnsAndFadeOut( Qx, Ans, Show ){
     $('#'+Qx).fadeOut();
     $('#'+Show).fadeIn();
     post(Qx, Ans);
     myScroll('ask');
}

function saveAns( Ans ){
     ansList.push(Ans);
     if(ansList[Ans] == null){
         ansList[Ans] = true;
     }else{
         ansList[Ans] = null;
     }
}

function nextQuestion( Qx, Show ){
     $('#'+Qx).fadeOut();
     $('#'+Show).fadeIn();
     myScroll('ask');
     for(var key in ansList){
         if(ansList[key] == true){
             post(key, ansList[key]);
         }
     }
}
function justNext( Qx, Show ){
     $('#'+Qx).fadeOut();
     $('#'+Show).fadeIn();
     myScroll('ask');
}

function fadeOutID( ID ){
    $('#'+ID).fadeOut();
}


 $(document).ready(
     function(){
         $('#breath,#bone,#ear,#pee,#vomit,#belly,#diarrhea,#diseaseTime,#kind,#age,#weight,#disease,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
         $('#start').button('loading');
     }
 );
 $(window).load(
     function(){
         $('#breath,#bone,#ear,#pee,#vomit,#belly,#diarrhea,#diseaseTime,#kind,#age,#weight,#disease,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
         $('#start').button('reset');
     }
 );

var postSave = [];
function post( myname, params) {
   var hiddenField = document.createElement("input");
   hiddenField.setAttribute("type", "hidden");
   hiddenField.setAttribute("name", myname);
   hiddenField.setAttribute("value", params);
   form.appendChild(hiddenField);
   postSave.push(myname);
   postSave[myname] = params;
}

function printPostSave( id ){
    if(postSave['skin'] != undefined){
        $('#'+id).append('您的'+postSave['kind']+'具有'+postSave['skin']+'等問題');
    }
}

var form = document.createElement("form");
form.setAttribute("method", "POST");
form.setAttribute("action", "http://pmck.comlu.com/pmck.php");
form.setAttribute("class", "form");
form.setAttribute("role", "form");
form.setAttribute("data-toggle", "validator");

function addFormInput(formLabel, value, regex){
    var formGroupDiv = document.createElement("div");
    formGroupDiv.setAttribute("class","form-group");
    formGroupDiv.setAttribute("style","height: 50px;");

    var visibilityField = document.createElement("input");
    visibilityField.setAttribute("name", value);
    visibilityField.setAttribute("type", "text");
    visibilityField.setAttribute("class", "form-control");
    visibilityField.setAttribute("placeholder", value);
    visibilityField.setAttribute("pattern", regex);
    visibilityField.setAttribute("required", "required");

    form.appendChild(formGroupDiv);
    formGroupDiv.appendChild(visibilityField);
    document.getElementById("ans").appendChild(form);
}
function addCheckBox(label){
    var t = document.createTextNode(label);
    var formGroupDiv = document.createElement("div");
    formGroupDiv.setAttribute("class","checkbox");
    formGroupDiv.setAttribute("style","height: 50px;font-size: 18px;");

    var visibilityField = document.createElement("input");
    visibilityField.setAttribute("type", "checkbox");
    visibilityField.setAttribute("name", label);
    visibilityField.setAttribute("value", "yes");

    form.appendChild(formGroupDiv);
    formGroupDiv.appendChild(visibilityField);
    formGroupDiv.appendChild(t);
    document.getElementById("ans").appendChild(form);
}


$(function(){
    addFormInput('姓名：', '姓名','[^A-Za-z0-9]+');
    addFormInput('手機：', '手機','(^09[0-9]{8}|^09[0-9]{2}-[0-9]{6})');
    addFormInput('信箱：', '信箱','.+@.+');
    //addFormInput('住址：', '住址','.+');
    addCheckBox("其他醫院醫療效果不顯著");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    var t = document.createTextNode("聯絡我們");
    btn.appendChild(t);
    form.appendChild(btn);
    document.getElementById("ans").appendChild(form);
});
