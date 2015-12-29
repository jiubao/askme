var $injector = window.$j = window.$injector = createInjector();
var $define = $injector.define;

$define('enter', ['simple', function() {
  console.log("app running");
}]);

$define('simple', ['detail', function(detail) {
  var $sinput = $('#sinput');
  var $sinputContainer = $('.sinput');
  var $sbox = $('#sbox');

  init();
  return {};

  function init() {
    $sinput.on('focus', function() {
      $sinputContainer.addClass('inputFocus');
    }).on('blur', function() {
      $sinputContainer.removeClass('inputFocus');
    }).on('keydown', function() {
      hide();
      detail.show();
    });
  }

  function hide() {
    $sbox.css('display', 'none');
  }
}]);

$define('detail', function() {
  var $dbox = $('#dbox');
  return {
    show: function() {
      $dbox.css('display', 'block');
    }
  };
});



$(document).ready(function() {
  $injector.get('enter');
});