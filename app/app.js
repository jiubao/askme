$define('input', ['index', function(engine) {
  var $input = $('#input');
  var $inputbox = $('.input-box');
  var $container = $('#inputContainer');
  var $document = $(document);

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
      var index = engine.search(text);
      g(index);
      return false;
      //to do: try to prevent event pop
    });

    $document.on('keydown', function(keyevent) {
      if (keyevent.keyCode === 27) {
        focus();
      }

    });

    focus();
  }

  function focus() {
    $input[0].focus();
  }

}]);


$define('list', function() {});

$define('statistic', function() {
  var tpl = $('#tpl-statistic').html();
  tpl = decodeEntities(tpl);
  var dom = $('#statistic');

  return {
    render: function(index, seconds) {
      var result = index ? html(index.datas.length, seconds) : '';
      dom.html(result);
    }
  };

  function html(count, seconds) {
    return ejs.render(tpl, new stat(count, seconds));
  }

  function stat(c, sec) {
    this.count = c;
    this.seconds = sec;
  }
});