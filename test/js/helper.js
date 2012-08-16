(function () {
  var expected = [
    / /,
    /s1/,
    /s2/,
    /s3/,
    /s4/,
    /s_cb/,
    /p1|p2|p3|p4/,
    /p1|p2|p3|p4/,
    /p1|p2|p3|p4/,
    /p1|p2|p3|p4/,
    /p_cb/
  ];
  var uls, results;
  uls = document.getElementsByTagName('ul');
  for ( var i = uls.length; i--; ) {
    if ( uls[ i ].className.match( /results/ )) {
      results = uls[ i ];
    }
  }

  window.print = function ( message, id ) {
    var node = document.createElement( 'li' );
    node.innerHTML = message;
    node.id = id;
    results.appendChild( node );
  };

  window.test = function () {
    var lis = results.children;
    for ( var i = 1; i < lis.length; i++ ) {
      // Handle undefined
      if ( !lis[ i ].id ) { lis[ i ].style.backgroundColor = '#ff0077'; }
      lis[ i ].style.backgroundColor = lis[ i ].id.match( expected[ i ]) ? '#aaee22' : '#ff0077';
    }
  };
})();
