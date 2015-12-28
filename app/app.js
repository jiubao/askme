$(document).ready(function() {
  var $sinput = $('#sinput');
  var $sinputContainer = $('.sinput');
  var $sbox = $('#sbox');
  var $dbox = $('#dbox');
  $sinput.on('focus', function() {
    $sinputContainer.addClass('inputFocus');
  }).on('blur', function() {
    $sinputContainer.removeClass('inputFocus');
  }).on('keydown', function() {
    $sbox.css('display', 'none');
    $dbox.css('display', 'block');
  });
});