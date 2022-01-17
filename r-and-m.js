$(document).ready(function(){
  animateDiv();
  
});

$(function() {
    $(".blob").on({
      mouseover: function() {
        $(this).css({
          left: (Math.random() * 100) + "px",
          top: (Math.random() * 100) + "px",
        });
      }
    });
  });


  var wubalubaAudio = new Audio();
  wubalubaAudio.src = "./resources/sound/wubaluba.mp3"

  var yesAudio = new Audio();
  yesAudio.src = "./resources/sound/yesshort.mp3"

  var whoTheFuckAreYouAudio = new Audio();
  whoTheFuckAreYouAudio.src = "./resources/sound/whothefuck.mp3";

  var heyLilBuddyAudio = new Audio();
  heyLilBuddyAudio.src = "./resources/sound/heylilbuddy.mp3";

  var fart01Audio = new Audio();
  fart01Audio.src = "./resources/sound/fart01.mp3"

  var fart02Audio = new Audio();
  fart02Audio.src = "./resources/sound/fart02.mp3"

  var fart03Audio = new Audio();
  fart03Audio.src = "./resources/sound/fart03.mp3"

  var fart04Audio = new Audio();
  fart04Audio.src = "./resources/sound/fart04.mp3"

  var fart05Audio = new Audio();
  fart05Audio.src = "./resources/sound/fart05.mp3"

  var fart06Audio = new Audio();
  fart06Audio.src = "./resources/sound/fart06.mp3"

  var fart07Audio = new Audio();
  fart07Audio.src = "./resources/sound/fart07.mp3"

  var fart08Audio = new Audio();
  fart08Audio.src = "./resources/sound/fart08.mp3"

  var glower = $('#travelOption');
  window.setInterval(function() {  
      glower.toggleClass('active');
  }, 1000);

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.rickbot').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.rickbot').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

animateDiv();

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}