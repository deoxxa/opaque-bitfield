opaque-bitfield
===============

A bitfield where you can't see the insides

Overview
--------

This is an implementation of a bitfield in JavaScript, for Node.JS. It's
designed for minimal implementation leakage so that I can implement any kind of
optimisations I like without breaking any consuming packages.

Right now the implementation is quite naiive, but I hope to improve it as time
goes on.

Usage
-----

```js
var Bitfield = require("opaque-bitfield");

var bf = new Bitfield();

bf.set(0, true);

console.log(bf.get(0));
```

API
---

### get

```js
Bitfield.get(n);
```

```js
var a = bf.get(0);
```

Arguments

* **n** - the index of the value you want to get

Return Value

`boolean value`

### set

```js
Bitfield.set(n, v);
```

```js
bf.set(0, true);
// field 0 is now true
```

Arguments

* **n** - the index of the value you want to set
* **v** - a boolean value

Return Value

`Bitfield self`

### toBuffer

```js
Bitfield.toBuffer(options);
```

```js
var buf = bf.toBuffer();
// buf is a binary representation of the bitfield's content
```

Arguments

* **options** - an object specifying options (so far unused)

Return Value

`Buffer content`

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
