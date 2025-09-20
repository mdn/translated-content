---
title: Boolean.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`valueOf()`** は {{jsxref("Boolean")}} 値のメソッドで、 {{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。

{{InteractiveExample("JavaScript デモ: Boolean.prototype.valueOf()")}}

```js interactive-example
const x = new Boolean();

console.log(x.valueOf());
// 予想される結果: false

const y = new Boolean("Mozilla");

console.log(y.valueOf());
// 予想される結果: true
```

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

指定された {{jsxref("Boolean")}} オブジェクトのプリミティブ値です。

## 解説

`valueOf()` は {{jsxref("Boolean")}} のメソッドで、 `Boolean` オブジェクトのプリミティブ値または論理値データ型としての `Boolean` リテラルを返します。

このメソッドはたいてい JavaScript によって内部的に呼び出され、コードで明示的に呼び出されることはありません。

## 例

### `valueOf()` の使用

```js
const x = new Boolean();
const myVar = x.valueOf(); // false を myVar に代入
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
