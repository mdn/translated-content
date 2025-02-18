---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

**`has()`** メソッドは、特定のキーをもつ要素が `WeakMap` オブジェクト内に存在するかどうかを示す真偽値を返します。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");

console.log(weakmap1.has(object1));
// Expected output: true

console.log(weakmap1.has(object2));
// Expected output: false
```

## 構文

```
ws.has(key);
```

### 引数

- `key`
  - : `WeakMap` オブジェクトに存在するかテストする要素のキーです。

### 返値

- Boolean
  - : `WeakMap` オブジェクト内に特定のキーをもつ要素が存在していたら `true` を返します。さもなければ `false` を返します。

## 例

### has() メソッドの使用

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // true を返す
wm.has("baz"); // false を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
