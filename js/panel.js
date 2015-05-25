$(window).ready(
        function(){
            $(".panel-body").hide();
            $(".panel-footer").hide();
        });

$(".panel").click(
        function(){
            $(".panel-body",this).slideDown();
            $(".panel-footer",this).slideDown();
        });
