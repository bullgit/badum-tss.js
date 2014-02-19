$(document).ready(function(){
  var $body = $('body');
  var sound = $('<audio autoplay> Your browser does not support the <code>audio</code> element. </audio>');
sound.attr('src', 'assets/src/badumtss.mp3');
$body.append(sound);
});