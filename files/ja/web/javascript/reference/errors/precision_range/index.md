---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
---

{{jsSidebar("Errors")}}

JavaScript の例外 "precision is out of range" は、 `toFixed` または `toPrecision` に 0 から 20 (または 21) までの範囲外の数値が渡された場合に発生します。

## エラーメッセージ

```js
RangeError: The number of fractional digits is out of range (Edge)
RangeError: The precision is out of range (Edge)
RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

これらのメソッドのいずれかで、 範囲外の精度を引数を使用しています。

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

これらのメソッドで許可されている範囲は、通常 0 と 20（または 21）の間です。しかし、ECMAScript 仕様では、この範囲の拡張が認められています。

| メソッド                                       | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 から 100             | 0 から 20          |
| {{jsxref("Number.prototype.toFixed()")}}       | -20 から 100           | 0 から 20          |
| {{jsxref("Number.prototype.toPrecision()")}}   | 1 から 100             | 1 から 21          |

## 例

### 無効なケース

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### 有効な場合

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 （この場合は丸めが発生することに注意してください）

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## 関連情報

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
