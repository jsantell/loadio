Loadio
====== 

A small loader for asynchronously loading JS and CSS files independently, in series or parallel to prevent blocking
_v0.1.0_

Methods
---

* `load( url, callback )` loads a single JS/CSS file and fires the callback upon load
* `series([ urls ], callback )` loads an array of files one after the other with callback firing upon all files loaded
* `parallel([ urls ], callback )` loads an array of files in no order with callback firing upon all files loaded

Example
---

Load up your files. Note, CSS link nodes do not have an onload event, so they're considered loaded after DOM injection

```javascript
  Loadio.load( 'js/file.js', function () {
    console.log( 'file.js is loaded' );
  });

  Loadio.series([ 'js/1.js', 'js/2.js', 'js/3.js', function () {
    console.log( '1.js, 2.js, 3.js loaded in order' );
  });
  
  Loadio.parallel([ 'js/1.js', 'js/2.js', 'js/3.js', function () {
    console.log( '1.js, 2.js, 3.js loaded in no order' );
  });
```

Contributing
---
This project uses [smoosh](https://github.com/fat/smoosh) for compiling, linting.
