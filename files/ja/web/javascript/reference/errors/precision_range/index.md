---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "precision is out of range" は、`toExponential`, `toFixed`, `toPrecision` に許可された範囲外の数値が渡された場合に発生します。

## エラーメッセージ

```plain
RangeError: toExponential() argument must be between 0 and 100 (V8-based & Safari)
RangeError: toFixed() digits argument must be between 0 and 100 (V8-based & Safari)
RangeError: toPrecision() argument must be between 1 and 100 (V8-based & Safari)
RangeError: precision -1 out of range (Firefox)
```

## エラー型

{{jsxref("RangeError")}}

## エラーの原因

これらのメソッドのいずれかで、 範囲外の精度を引数を使用しています。

- {{jsxref("Number.prototype.toExponential()")}}: 引数は 0 以上 100 以下である必要があります。
- {{jsxref("Number.prototype.toFixed()")}}: 引数は 0 以上 100 以下である必要があります。
- {{jsxref("Number.prototype.toPrecision()")}}: 引数は 1 以上 100 以下である必要があります。

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
