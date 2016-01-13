$define('input', ['search', function(search) {
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
    }).one('keydown', function(keyevent) {
      // g('keydown');
      var code = keyevent.keyCode;
      if (code >= 48 && code <= 57 || code >= 65 && code <= 90) {
        $container.attr('class', 'detail');
      }
    }).on('keydown', function(keyevent) {
      // g('keypress');
      // todo: separate to keypress(chars) & keydown(back/delete)
      var key = event.keyCode;
      if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;
      var self = this;
      setTimeout(function() {
        if (isUndefined(self.value)) return;
        var text = self.value.toLowerCase();
        text === '' || search.search(text);
      }, 1);
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


$define('list', function() {
  var tpl = $('#tpl-list').html();
  tpl = decodeEntities(tpl);
  var dom = $('#list');
  return {
    render: function(index) {
      var html = index ? ejs.render(tpl, {results: index.datas}) : '';
      dom.html(html);
    }
  };
});

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

$define('autoComplete',['search',function(search){
  var tpl = $('#tpl-auto-complete').html();
  tpl = decodeEntities(tpl);
  var dom = $('#auto-complete');
  return {
    render:function(index){
      var html = index? ejs.render(tpl,{results:index.keys}):'';
      dom.html(html);
      $this = $(document.querySelectorAll('.auto-complete span'));
      $this.on('click',function(){
        var text = this.innerHTML;
        $('#input').val(text);
        search.search(text);
      });
    }
  };
}]);