---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

**`delete()`** メソッドは、 {{jsxref("WeakMap")}} オブジェクトから指定された要素を削除します。

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
// Expected output: false
```

## 構文

```
wm.delete(key);
```

### 引数

- `key`
  - : `WeakMap` オブジェクトから削除する要素のキーです。

### 返値

`WeakMap` オブジェクト内の要素を削除するのに成功した場合、`true` を返します。`WeakMap` 内でキーが見つからなかったり、キーがオブジェクトでなかったりした場合、`false` を返します。

## 例

### delete() メソッドの使用

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // true を返す。削除に成功。

wm.has(window); // false を返す。 window はもう WeakMap に存在しない。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
