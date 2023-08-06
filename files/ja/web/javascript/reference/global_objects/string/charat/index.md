---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{JSRef}}

**`charAt()`** は {{jsxref("String")}} 値のメソッドは、指定されたインデックスにある単一の UTF-16 コード単位からなる新しい文字列を返します。

`charAt()` は常に文字列を [UTF-16 コード単位](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)の並びとして索引付けます。そのため、孤立したサロゲートを返す可能性があります。指定されたインデックスの完全な Unicode コードポイントを取得するには、{{jsxref("String.prototype.codePointAt()")}} および {{jsxref("String.fromCodePoint()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## 構文

```js-nolint
charAt(index)
```

### 引数

- `index`
  - : 返される文字のゼロから始まる文字のインデックスです。[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。`undefined` は 0 に変換されます。

### 返値

指定された `index` の位置にある文字（厳密に 1 つの UTF-16 コードポイント）を表す文字列です。`index` の位置が文字列の範囲を外れていた場合は、`charAt()` は空文字列を返します。

## 解説

文字列の中の文字は、左から右に向けてインデックス付けされています。最初の文字の添字は `0` であり、最後の文字の添字は `str` という名前の文字列であれば `str.length - 1` です。

Unicode のコードポイントは `0` から `1114111` (`0x10FFFF`) までの範囲です。`charAt()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。したがって、`65535` より大きい値を持つ完全な文字を取得するには、`charAt(i)` だけでなく `charAt(i + 1)` も取得するか（2 つの文字を持つ文字列を操作する場合と同じです）、または {{jsxref("String/codePointAt", "codePointAt(i)")}} と {{jsxref("String.fromCodePoint()")}} を使用する必要があります。Unicode に関する情報は[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

`charAt()` は [ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法)を使用して指定された位置の文字にアクセスするのにとても似ています。主な違いは次の通りです。

- `charAt()` は `index` を整数に変換しようとしますが、ブラケット記法はそうせずに、直接 `index` をプロパティ名として使用します。
- `charAt()` は `index` が範囲外であったときに空文字列を返しますが、ブラケット記法は `undefined` を返します。

## 例

### 文字列の中の様々な位置の文字の表示

次の例は、`"Brave new world"`` という文字列の中の様々な位置の文字を表示します。

```js
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
```

これらの行は以下のように表示されます。

```plain
The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```

`charAt()` は妥当な Unicode 文字ではない、孤立サロゲートを返す可能性があります。

```js
const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842"、これは妥当な Unicode 文字ではない
console.log(str.charAt(1)); // "\udfb7"、これは妥当な Unicode 文字ではない
```

指定された位置の完全な Unicode コードポイントを取得するには、{{jsxref("String.prototype.codePointAt()")}} や[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)のように、Unicode コードポイントで分割して Unicode コードポイントの配列にするインデックスメソッドを使用してください

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> **メモ:** `charAt()` を使用して上記の解決策を再実装することは避けてください。孤立サロゲートの検出とそのペアリングは複雑で、文字列の内部表現を直接使用する組み込み API の方がパフォーマンスが高いかもしれません。必要であれば、上記の API のポリフィルをインストールしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
