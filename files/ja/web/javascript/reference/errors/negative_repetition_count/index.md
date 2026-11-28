---
title: "RangeError: repeat count must be non-negative"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "repeat count must be non-negative" は、{{jsxref("String.prototype.repeat()")}} メソッドの `count` 引数に負の数が指定された場合に発生します。

## エラーメッセージ

```plain
RangeError: Invalid count value: -1 (V8-based)
RangeError: repeat count must be non-negative (Firefox)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## エラー型

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.prototype.repeat()")}} メソッドが使用されています。`count` 引数は文字列の繰り返し回数を指定します。
これは 0 以上で正の {{jsxref("Infinity")}} 未満の値である必要があり、負の数は使用できません。
有効な値の範囲は \[0, +∞) と表せます。

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
