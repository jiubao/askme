
(function(window) {
  var cache = [];

  var con = {
    log: function(element, event) {
      console.log(element);
      console.log(event);
    }
  };

  var factories = {
    // 'default': con,
    'console': con,
    'page': {}
  };

  var loggers = [];
  // var loggers = ['console'];

  function log(element, event) {
    if (!loggers) return;
    loggers.forEach(function(logger) {
      factories[logger].log(element, event);
    });
  }

  log.set = function(arr) {
    loggers = arr;
  };

  log.clear = function() {
    loggers = [];
  }

  log.addFactory = function(name, factory) {
    factories[name] = {log: factory};
  };

  window.$.log = log;
})(window);
