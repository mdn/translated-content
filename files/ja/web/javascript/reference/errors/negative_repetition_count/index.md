---
title: "RangeError: repeat count must be non-negative"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
---

{{jsSidebar("Errors")}}

JavaScript の例外 "repeat count must be non-negative" は、 {{jsxref("String.prototype.repeat()")}} メソッドに `count` 引数が指定され、その値が負の数であった場合に発生します。

## メッセージ

```js
RangeError: argument out of range
RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
```

## エラータイプ

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.prototype.repeat()")}} メソッドを使用しています。 `count` 引数は、文字列の繰り返し回数を指定します。 これは 0 から正の {{jsxref("Infinity")}} 未満の値である必要があり、負の数は使用できません。 有効値の範囲は \[0, +∞) のように説明できます。

## 例

### 無効なケース

```js example-bad
"abc".repeat(-1); // RangeError
```

### 有効な場合

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count は整数に変換されます)
```

## 関連情報

- {{jsxref("String.prototype.repeat()")}}
