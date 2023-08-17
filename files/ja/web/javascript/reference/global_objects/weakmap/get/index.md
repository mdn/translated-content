---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

**`get()`** メソッドは、`WeakMap` オブジェクトから指定された要素を返します。

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## 構文

```
wm.get(key);
```

### 引数

- `key`
  - : 必須。`WeakMap` オブジェクトから返す要素のキーです。

### 返値

指定されたキーと関連した要素を返します。キーが `WeakMap` オブジェクトに見つからない場合、 {{jsxref("undefined")}} を返します。

## 例

### get() メソッドの使用

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // "foo" を返す
wm.get("baz"); // undefined を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakMap.get")}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
