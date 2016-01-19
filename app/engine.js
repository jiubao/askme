$define('index', ['data', function(data) {
  var indexes = new dictionary();
  var dataMap = Object.create(null);
  var next = 0;
  data.forEach(function(item) {
    var id = nextId();
    item.id = id;
    dataMap[id] = item;

    var keys = item.keys.trim().split(/,\s*/);
    item.keyArray = keys;

    keys.forEach(function(key) {
      var len = key.length
      for (var i = 1; i <= len; i++) {
        for (var j = 0, jj = len - i; j <= jj; j++) {
          addIndex(key.slice(j, j+i), key, item);
        }
      }
    })
  });

  return {
    indexes: indexes,
    search: search
    // joinData: innerjoinData,
    // joinKey: outerjoinKey
  };

  function search(txt) {
    var keys = parse(txt);

    var dataResult = null;
    var keyResult = null;

    keys.forEach(function(key){
      var ind = indexes.get(key);
      if (ind) {
        dataResult = innerjoinData(dataResult, ind.map);
        keyResult = outerjoinKey(keyResult, ind.keys);
      } else {
        dataResult = Object.create(null);
        keyResult = [];
      }
    });

    // todo: save txt: datas: keys to indexes
    return {datas: mapData(dataResult),keys: keyResult};
  }

  function index01(key) {
    this.key = key;
    this.keys = [];
    // this.datas = [];
    this.urls = [];
    this.map = {};
  }

  function addIndex(ch, key, item) {
    if (!indexes.exist(ch)) {
      indexes.add(ch, new index01(ch));
    }

    var index = indexes.get(ch);

    // todo: replace includes
    index.keys.includes(key) || index.keys.push(key);
    index.map[item.id] = true;
    if (item.code) {
      // index.codes = item.code;
    } else if (item.url && !index.urls.includes(item.url)) {
      index.urls.push(item.url);
      // index.datas.push(item);
    }
  }

  function mapData(keymap) {
    var result = [];
    for(var key in keymap) {
      result.push(dataMap[key]);
    }
    return result;
  }

  function innerjoinData(left, right) {
    if (left == null) return right;

    var result = Object.create(null);
    for(var key in left) {
      if (right[key])
        result[key] = true;
    }
    return result;
  }

  function outerjoinKey(left, right) {
    if (left === null) return right;

    var result = [];

    left.forEach(function(key){
      result.push(key);
    });

    right.forEach(function(key){
      if (!result.includes(key))
        result.push(key);
    });

    return result;
  }

  function parse(txt) {
    return txt.trim().split(/\s+/);
  }

}]);

$define('search', ['index', function(index) {
  return {
    search: function(txt) {
      var d1 = Date.now();
      var ind = index.search(txt);
      var seconds = Date.now() - d1;
      this.$share.modules.forEach(function(module) {
        isFunction(module.render) && module.render(ind, seconds);
      });
      return ind;
    }
  };

}]);
