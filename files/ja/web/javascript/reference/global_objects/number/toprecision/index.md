---
title: Number.prototype.toPrecision()
short-title: toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toPrecision()`** は {{jsxref("Number")}} 値のメソッドで、この数値を指定された有効桁数で表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Number.prototype.toPrecision()")}}

```js interactive-example
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// 予想される結果: "123.5"

console.log(precise(0.004));
// 予想される結果: "0.004000"

console.log(precise(1.23e5));
// 予想される結果: "1.230e+5"
```

## 構文

```js-nolint
toPrecision()
toPrecision(precision)
```

### 引数

- `precision` {{optional_inline}}
  - : 有効数字の数を指定する整数です。

### 返値

指定された数値を、指定された有効桁数で表します。指数が `precision` 以上または -6 未満の場合、科学記数法が使用されます。`precision` 引数が省略された場合、{{jsxref("Number.prototype.toString()")}} と同じ動作をします。

## 例外

- {{jsxref("RangeError")}}
  - : `precision` が `1` 以上 100 以下の範囲にない場合に発生します。
- {{jsxref("TypeError")}}
  - : これのメソッドが {{jsxref("Number")}} ではないオブジェクトに対して呼び出した場合、例外が発生します。

## 例

### `toPrecision` の使用

```js
// この数値は指数が 0 であるため、指数表記が使用されることはない
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

// この数値は指数が-4であるため、指数表記が使用されることはない
num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// この数値は指数が 3 であるため、精度が 4 未満の場合、指数表記を使用する
num = 1234.5;
console.log(num.toPrecision(1)); // '1e+3'
console.log(num.toPrecision(2)); // '1.2e+3'
console.log(num.toPrecision(6)); // '1234.50'

// この数値は指数が -7 であるため、常に指数表記を使用する
num = 0.00000012345;
console.log(num.toPrecision(1)); // '1e-7'
console.log(num.toPrecision(10)); // '1.234500000e-7'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
