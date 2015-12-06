

// Nice pretty landing smoothness        
$(document).ready(function() {
  TweenMax.staggerFrom(".tween", 1, {opacity:0, delay:1}, 1);
  TweenMax.to(".tween", 1, {opacity:1, delay:5});
});