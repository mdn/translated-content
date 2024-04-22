---
title: "RangeError: radix must be an integer"
slug: Web/JavaScript/Reference/Errors/Bad_radix
---

{{jsSidebar("Errors")}}

JavaScript の例外 "radix must be an integer at least 2 and no greater than 36" は、 {{jsxref("Number.prototype.toString()")}} メソッドまたは {{jsxref("BigInt.prototype.toString()")}} メソッドのオプションの `radix` 引数が指定されたものの、 2 から 36 までの範囲になかったときに発生します。

## エラーメッセージ

```js
RangeError: invalid argument (Edge)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
RangeError: toString() radix argument must be between 2 and 36 (Chrome)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("Number.prototype.toString()")}} メソッドまたは {{jsxref("BigInt.prototype.toString()")}} メソッドのオプションの `radix` 引数が指定されています。この引数は、数値を表すために使用する基数を指定する 2 から 36 の整数 (数) でなければなりません。例えば、 10 進数の数値 169 は 16 進数では A9 と表現されます。

なぜ上限が 36 なのでしょうか？ 10 よりも大きい基数の場合は、アルファベットが数値として用いられます。したがって、 (英語およびほかの多くの言語で用いられる) ラテン文字のアルファベットは 26 文字しかないため、基数は 36 以上にすることができません。

一般的な基数には、次のものがあります。

- [二進法](https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E6%B3%95)のための 2、
- [八進法](https://ja.wikipedia.org/wiki/%E5%85%AB%E9%80%B2%E6%B3%95)のための 8、
- [十進法](https://ja.wikipedia.org/wiki/%E5%8D%81%E9%80%B2%E6%B3%95)のための 10、
- [十六進法](https://ja.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E9%80%B2%E6%B3%95)のための 16。

## 例

### 無効な場合

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// フォーマットのために、このような文字列は使用できません。
(12071989).toString("MM-dd-yyyy");
```

### 有効な場合

```js example-good
(42).toString(2); // "101010" (二進法)
(13).toString(8); // "15"     (八進法)
(0x42).toString(10); // "66"     (十進法)
(100000).toString(16); // "186a0"  (十六進法)
```

## 関連情報

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
