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
    }).on('keydown', function(keyevent) {
      var code = keyevent.keyCode;
      if (code >= 48 && code <= 57 || code >= 65 && code <= 90) {
        $container.attr('class', 'detail');
      }
    });

    $input[0].focus();
  }

});



