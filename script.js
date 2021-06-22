
$(".baner_two").hover(function(){
  $(".picture").css({"opacity":"1","transition-duration":"3s"})
}, function(){
  $(".picture").css({"opacity":"0","transition-duration":"3s"})
});
var w = $(window).width(); // Получаем ширину окна
    if (w >= 1920) { // Если ширина окна меньше, либо равна 600
      // $("body").css({"background-color":"red"})
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-27.1vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom": "13.5vw", "left": "30.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"36vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"34.1vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"36.1vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"34.95vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"44.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-26.45vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","transition-duration":"3s"});
        $(".sad").css({"height":"100%","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"13.2vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"37vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"38vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"44vw","transition-duration":"3s"});
      });
    }
    else{
    if (w >= 1880) { // Если ширина окна меньше, либо равна 600
      // $("body").css({"background-color":"yellow"})
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-27.6vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"8.5vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom": "14vw", "left": "30.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"36.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"34.6vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"36.6vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"35.45vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"45.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-27.05vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"4vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"8vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"13.55vw","left":"28.9vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"34vw","left":"17vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"34vw","right":"3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"37vw","left":"14vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"38vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"45vw","width":"12%","right":"29vw","transition-duration":"3s"});
      });
    }
    else{
    if (w >= 1680) { // Если ширина окна меньше, либо равна 600
      // $("body").css({"background-color":"blue"})
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-30.85vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"15.75vw","left":"32.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"41.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"39.3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"41.7vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"40.3vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"51.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-30.25vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"15.2vw","left":"33.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"39vw","left":"20vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"38vw","right":"3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"42vw","left":"17vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"42vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"50.5vw","width":"12%","right":"33vw","transition-duration":"3s"});
      });
  }
  else{
  if (w >= 1640) { // Если ширина окна меньше, либо равна 600
    // $("body").css({"background-color":"yellow"})
    $(".baner_one").hover(function(){
      $(".girl").css({"height":"102%","top":"-31.6vw","transition-duration":"3s"});
      $(".sea").css({"height":"102%","transition-duration":"3s"});
      $(".reka").css({"height":"102%","transition-duration":"3s"});
      $(".sad").css({"height":"102%","right":"10vw","transition-duration":"3s"});
      $(".city").css({"height":"102%","bottom":"15.8vw","left":"35vw","transition-duration":"3s"});
      $(".text1").css({"opacity":"1","bottom":"42.5vw","transition-duration":"2s"});
      $(".text2").css({"opacity":"1","bottom":"40.3vw","transition-duration":"2s"});
      $(".text3").css({"opacity":"1","bottom":"42.7vw","transition-duration":"2s"});
      $(".text4").css({"opacity":"1","bottom":"41.3vw","transition-duration":"2s"});
      $(".logo").css({"bottom":"52.5vw","transition-duration":"3s"});
    }, function(){
      $(".girl").css({"height":"100%","top":"-31vw","transition-duration":"3s"})
      $(".sea").css({"height":"100%","transition-duration":"3s"});
      $(".reka").css({"height":"100%","right":"5vw","transition-duration":"3s"});
      $(".sad").css({"height":"100%","right":"10vw","transition-duration":"3s"});
      $(".city").css({"height":"100%","bottom":"15.5vw","left":"33.3vw","transition-duration":"3s"});
      $(".text1").css({"opacity":"0","bottom":"39vw","left":"20vw","transition-duration":"2s"});
      $(".text2").css({"opacity":"0","bottom":"38vw","right":"3vw","transition-duration":"2s"});
      $(".text3").css({"opacity":"0","bottom":"42vw","left":"17vw","transition-duration":"2s"});
      $(".text4").css({"opacity":"0","bottom":"42vw","left":"0vw","transition-duration":"2s"});
      $(".logo").css({"bottom":"52vw","width":"12%","right":"33vw","transition-duration":"3s"});
    });
  }
  else{
  if (w >= 1366) { // Если ширина окна меньше, либо равна 600
    // $("body").css({"background-color":"black"})
    $(".baner_one").hover(function(){
      $(".girl").css({"height":"102%","top":"-38vw","transition-duration":"3s"});
      $(".sea").css({"height":"102%","transition-duration":"3s"});
      $(".reka").css({"height":"102%","transition-duration":"3s"});
      $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
      $(".city").css({"height":"102%","bottom":"19vw","left":"42.3vw","transition-duration":"3s"});
      $(".text1").css({"opacity":"1","bottom":"50.5vw","transition-duration":"2s"});
      $(".text2").css({"opacity":"1","bottom":"47.7vw","transition-duration":"2s"});
      $(".text3").css({"opacity":"1","bottom":"50.5vw","transition-duration":"2s"});
      $(".text4").css({"opacity":"1","bottom":"48.8vw","transition-duration":"2s"});
      $(".logo").css({"bottom":"63.5vw","transition-duration":"3s"});
    }, function(){
      $(".girl").css({"height":"100%","top":"-37.21vw","transition-duration":"3s"})
      $(".sea").css({"height":"100%","transition-duration":"3s"});
      $(".reka").css({"height":"100%","right":"5.4vw","transition-duration":"3s"});
      $(".sad").css({"height":"100%","right":"11vw","transition-duration":"3s"});
      $(".city").css({"height":"100%","bottom":"18.6vw","left":"40.3vw","transition-duration":"3s"});
      $(".text1").css({"opacity":"0","bottom":"48vw","left":"24vw","transition-duration":"2s"});
      $(".text2").css({"opacity":"0","bottom":"47vw","right":"4vw","transition-duration":"2s"});
      $(".text3").css({"opacity":"0","bottom":"52vw","left":"20vw","transition-duration":"2s"});
      $(".text4").css({"opacity":"0","bottom":"53vw","left":"0vw","transition-duration":"2s"});
      $(".logo").css({"bottom":"62.5vw","width":"12%","right":"41vw","transition-duration":"3s"});
    });
   }
   else{
   if (w >= 1326) { // Если ширина окна меньше, либо равна 600
     // $("body").css({"background-color":"black"})
     $(".baner_one").hover(function(){
       $(".girl").css({"height":"102%","top":"-39.1vw","transition-duration":"3s"});
       $(".sea").css({"height":"102%","transition-duration":"3s"});
       $(".reka").css({"height":"102%","transition-duration":"3s"});
       $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
       $(".city").css({"height":"102%","bottom":"19.9vw","left":"44.3vw","transition-duration":"3s"});
       $(".text1").css({"opacity":"1","bottom":"52.5vw","transition-duration":"2s"});
       $(".text2").css({"opacity":"1","bottom":"49.7vw","transition-duration":"2s"});
       $(".text3").css({"opacity":"1","bottom":"52.5vw","transition-duration":"2s"});
       $(".text4").css({"opacity":"1","bottom":"50.8vw","transition-duration":"2s"});
       $(".logo").css({"bottom":"65vw","transition-duration":"3s"});
     }, function(){
       $(".girl").css({"height":"100%","top":"-38.3vw","transition-duration":"3s"})
       $(".sea").css({"height":"100%","transition-duration":"3s"});
       $(".reka").css({"height":"100%","right":"5.4vw","transition-duration":"3s"});
       $(".sad").css({"height":"100%","right":"11vw","transition-duration":"3s"});
       $(".city").css({"height":"100%","bottom":"19.2vw","left":"45.3vw","transition-duration":"3s"});
       $(".text1").css({"opacity":"0","bottom":"48vw","left":"24vw","transition-duration":"2s"});
       $(".text2").css({"opacity":"0","bottom":"47vw","right":"4vw","transition-duration":"2s"});
       $(".text3").css({"opacity":"0","bottom":"52vw","left":"20vw","transition-duration":"2s"});
       $(".text4").css({"opacity":"0","bottom":"53vw","left":"0vw","transition-duration":"2s"});
       $(".logo").css({"bottom":"64vw","width":"12%","right":"41vw","transition-duration":"3s"});
     });
    }
   else{
   if (w >= 1280) { // Если ширина окна меньше, либо равна 600
     // $("body").css({"background-color":"green"})
     $(".baner_one").hover(function(){
       $(".girl").css({"height":"102%","top":"-40.5vw","transition-duration":"3s"});
       $(".sea").css({"height":"102%","transition-duration":"3s"});
       $(".reka").css({"height":"102%","transition-duration":"3s"});
       $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
       $(".city").css({"height":"102%","bottom":"20.4vw","left":"42.3vw","transition-duration":"3s"});
       $(".text1").css({"opacity":"1","bottom":"54.5vw","left":"26vw","transition-duration":"2s"});
       $(".text2").css({"opacity":"1","bottom":"51.5vw","transition-duration":"2s"});
       $(".text3").css({"opacity":"1","bottom":"54.5vw","left":"22vw","transition-duration":"2s"});
       $(".text4").css({"opacity":"1","bottom":"52.6vw","transition-duration":"2s"});
       $(".logo").css({"bottom":"67.5vw","transition-duration":"3s"});
     }, function(){
       $(".girl").css({"height":"100%","top":"-39.69vw","transition-duration":"3s"})
       $(".sea").css({"height":"100%","transition-duration":"3s"});
       $(".reka").css({"height":"100%","right":"5.6vw","transition-duration":"3s"});
       $(".sad").css({"height":"100%","right":"11.65vw","transition-duration":"3s"});
       $(".city").css({"height":"100%","bottom":"19.9vw","left":"42.4vw","transition-duration":"3s"});
       $(".text1").css({"opacity":"0","bottom":"51vw","left":"24vw","transition-duration":"2s"});
       $(".text2").css({"opacity":"0","bottom":"50vw","right":"4vw","transition-duration":"2s"});
       $(".text3").css({"opacity":"0","bottom":"55vw","left":"20vw","transition-duration":"2s"});
       $(".text4").css({"opacity":"0","bottom":"56vw","left":"0vw","transition-duration":"2s"});
       $(".logo").css({"bottom":"66.5vw","width":"12%","right":"44vw","transition-duration":"3s"});
       });
     }
    else{
    if (w >= 1240) { // Если ширина окна меньше, либо равна 600
      // $("body").css({"background-color":"green"})
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-42vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"21.4vw","left":"46.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"56.5vw","left":"26vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"53.5vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"56.5vw","left":"22vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"54.6vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"69vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-40.95vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5.6vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"11.65vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"20.5vw","left":"48vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"51vw","left":"24vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"50vw","right":"4vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"55vw","left":"20vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"56vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"68.5vw","width":"12%","right":"44vw","transition-duration":"3s"});
        });
       }
      }
     }
    }
   }
  }
 }
}



