$define('index', ['data', function(data) {
  var indexes = new dictionary();
  data.forEach(function(item) {
    var keys = item.keys.split(',');
    keys = trimStringArray(keys);
    item.keyArray = keys;

    keys.forEach(function(key) {
      // key = key.trim();
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

  return {
    indexes: indexes
  };

  function index01(key) {
    this.key = key;
    this.keys = [];
    this.datas = [];
    this.urls = [];
  }

  function addIndex(ch, key, item) {
    if (!indexes.exist(ch)) {
      indexes.add(ch, new index01(ch));
    }

    var index = indexes.get(ch);

    // todo: replace includes
    index.keys.includes(key) || index.keys.push(key);
    if (!index.urls.includes(item.url)) {
      index.urls.push(item.url);
      index.datas.push(item);
    }

  }

  function trimStringArray(arr) {
    if (!isArray(arr)) return;
    return arr.map(function(item) {
      var val = item.trim();
      if (val !== '')
        return val;
    });
  }

  var next = 0;
  function nextId() {
    return next++;
  }

  function pre() {
    return data.map(function(item) {
      var id = nextId();
      item.id = id;
      var obj = createMap();
      obj[id] = item;
      return obj;
    });
  }

}]);

$define('search', ['index', function(index) {
  return {
    search: function(txt) {
      var d1 = Date.now();
      var ind = index.indexes.get(txt);
      var seconds = Date.now() - d1;
      this.$share.modules.forEach(function(module) {
        isFunction(module.render) && module.render(ind, seconds);
      });
      return ind;
    }
  };

  function parse(txt) {
    return [txt];
  }

  function merge(arr) {
    return arr;
  }
}]);
