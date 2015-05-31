(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61390412-1', 'auto');
ga('send', 'pageview');
window.fbAsyncInit = function() {
   FB.init({
appId      : '439749989534358',
xfbml      : true,
version    : 'v2.3'
});
};

function myScroll(id){
    $('html,body').animate(
            {scrollTop: $("#"+id).offset().top-50},
            'slow'
            )
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


 $(document).ready(
     function(){
         $('#start,#breath,#bone,#ear,#pee,#vomit,#belly,#diarrhea,#diseaseTime,#kind,#age,#weight,#disease,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
     }
 );
 $(window).load(
     function(){
         $('#start,#breath,#bone,#ear,#pee,#vomit,#belly,#diarrhea,#diseaseTime,#kind,#age,#weight,#disease,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
         $(".loader").fadeOut("slow");
         $("#start").fadeIn("slow");
     }
 );

function post( myname, params) {
   var hiddenField = document.createElement("input");
   hiddenField.setAttribute("type", "hidden");
   hiddenField.setAttribute("name", myname);
   hiddenField.setAttribute("value", params);
   form.appendChild(hiddenField);
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

    form.appendChild(formGroupDiv);
    formGroupDiv.appendChild(visibilityField);
    document.getElementById("ans").appendChild(form);
}


