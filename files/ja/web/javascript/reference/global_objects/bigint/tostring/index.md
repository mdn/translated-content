---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
tags:
  - BigInt
  - JavaScript
  - メソッド
  - プロトタイプ
  - toString()
browser-compat: javascript.builtins.BigInt.toString
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/toString
---
{{JSRef}}

**`toString()`** メソッドは、指定した {{jsxref("BigInt")}} オブジェクトを表す文字列を返します。末尾の "n" は文字列の一部にはなりません。

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## 構文

```js
toString()
toString(radix)
```

### 引数

- `radix`{{optional_inline}}
  - : オプション。数値を表す底に指定する 2 以上 36 以下の整数（基数）。

### 返値

指定した {{jsxref("BigInt")}} オブジェクトを表す文字列。

### 例外

- {{jsxref("RangeError")}}
  - : `toString()` に 2 未満または 36 より大きな基数を与えられた場合、{{jsxref("RangeError")}} が発生します。

## 解説

{{jsxref("BigInt")}} オブジェクトは {{jsxref("Object")}} の `toString()` メソッドをオーバーライドします。つまり、 {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref( "BigInt")}} オブジェクトでは、`toString()` メソッドは指定された基数によるオブジェクトの文字列表現を返します。

`toString()` メソッドは 1 番目の引数を解釈し、指定された基数（底）による文字列表現を返そうとします。10 より大きな基数が指定された場合は、 9 より大きな数値をアルファベットで示します。例えば、16 進数（底が 16）では `a` から `f` が使用されます。

`radix` が指定されなかった場合は、基数として 10 が指定されたとみなします。

`bigIntObj` が負の数だった場合、符号は保持されます。これは、基数が 2 だった場合にも適用されます。つまり、返値の文字列は、`bigIntObj` の正の 2 進数表現の先頭に `-` 符号が付いたものであり、`bigIntObj` の 2 の補数**ではありません。**

## 例

### `toString` の使用

```js
17n.toString();      // '17'
66n.toString(2);     // '1000010'
254n.toString(16);   // 'fe'
-10n.toString(2);    // -1010'
-0xffn.toString(2);  // '-11111111'
```

### `BigInt` における負の 0

整数に負の 0 が存在しないのと同様に、`BigInt` には負の 0 がありません。 `-0.0` は JavaScript の [`Number`](/ja/docs/Web/JavaScript/Data_structures#数値型_number) 型にのみ現れる、IEEE 浮動小数点数の概念です。

```js
(-0n).toString();      // '0'
BigInt(-0).toString(); // '0'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
