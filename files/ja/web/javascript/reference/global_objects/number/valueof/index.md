---
title: Number.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`valueOf()`** は {{jsxref("Number")}} 値のメソッドで、この数値の値を返します。

{{InteractiveExample("JavaScript デモ: Number.prototype.valueOf()")}}

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// 予想される結果: "object"

const num = numObj.valueOf();
console.log(num);
// 予想される結果: 42

console.log(typeof num);
// 予想される結果: "number"
```

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

指定した {{jsxref("Number")}} オブジェクトのプリミティブ値を表した数値です。

## 解説

このメソッドは、通常は JavaScript によって内部的に呼び出されるものであり、ウェブのコード中で明示的に呼び出されることはありません。

## 例

### valueOf の使用

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
