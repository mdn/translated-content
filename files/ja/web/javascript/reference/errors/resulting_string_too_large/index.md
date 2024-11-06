---
title: "RangeError: repeat count must be less than infinity"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
---

{{jsSidebar("Errors")}}

JavaScript の例外 "repeat count must be less than infinity" は、 {{jsxref("String.prototype.repeat()")}} メソッドが使用され、 `count` 引数が無限大である場合に発生します。

## エラーメッセージ

```js
RangeError: argument out of range (Edge)
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)
RangeError: Invalid count value (Chrome)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.prototype.repeat()")}} メソッドを使用しています。`count` 引数は、文字列の繰り返し回数を指定します。 これは 0 から正の {{jsxref("Infinity")}} 未満の値である必要があり、負の数は使用できません。有効値の範囲は \[0, +∞) のように表現することができます。

結果の文字列は、文字列サイズの最大値以上にはできません。これは JavaScript エンジンによって異なります。 Firefox (SpiderMonkey) の最大文字列数は、 228 -1 （`0xFFFFFFF）`です。

## 例

### 無効なケース

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 28); // RangeError
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
