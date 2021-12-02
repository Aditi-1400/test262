// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.get
description: >
  Returns the value from the specified key. Key is a Symbol
info: |
  WeakMap.prototype.get ( key )

  4. Let entries be the List that is the value of M’s [[WeakMapData]] internal
  slot.
  5. If HasIdentity(_key_) is *false*, return *undefined*.
  6. Repeat for each Record {[[key]], [[value]]} p that is an element of
  entries,
    a. If p.[[key]] is not empty and SameValue(p.[[key]], key) is true, return
    p.[[value]].
  ...
features: [Symbol, WeakMap, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var foo = Symbol();
var bar = Symbol();
var baz = Symbol();
var map = new WeakMap([
  [foo, 0]
]);

assert.sameValue(map.get(foo), 0);

map.set(bar, 1);
assert.sameValue(map.get(bar), 1);

map.set(baz, 2);
assert.sameValue(map.get(baz), 2);
