---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef}}

**`add()`** メソッドは、新しい要素を `WeakSet` オブジェクトの最後に追加します。

{{EmbedInteractiveExample("pages/js/weakset-prototype-add.html", "taller")}}

## 構文

```
ws.add(value);
```

### 引数

- `value`
  - : 必須。 `WeakSet` コレクションに追加する要素の値です。

### 返値

`WeakSet` オブジェクトです。

## 例

### add() の使用

```js
var ws = new WeakSet();

ws.add(window); //window オブジェクトを WeakSet へ追加

ws.has(window); // true

// WeakSet は引数としてオブジェクトのみを取ります。
ws.add(1);
// 結果は "TypeError: Invalid value used in weak set" (Chrome)
// "TypeError: 1 is not a non-null object" (Firefox)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
