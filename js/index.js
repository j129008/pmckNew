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

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&appId=439749989534358&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
     ansList.push(Ans);
 }

 $(document).ready(
     function(){
         $('#Q1,#Q1_2,#Q1_1,#Q2,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
     }
 );
 $(window).load(
     function(){
         $('#Q1_2,#Q1_1,#Q2,#eye,#cold,#skin,#pee,#bone,#belly,#ear,#userData').hide();
         $('#Q1').show();
     }
 );

function post(params) {

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    form.submit();
}

var form = document.createElement("form");
form.setAttribute("method", "POST");
form.setAttribute("action", "http://pmck.comlu.com/pmck.php");
form.setAttribute("class", "form-inline");
form.setAttribute("role", "form");

function addFormInput(formLabel, value){
    var formGroupDiv = document.createElement("div");
    formGroupDiv.setAttribute("class","form-group");
    formGroupDiv.setAttribute("style","height: 50px; width: 400px");

    var visibilityField = document.createElement("input");
    visibilityField.setAttribute("name", value);
    visibilityField.setAttribute("type", "text");
    visibilityField.setAttribute("class", "form-control");
    visibilityField.setAttribute("style", "width: 300px;");
    visibilityField.setAttribute("placeholder", value);

    form.appendChild(formGroupDiv);
    formGroupDiv.appendChild(visibilityField);
    document.getElementById("ans").appendChild(form);
}
