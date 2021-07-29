$(document).ready(function(){
/**********************************************************************************************/
/**********************************************************************************************/
                                 /*comn jquery*/

                                 
/**********************************************************************************************/
                                /*start loadscreen*/

 $(".load-screen .spinner").fadeOut(100,function(){
        $(this).parent().fadeOut(100,function(){
            $("body").css("overflow","auto");
            $(this).remove();
            });
  });
                                /*End load screene*/    
/**********************************************************************************************/
                                /*Start arrow-top*/
var arrowtop=$(".arrow-top");
$(window).scroll(function(){
    if($(this).scrollTop()>=800 )
        arrowtop.show();
    else
    arrowtop.hide();
    });
arrowtop.click(function(){
    $("html").animate({scrollTop:0},1000);
    });
                                
                                /*End arrow-top*/
/**********************************************************************************************/
                                  /*Start option box*/ 
$(".option-box .gear-check").click(function(){
    $(".option-box .color-option").fadeToggle();
    });  
$(".option-box .color-option").mouseleave().click(function(){
    $(this).fadeToggle(1000);
    });  

var colorLi = $(".option-box .color-option ul li");    

colorLi.eq(0).css("background","#e21b17");
colorLi.eq(1).css("background","#2196f3");
colorLi.eq(2).css("background","#9c27b0");
colorLi.eq(3).css("background","#00bcd4");
       
colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    
    }); 
  
  
  
  
                                  /*End option box*/
/**********************************************************************************************/
/**********************************************************************************************/
                                  /*Start carousel*/ 
$(".carousel").carousel({
    interval:5000,/*de 34an waqt el7rka bta3 elswr*/
    });
  
                                  /*End carousel*/

/**********************************************************************************************/
/**********************************************************************************************/
$(".ask i").click(function(){
       $(this ).slideToggle(2000);
       });

});