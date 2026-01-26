---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
---

{{JSRef}}

**`delete()`** メソッドは、`WeakSet` オブジェクトから指定された要素を取り除きます。

{{InteractiveExample("JavaScript デモ: WeakSet.Prototype.delete()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

weakset1.delete(object1);

console.log(weakset1.has(object1));
// Expected output: false
```

## 構文

```
ws.delete(value);
```

### 引数

- `value`
  - : 必須。 `WeakSet` オブジェクトから取り除くオブジェクトです。

### 返値

`WeakSet` オブジェクトの中の要素が正常に削除された場合は `true` を返します。 `value` が `WeakSet` の中で見つからなかったり、 `value` がオブジェクトではなかった場合は `false` を返します。

## 例

### delete() メソッドの使用

```js
var ws = new WeakSet();
var obj = {};

ws.add(window);

ws.delete(obj); // false を返します。削除する obj が見つかりません。
ws.delete(window); // true を返します。正常に削除されます。

ws.has(window); // false を返します。 window はもう WeakSet の中にないからです。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.clear()")}}
