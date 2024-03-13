---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`toPrecision()`** メソッドは {{jsxref("Number")}} オブジェクトを指定された精度で表した文字列を返します。

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## 構文

```js-nolint
toPrecision()
toPrecision(precision)
```

### 引数

- `precision` {{optional_inline}}
  - : 有効数字の数を指定する整数です。

### 返値

{{jsxref("Number")}} オブジェクトを `precision` で指定された桁で概数化された、固定小数点数、または指数表記で表した文字列です。概数の表現方法については {{jsxref("Number.prototype.toFixed()")}} メソッドの説明を参照してください。それは `toPrecision()` にも適用されます。

引数 `precision` が省略された場合、 {{jsxref("Number.prototype.toString()")}} のように振舞います。 `precision` が整数の値ではない場合は、最も近い整数に概数化されます。

## 例外

- {{jsxref("RangeError")}}
  - : `precision` が `1` 以上 100 以下の範囲にない場合に発生します。

## 例

### `toPrecision` の使用

```js
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// なお、場合によっては指数表記が返されることがあります。
console.log((1234.5).toPrecision(2)); // '1.2e+3'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
