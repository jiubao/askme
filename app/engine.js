$define('index', ['data', function(data) {
  var indexes = new dictionary();
  data.forEach(function(item) {
    var keys = item.keys.split(',');
    keys.forEach(function(key) {
      key = key.trim();
      key.split('').forEach(function(ch) {
        if (!indexes.exist(ch)) {
          indexes.add(ch, new index01(ch));
        }

        var index = indexes.get(ch);
        index.keys.includes(key) || index.keys.push(key);
        index.urls.includes(item.url) || index.urls.push(item.url);

      });
    })
  });

  return {index: indexes};

  function index01(key) {
    this.key = key;
    this.keys = [];
    this.urls = [];
  }
}]);



function dictionary() {}

dictionary.prototype = {
    get: function(key) {
        return this[key];
    },
    add: function(key, value) {
        this[key] = value;
        return this;
    },
    exist: function(key) {
        return !isUndefined(this[key]);
    },
    array: function() {
        var keys = Object.keys(this);
        return keys.map(function(key) {
            return this[key];
        });
    },
    iterate: function(fn) {
        for(var key in this) {
            if (this.hasOwnProperty(key)) {
                fn.call(null, this[key], key, this);
            }
        }
    }
    // remove: function(key) {
    //     var value = this[key];
    //     delete this[key];
    //     return value;
    // }
};
