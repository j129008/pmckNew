$(window).ready(
        function(){
            $(".panel-body").hide();
            $(".panel-footer").hide();
            $('.panel-title').prepend('<span style="margin-right: 10px" class="caret"></span>');
        });

$(".panel").click(
        function(){
            var $t = $('.panel-body',this);
            if($t.is(':visible') == false){
                $(".panel-body",this).slideDown();
                $(".panel-footer",this).slideDown();
            }else{
                $(".panel-body",this).slideUp();
                $(".panel-footer",this).slideUp();
            }
        });
