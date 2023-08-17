---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

**`set()`** メソッドは、指定されたキーと値をもつ新しい要素を `WeakMap` オブジェクトへ追加します。

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## 構文

```
wm.set(key, value);
```

### 引数

- `key`
  - : 必須です。 `object` である必要があります。 `WeakMap` オブジェクトに追加する要素のキーです。
- `value`
  - : 必須です。任意の値です。 `WeakMap` オブジェクトに追加する要素の値です。

### 返値

`WeakMap` オブジェクトです。

## 例

### set() メソッドの使用

```js
var wm = new WeakMap();
var obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakMap.set")}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
