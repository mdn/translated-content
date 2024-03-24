---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{JSRef}}

**`charCodeAt()`** メソッドは、指定された位置にある UTF-16 コード単位を表す `0` から `65535` までの整数を返します。

`charCodeAt()` は常に [UTF-16 コード単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)の並びとして文字列をインデックスするので、孤立サロゲートを返すかもしれません。コードポイント値全体を取得したい場合は、 {{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

## 構文

```js-nolint
charCodeAt(index)
```

### 引数

- `index`
  - : 返す文字の 0 基点のインデックスです。[整数に変換され](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)、`undefined` は 0 に変換されます。

### 返値

`0` から `65535` までの整数を返します。これは `index` で指定された位置の UTF-16 コード単位の値を表します。`index` が `0` ～ `str.length - 1` の範囲外であった場合、`charCodeAt()` は {{jsxref("NaN")}} を返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `str` という名前の文字列であれば `str.length - 1` です。

Unicode のコードポイントは `0` から `1114111` (`0x10FFFF`) までの範囲です。`charCodeAt()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`charCodeAt(i)` だけでなく `charCodeAt(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxref("String/codePointAt", "codePointAt(i)")}} を使用する必要があります。Unicode に関する情報は[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### charCodeAt() の使用

以下の例では、 Unicode 文字の A である `65` を返します。

```js
"ABC".charCodeAt(0); // returns 65
```

`charCodeAt()` は妥当な Unicode 文字ではない、孤立サロゲートを返す可能性があります。

```js
const str = "𠮷𠮾";
console.log(str.charAt(0)); // 55362、または d842、これは妥当な Unicode 文字ではない
console.log(str.charAt(1)); // 57271、または dfb7、これは妥当な Unicode 文字ではない
```

指定された位置の完全な Unicode コードポイントを取得するには、{{jsxref("String.prototype.codePointAt()")}} を使用してください。

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> **メモ:** `charCodeAt()` を使用して `codePointAt()` を再実装することは避けてください。孤立サロゲートの検出とそのペアリングは複雑で、文字列の内部表現を直接使用する組み込み API の方がパフォーマンスが高いかもしれません。必要であれば、`codePointAt()` のポリフィルをインストールしてください。

以下は [Unicode FAQ](https://unicode.org/faq/utf_bom.html#utf16-3) から引用した、UTF-16 コードユニットのペアを Unicode コードポイントに変換する可能なアルゴリズムです。

```js
// constants
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