$(window).resize(function () {
    var widthWind = $(this).width();
    if (widthWind >= 1920){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-27.1vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom": "13.5vw", "left": "30.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"36vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"34.1vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"36.1vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"34.95vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"44.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-26.45vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","transition-duration":"3s"});
        $(".sad").css({"height":"100%","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"13.2vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"37vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"38vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"44vw","transition-duration":"3s"});
      });
    }
    if (widthWind <= 1880){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-27.6vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"8.5vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom": "14vw", "left": "30.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"36.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"34.6vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"36.6vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"35.45vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"45.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-27.05vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"4vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"8vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"13.55vw","left":"28.9vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"34vw","left":"17vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"34vw","right":"3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"37vw","left":"14vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"38vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"45vw","width":"12%","right":"29vw","transition-duration":"3s"});
      });
    }
    if(widthWind <= 1680){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-30.85vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"15.75vw","left":"32.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"41.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"39.3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"41.7vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"40.3vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"51.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-30.25vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"15.2vw","left":"33.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"39vw","left":"20vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"38vw","right":"3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"42vw","left":"17vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"42vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"50.5vw","width":"12%","right":"33vw","transition-duration":"3s"});
      });
    }
    if(widthWind <= 1640){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-31.6vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"15.8vw","left":"35vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"42.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"40.3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"42.7vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"41.3vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"52.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-31vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"10vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"15.5vw","left":"33.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"39vw","left":"20vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"38vw","right":"3vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"42vw","left":"17vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"42vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"52vw","width":"12%","right":"33vw","transition-duration":"3s"});
      });
    }
    if(widthWind <= 1366){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-38vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"19vw","left":"42.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"50.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"47.7vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"50.5vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"48.8vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"63.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-37.21vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5.4vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"11vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"18.6vw","left":"40.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"48vw","left":"24vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"47vw","right":"4vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"52vw","left":"20vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"53vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"62.5vw","width":"12%","right":"41vw","transition-duration":"3s"});
      });
    }
    if(widthWind <= 1326){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-39.1vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"19.9vw","left":"44.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"52.5vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"49.7vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"52.5vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"50.8vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"65vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-38.3vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5.4vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"11vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"19.2vw","left":"45.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"48vw","left":"24vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"47vw","right":"4vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"52vw","left":"20vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"53vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"64vw","width":"12%","right":"41vw","transition-duration":"3s"});
      });
    }
    if(widthWind <= 1280){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-40.5vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"20.4vw","left":"42.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"54.5vw","left":"26vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"51.5vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"54.5vw","left":"22vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"52.6vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"67.5vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-39.69vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5.6vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"11.65vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"19.9vw","left":"42.4vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"51vw","left":"24vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"50vw","right":"4vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"55vw","left":"20vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"56vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"66.5vw","width":"12%","right":"44vw","transition-duration":"3s"});
        });
    }
    if(widthWind <= 1240){
      $(".baner_one").hover(function(){
        $(".girl").css({"height":"102%","top":"-42vw","transition-duration":"3s"});
        $(".sea").css({"height":"102%","transition-duration":"3s"});
        $(".reka").css({"height":"102%","transition-duration":"3s"});
        $(".sad").css({"height":"102%","right":"13.3vw","transition-duration":"3s"});
        $(".city").css({"height":"102%","bottom":"21.4vw","left":"46.3vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"1","bottom":"56.5vw","left":"26vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"1","bottom":"53.5vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"1","bottom":"56.5vw","left":"22vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"1","bottom":"54.6vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"69vw","transition-duration":"3s"});
      }, function(){
        $(".girl").css({"height":"100%","top":"-40.95vw","transition-duration":"3s"})
        $(".sea").css({"height":"100%","transition-duration":"3s"});
        $(".reka").css({"height":"100%","right":"5.6vw","transition-duration":"3s"});
        $(".sad").css({"height":"100%","right":"11.65vw","transition-duration":"3s"});
        $(".city").css({"height":"100%","bottom":"20.5vw","left":"48vw","transition-duration":"3s"});
        $(".text1").css({"opacity":"0","bottom":"51vw","left":"24vw","transition-duration":"2s"});
        $(".text2").css({"opacity":"0","bottom":"50vw","right":"4vw","transition-duration":"2s"});
        $(".text3").css({"opacity":"0","bottom":"55vw","left":"20vw","transition-duration":"2s"});
        $(".text4").css({"opacity":"0","bottom":"56vw","left":"0vw","transition-duration":"2s"});
        $(".logo").css({"bottom":"68.5vw","width":"12%","right":"44vw","transition-duration":"3s"});
        });
    }
  }
);
// var w = screen.width;
// if(w>='1920'){
//   $("body").css({"background-clor":"blue"});
// $(".baner_one").hover(function(){
//   $(".girl").css({"height":"102%","top":"-27.1vw","transition-duration":"3s"});
//   $(".sea").css({"height":"102%","transition-duration":"3s"});
//   $(".reka").css({"height":"102%","transition-duration":"3s"});
//   $(".sad").css({"height":"102%","transition-duration":"3s"});
//   $(".city").css({"height":"102%","bottom": "13.5vw", "left": "30.3vw","transition-duration":"3s"});
//   $(".text1").css({"opacity":"1","bottom":"36vw","transition-duration":"2s"});
//   $(".text2").css({"opacity":"1","bottom":"34.1vw","transition-duration":"2s"});
//   $(".text3").css({"opacity":"1","bottom":"36.1vw","transition-duration":"2s"});
//   $(".text4").css({"opacity":"1","bottom":"34.95vw","transition-duration":"2s"});
//   $(".logo").css({"bottom":"44.5vw","transition-duration":"3s"});
// }, function(){
//   $(".girl").css({"height":"100%","top":"-26.45vw","transition-duration":"3s"})
//   $(".sea").css({"height":"100%","transition-duration":"3s"});
//   $(".reka").css({"height":"100%","transition-duration":"3s"});
//   $(".sad").css({"height":"100%","transition-duration":"3s"});
//   $(".city").css({"height":"100%","bottom":"13.2vw","transition-duration":"3s"});
//   $(".text1").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
//   $(".text2").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
//   $(".text3").css({"opacity":"0","bottom":"37vw","transition-duration":"2s"});
//   $(".text4").css({"opacity":"0","bottom":"38vw","transition-duration":"2s"});
//   $(".logo").css({"bottom":"44vw","transition-duration":"3s"});
// });
// }
// else{
// if(w>='1680'){
//   $(".baner_one").hover(function(){
//     $(".girl").css({"height":"%","top":"-27.19vw","transition-duration":"3s"});
//     $(".sea").css({"height":"102%","transition-duration":"3s"});
//     $(".reka").css({"height":"102%","transition-duration":"3s"});
//     $(".sad").css({"height":"102%", "right":"8.7vw","transition-duration":"3s"});
//     $(".city").css({"height":"102%","bottom": "13.8vw", "left": "30.3vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"1","bottom":"36vw","transition-duration":"2s"});
//     $(".text2").css({"opacity":"1","bottom":"34.1vw","transition-duration":"2s"});
//     $(".text3").css({"opacity":"1","bottom":"36.1vw","transition-duration":"2s"});
//     $(".text4").css({"opacity":"1","bottom":"34.95vw","transition-duration":"2s"});
//     $(".logo").css({"bottom":"44.5vw","transition-duration":"3s"});
//   }, function(){
//     $(".girl").css({"height":"100%","top":"-27.05vw","transition-duration":"3s"})
//     $(".sea").css({"height":"100%","transition-duration":"3s"});
//     $(".reka").css({"height":"100%","transition-duration":"3s"});
//     $(".sad").css({"height":"100%","transition-duration":"3s"});
//     $(".city").css({"height":"100%","bottom":"13.55vw","left":"28.9vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
//     $(".text2").css({"opacity":"0","bottom":"34vw","transition-duration":"2s"});
//     $(".text3").css({"opacity":"0","bottom":"37vw","transition-duration":"2s"});
//     $(".text4").css({"opacity":"0","bottom":"38vw","transition-duration":"2s"});
//     $(".logo").css({"bottom":"45vw","transition-duration":"3s"});
//   });
// }
// else{
// if(w>='1680'){
//   $(".baner_one").hover(function(){
//     $(".girl").css({"width":"62vw","top":"-32.5vw","left":"-1vw","transition-duration":"3s"})
//     $(".sea").css({"width":"15vw","top":"-0.1vw","left":"0vw","transition-duration":"3s"});
//     $(".reka").css({"width":"21vw","top":"0vw","left":"-5.3vw","transition-duration":"3s"});
//     $(".sad").css({"width":"21vw","top":"-0.1vw","left":"-12vw","transition-duration":"3s"});
//     $(".city").css({"width":"28vw","top":"-17.2vw","left":"35.1vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"1","top":"-44vw","left":"19.5vw","transition-duration":"2s"});
//     $(".text2").css({"opacity":"1","top":"-41.8vw","left":"-3vw","transition-duration":"2s"});
//     $(".text3").css({"opacity":"1","top":"-44vw","left":"16vw","transition-duration":"2s"});
//     $(".text4").css({"opacity":"1","top":"-42.6vw","left":"0vw","transition-duration":"2s"});
//   }, function(){
//     $(".girl").css({"width":"60vw","top":"-30.5vw","left":"-1vw","transition-duration":"3s"})
//     $(".sea").css({"width":"13.8vw","top":"-0.1vw","left":"0vw","transition-duration":"3s"});
//     $(".reka").css({"width":"19.3vw","top":"0vw","left":"-5.3vw","transition-duration":"3s"});
//     $(".sad").css({"width":"19.4vw","top":"0vw","left":"-12vw","transition-duration":"3s"});
//     $(".city").css({"width":"26.7vw","top":"-15.2vw","left":"33.1vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"0","top":"-41vw","left":"19.5vw","transition-duration":"2s"});
//     $(".text2").css({"opacity":"0","top":"-40.8vw","left":"-3vw","transition-duration":"2s"});
//     $(".text3").css({"opacity":"0","top":"-45vw","left":"16vw","transition-duration":"2s"});
//     $(".text4").css({"opacity":"0","top":"-45.4vw","left":"-1vw","transition-duration":"2s"});
//   });
// }
// else{
// if(w>='1366'){
//   $(".baner_one").hover(function(){
//     $(".girl").css({"width":"77vw","top":"-39vw","left":"-1vw","transition-duration":"3s"});
//     $(".sea").css({"width":"17.9vw","top":"-0.3vw","left":"-0.5vw","transition-duration":"3s"});
//     $(".reka").css({"width":"24.7vw","top":"-0.5vw","left":"-7vw","transition-duration":"3s"});
//     $(".sad").css({"width":"25vw","top":"-0.5vw","left":"-14vw","transition-duration":"3s"});
//     $(".city").css({"width":"33.7vw","top":"-20vw","left":"45vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"1","top":"-52.7vw","left":"24vw","transition-duration":"3s"});
//     $(".text2").css({"opacity":"1","top":"-50vw","left":"-4.6vw","transition-duration":"3s"});
//     $(".text3").css({"opacity":"1","top":"-52.8vw","left":"19vw","transition-duration":"3s"});
//     $(".text4").css({"opacity":"1","top":"-51.2vw","left":"0vw","transition-duration":"3s"});
//   }, function(){
//     $(".girl").css({"width":"75vw","top":"-37.7vw","left":"-1vw","transition-duration":"3s"})
//     $(".sea").css({"width":"17vw","top":"0vw","left":"0vw","transition-duration":"3s"});
//     $(".reka").css({"width":"23.8vw","top":"0vw","left":"-5.3vw","transition-duration":"3s"});
//     $(".sad").css({"width":"24vw","top":"0vw","left":"-11vw","transition-duration":"3s"});
//     $(".city").css({"width":"32.7vw","top":"-18.7vw","left":"44.1vw","transition-duration":"3s"});
//     $(".text1").css({"opacity":"0","top":"-50vw","left":"24vw","transition-duration":"2s"});
//     $(".text2").css({"opacity":"0","top":"-50vw","left":"-4.6vw","transition-duration":"2s"});
//     $(".text3").css({"opacity":"0","top":"-55vw","left":"19vw","transition-duration":"2s"});
//     $(".text4").css({"opacity":"0","top":"-55vw","left":"0vw","transition-duration":"2s"});
//   });
//  }
//  else
//  {if (w >= '1280') {
//    $(".baner_one").hover(function(){
//      $(".girl").css({"width":"73vw","top":"-39.2vw","left":"-2vw","transition-duration":"3s"});
//      $(".sea").css({"width":"18vw","top":"-1vw","left":"-1vw","transition-duration":"3s"});
//      $(".reka").css({"width":"24vw","top":"-1vw","left":"-10vw","transition-duration":"3s"});
//      $(".sad").css({"width":"25vw","top":"-1vw","left":"-17vw","transition-duration":"3s"});
//      $(".city").css({"width":"33vw","top":"-20.2vw","left":"41vw","transition-duration":"3s"});
//      $(".text1").css({"opacity":"1","top":"-53vw","left":"23vw","transition-duration":"3s"});
//      $(".text2").css({"opacity":"1","top":"-50vw","left":"-7vw","transition-duration":"3s"});
//      $(".text3").css({"opacity":"1","top":"-53vw","left":"19vw","transition-duration":"3s"});
//      $(".text4").css({"opacity":"1","top":"-51.2vw","left":"-3vw","transition-duration":"3s"});
//    }, function(){
//      $(".girl").css({"width":"71vw","top":"-36.2vw","left":"0vw","transition-duration":"3s"})
//      $(".sea").css({"width":"16.5vw","top":"0vw","left":"0vw","transition-duration":"3s"});
//      $(".reka").css({"width":"22.8vw","top":"-0.3vw","left":"-7vw","transition-duration":"3s"});
//      $(".sad").css({"width":"23.3vw","top":"0vw","left":"-14vw","transition-duration":"3s"});
//      $(".city").css({"width":"31.7vw","top":"-18.2vw","left":"40.1vw","transition-duration":"3s"});
//      $(".text1").css({"opacity":"0","top":"-50vw","left":"23vw","transition-duration":"2s"});
//      $(".text2").css({"opacity":"0","top":"-50vw","left":"-7vw","transition-duration":"2s"});
//      $(".text3").css({"opacity":"0","top":"-56vw","left":"19vw","transition-duration":"2s"});
//      $(".text4").css({"opacity":"0","top":"-55vw","left":"-3vw","transition-duration":"2s"});
//    });
//  }
// }
// }
// }
// }
