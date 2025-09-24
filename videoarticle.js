var thumbTitle = $(".thumb-title");
for (var i = 0; i<= thumbTitle.length; i++){
    if(thumbTitle[i].innerHTML.length > 50){
        var shortendTitle =thumbTitle[i].innerHTML.slice(0, 50);
        thumbTitle[i].innerHTML = shortendTitle.concat("...");
    }

}

$(document).ready(function(){
  $(".thumb-wrap").slice(0,32).show();
  $("#load-more").click(function(e){
    e.preventDefault();
    $(".thumb-wrap:hidden").slice(0,32).fadeIn("slow");
    // or make ajax call and append 
    
    if($(".thumb-wrap:hidden").length == 0){
       $("#load-more").fadeOut("slow");
      }
  });
})
