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

function addFormInput(formLabel, value, regex, len){
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
    visibilityField.setAttribute("maxlength", len);

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

function getip(json){
    post("ip",json.ip); // alerts the ip address
}

$(function(){
    addFormInput('姓名：', '姓名','[^A-Za-z0-9!@#$%^&\\*\\(\\)_+\\[\\]\\s\\.\\\\<>{},/?\\";\\\':-|~]+',4);
    addFormInput('手機：', '手機','^09(11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|52|53|54|55|56|58|60|61|63|66|68|70|71|72|73|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|03|05|09)[0-9]{6}',10);
    addFormInput('信箱：', '信箱','.+@.+',50);
    addFormInput('留言：', '留言','.+',1000);
    addCheckBox("是住在基隆地區的飼主");
    addCheckBox("接受過治療但效果不彰");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    var t = document.createTextNode("聯絡我們");
    btn.appendChild(t);
    form.appendChild(btn);
    document.getElementById("ans").appendChild(form);
});
