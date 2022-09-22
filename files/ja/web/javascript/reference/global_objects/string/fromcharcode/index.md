---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef}}

**`String.fromCharCode()`** 静的メソッドは、指定された UTF-16 コードユニットの並びから生成された文字列を返します。

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}

## 構文

```
String.fromCharCode(num1[, ...[, numN]])
```

### 引数

- `num1, ..., numN`
  - : UTF-16 コードユニットを表す数値の並びです。範囲は `0` から `65535` (`0xFFFF`) までです。数値が `0xFFFF` を超えた場合は切り捨てられます。妥当性チェックは行われません。

### 返値

指定された `N` 個の UTF-16 コードユニットから生成された、長さ `N` の文字列です。

## 解説

このメソッドは {{jsxref("String")}} オブジェクトではなく文字列を返します。

`fromCharCode()` は {{jsxref("String")}} の静的メソッドなので、自分で生成した {{jsxref("String")}} オブジェクトのメソッドではなく、常に、 `String.fromCharCode()` として使用するようにしてください。

### 補助文字の返却

UTF-16 では、もっとも一般的な文字は単一の 16 ビット値 (すなわちコードユニット) で表現することができます。しかし、この種の文字は、基本多言語面 (BMP) と呼ばれていますが、全体で指すことができる Unicode コードポイントの 1/17 でしかありません。残りのコードポイント、 `65536` (`0x010000`) から `1114111` (`0x10FFFF`) までは、補助文字と呼ばれています。 UTF-16 では、補助文字はサロゲートと呼ばれる 2 つの 16 ビットコードユニットで表現され、この目的のために予約されていました。2 つのサロゲートの妥当な組み合わせを使用して、サロゲートペアと呼ばれる補助文字を表現します。

`fromCharCode()` は 16 ビット値のみで動作するため (`\u` エスケープシーケンスと同様)、補助文字を返すためにはサロゲートペアが必要です。例えば、 `String.fromCharCode(0xD83C, 0xDF03)` と `\uD83C\uDF03` はコードポイント `U+1F303` "Night with Stars" です。

補助コードポイントの値 (例: 0x1F303) とそれを表す両方のサロゲート値 (例: 0xD83C や 0xDF03) との間には数学的な関係がありますが、補助コードポイントを使用するたびにサロゲートペアの値を計算したり参照したりする、余分なステップが必要になります。このため、実際のコードポイント値に基づいて補助文字を返すことができる {{jsxref("String.fromCodePoint()")}} (ES2015 標準の一部) を使用した方が便利です。例えば、 `String.fromCodePoint(0x1F303)` はコードポイント `U+1F303` "Night with Stars" を返します。

## 例

### fromCharCode() の使用

BMP 文字は、 UTF-16 では単一のコードユニットを使用します。

```js
String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014);       // returns "—"
String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212);         // also returns "—"; 8212 is the decimal form of 0x2014
```

補助文字は、 UTF-16 では、 2 つのコードユニット (すなわちサロゲートペア) を必要とします。

```js
String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07); // "\uD834\uDF06a\uD834\uDF07"
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.fromcharcode', 'String.fromCharCode')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.fromCharCode")}}

## 関連情報

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
