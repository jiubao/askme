$define('input', function() {
  var $input = $('#input');
  var $inputbox = $('.input-box');
  var $container = $('#inputContainer');

  init();
  return {};

  function init() {
    $input.on('focus', function() {
      $inputbox.addClass('input-focus');
    }).on('blur', function() {
      $inputbox.removeClass('input-focus');
    }).on('keydown', function() {
      $container.attr('class', 'detail');
    });
  }

});



