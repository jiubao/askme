$(document).ready(function() {
  var $input = $('#input');
  var $inputContainer = $('.input');
  $input.on('focus', function() {
    $inputContainer.addClass('inputFocus');
  }).on('blur', function() {
    $inputContainer.removeClass('inputFocus');
  });
});