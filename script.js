

/*$(window).scroll(function(){
check_if_in_view();*/
$(document).ready(function(){
  

  $('.pen-v').click(function(){

    
    var desc = $(this).children("p").html();
    $('.brief').html(desc);
  });
});

  $(window).click(function(event){
var $box=$('i');
console.log(event.target.tagName);
if($box.is(event.target))
{


    $('.brief').show();

}
else
{
  $('.brief').hide();
  
}
//console.log(event.target.tagName);

  });
  
  





