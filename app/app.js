$define('input', ['index', function(engine) {
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
    }).on('keydown', function(keyevent) {
      var ch = String.fromCharCode(keyevent.keyCode);
      var text = (this.value + '' + ch).trim().toLowerCase();
      if (text == '') return;
      var index = engine.index.get(text);
      g(index);
    });

    $input[0].focus();
  }

}]);


$define('list', function() {});

