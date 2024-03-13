---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{JSRef}}

**`codePointAt()`** は {{jsxref("String")}} のメソッドで、指定されたインデックスから始まる文字の Unicode コードポイント値である非負の整数を返します。インデックスは Unicode コードポイントではなく、UTF-16 コード単位に基づくことに注意してください。

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## 構文

```js-nolint
codePointAt(index)
```

### 引数

- `index`
  - : 返す文字の 0 基点のインデックスです。[整数に変換され](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)、`undefined` は 0 に変換されます。

### 返値

指定された位置 `index` にある文字のコードポイント値を表す非負の整数値です。

- `index` が `0` – `str.length - 1` の範囲外であれば、`codePointAt()` は {{jsxref("undefined")}} を返します。
- `index` の位置の要素が UTF-16 高サロゲートであった場合、そのコードポイントのサロゲートペアを返します。
- `index` の位置の要素が UTF-16 低サロゲートであった場合、低サロゲートコードポイントのみを返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `str` という名前の文字列であれば `str.length - 1` です。

Unicode のコードポイントは `0` から `1114111` (`0x10FFFF`) までの範囲です。UTF-16 では、それぞれの文字列のインデックスは `0` ～ `65536` のコード単位です。上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されます。したがって、`codePointAt()` は文字列の 2 つのインデックスにまたがるコードポイントを返す可能性があります。Unicode に関する情報は[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### codePointAt() の使用

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### codePointAt() の繰り返し

要素が UTF-16 の低サロゲートである `index` へのインデックス付けは、低サロゲートのみを返すので、文字列のインデックスをループに使わない方がよいでしょう。

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

代わりに、[`for...of`](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) 文や[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用してください。どちらも文字列の [`@@iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) を呼び出し、コードポイント単位で反復処理をします。それから、`codePointAt(0)` でそれぞれの要素のコードポイントを取得してください。

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.codePointAt` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
