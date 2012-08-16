(function () {
  var Loader = {};

  Loader.parallel = function ( _scripts, callback ) {
    var
      scripts = isArray( _scripts ) ? _scripts : [ _scripts ],
      i = 0;
    for ( var j = scripts.length; j--; ) {
      loadScript( scripts[ j ], function () {
        if ( ++i === scripts.length ) { callback(); }
      });
    }
  };

  Loader.series = function ( _scripts, callback ) {
    var
      scripts = isArray( _scripts ) ? _scripts : [ _scripts ],
      i = 0;
    var callbackHelper = function () {
      if ( ++i < scripts.length ) {
        loadScript( scripts[ i ], callbackHelper );
      } else {
        callback();
      }
    };

    loadScript( scripts[ i ], callbackHelper );
  };

  function loadScript ( url, callback ) {
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback || '';
    document.getElementsByTagName('head')[0].appendChild( script );
  }

  function isArray ( obj ) {
    return Array.isArray ? Array.isArray( obj ) : toString.call( obj ) === '[object Array]';
  }

  window.Loader = Loader;

})();
