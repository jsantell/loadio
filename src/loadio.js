// loadio.js
// @jsantell, (c) 2012
// v0.1.0

(function () {
  var Loadio = {};

  Loadio.parallel = function ( _scripts, callback ) {
    var
      scripts = isArray( _scripts ) ? _scripts : [ _scripts ],
      i = 0;
    for ( var j = scripts.length; j--; ) {
      loadFile( scripts[ j ], function () {
        if ( ++i === scripts.length ) { callback(); }
      });
    }
  };

  Loadio.series = function ( _scripts, callback ) {
    var
      scripts = isArray( _scripts ) ? _scripts : [ _scripts ],
      i = 0;
    var callbackHelper = function () {
      if ( ++i < scripts.length ) {
        loadFile( scripts[ i ], callbackHelper );
      } else {
        callback();
      }
    };

    loadFile( scripts[ i ], callbackHelper );
  };

  Loadio.load = loadFile;

  Loadio.version = '0.1.0';

  function loadFile ( url, callback ) {
    var
      isStyle = !!url.match( /\.css\??.*$/ ),
      node = document.createElement( isStyle ? 'link' : 'script' );
    node.type = isStyle ? 'text/css' : 'text/javascript';
    node[ isStyle ? 'href' : 'src' ] = url;
    node.onload = callback || '';
    document.getElementsByTagName('head')[0].appendChild( node );
    isStyle && callback && callback();
  }

  function isArray ( obj ) {
    return Array.isArray ? Array.isArray( obj ) : toString.call( obj ) === '[object Array]';
  }

  window.Loadio = Loadio;

})();
