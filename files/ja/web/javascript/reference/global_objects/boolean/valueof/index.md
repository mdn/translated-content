---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、{{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## 構文

```js
valueOf();
```

### 返値

この {{jsxref("Boolean")}} オブジェクトのプリミティブ値です。

## 解説

`valueOf()` は {{jsxref("Boolean")}} のメソッドで、 `Boolean` オブジェクトのプリミティブ値または論理値データ型としての `Boolean` リテラルを返します。

このメソッドはたいてい JavaScript によって内部的に呼び出され、コードで明示的に呼び出されることはありません。

## 例

### `valueOf()` の使用

```js
x = new Boolean();
myVar = x.valueOf(); // false を myVar に代入
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
