$define('index', ['data', function(data) {
  var indexes = new dictionary();
  data.forEach(function(item) {
    var keys = item.keys.split(',');
    keys.forEach(function(key) {
      key = key.trim();
      // key.split('').forEach(function(ch) {
      //   addIndex(ch, key, item);
      // });

      var len = key.length
      for (var i = 1; i <= len; i++) {
        for (var j = 0, jj = len - i; j <= jj; j++) {
          addIndex(key.slice(j, j+i), key, item);
        }
      }
    })
  });

  return {index: indexes};

  function index01(key) {
    this.key = key;
    this.keys = [];
    this.urls = [];
  }

  function addIndex(ch, key, item) {
    if (!indexes.exist(ch)) {
      indexes.add(ch, new index01(ch));
    }

    var index = indexes.get(ch);
    index.keys.includes(key) || index.keys.push(key);
    index.urls.includes(item.url) || index.urls.push(item.url);

  }

}]);


