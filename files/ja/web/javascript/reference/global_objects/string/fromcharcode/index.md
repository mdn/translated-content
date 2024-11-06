---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
l10n:
  sourceCommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{JSRef}}

**`String.fromCharCode()`** 静的メソッドは、指定された UTF-16 コード単位の並びから生成された文字列を返します。

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}

## 構文

```js-nolint
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### 引数

- `numN`
  - : UTF-16 コード単位を表す数値の並びです。範囲は `0` から `65535` (`0xFFFF`) までです。数値が `0xFFFF` を超えた場合は切り捨てられます。妥当性チェックは行われません。

### 返値

指定された `N` 個の UTF-16 コード単位から生成された、長さ `N` の文字列です。

## 解説

`fromCharCode()` は `String` の静的メソッドなので、自分で生成した `String` オブジェクトのメソッドではなく、常に `String.fromCharCode()` として使用するようにしてください。

Unicode のコードポイントは `0` から `1114111` (`0x10FFFF`) までの範囲です。`charAt()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`charAt(i)` だけでなく `charAt(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxref("String/codePointAt", "codePointAt(i)")}} と {{jsxref("String.fromCodePoint()")}} を使用する必要があります。Unicode に関する情報は[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

`fromCharCode()` は 16 ビット値のみで動作するため（`\u` エスケープシーケンスと同様）、補助文字を返すためにはサロゲートペアが必要です。例えば、`String.fromCharCode(0xD83C, 0xDF03)` と `\uD83C\uDF03` はコードポイント `U+1F303` "Night with Stars" です。補助コードポイントの値（例: `0x1f303`）とそれを表す両方のサロゲート値（例: `0xd83c` や `0xdf03`）との間には数学的な関係がありますが、補助コードポイントを使用するたびにサロゲートペアの値を計算したり参照したりする、余分なステップが必要になります。このため、実際のコードポイント値に基づいて補助文字を返すことができる {{jsxref("String.fromCodePoint()")}} を使用した方が便利です。例えば、 `String.fromCodePoint(0x1f303)` はコードポイント `U+1F303` "Night with Stars" を返します。

## 例

### fromCharCode() の使用

BMP 文字は、 UTF-16 では単一のコード単位を使用します。

```js
String.fromCharCode(65, 66, 67); // "ABC" を返す
String.fromCharCode(0x2014); // "—" を返す
String.fromCharCode(0x12014); // これも "—" を返す。1 の桁は削除され無視される
String.fromCharCode(8212); // これも "—" を返す。8212 は 0x2014 の 10 進数形
```

補助文字は、 UTF-16 では、 2 つのコード単位（すなわちサロゲートペア）を必要とします。

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
