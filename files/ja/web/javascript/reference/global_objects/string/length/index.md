---
title: "String: length"
slug: Web/JavaScript/Reference/Global_Objects/String/length
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`length`** データプロパティは、{{jsxref("String")}} オブジェクトの文字列長を UTF-16 コード単位の数で表します。

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## 値

非負の整数です。

{{js_property_attributes(0, 0, 0)}}

## 解説

このプロパティは、文字列内のコード単位の数を返します。JavaScript では [UTF-16](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター) エンコーディングを使用しており、すべての Unicode 文字が 1 つまたは 2 つのコード単位にエンコードされるため、`length` で返される値は文字列の実際の Unicode 文字数に一致しない可能性があります。よく使われるラテン、キリル、有名な漢字などはこのような問題にはなりませんが、絵文字、[数学記号](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols)、難しい漢字などのような特定の文字体系では、`length` で返される値が文字列の実際の文字数と一致しなくなる可能性があるので、コード単位数と文字数の違いを考慮する必要があるかもしれません。

言語の仕様書では、文字列の最大長が 2<sup>53</sup> - 1 要素と制定されており、これは[正確に表せる整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)の上限となっています。しかし、この長さの文字列は 16,384TiB のストレージを必要とし、これは一般的な機器のメモリーに収まらないため、実装上はもっと低い閾値を設けている傾向があり、文字列の長さを便宜上 32 ビット整数に収めています。

- V8 （Chrome と node で使用）では、最大長は 2<sup>29</sup> - 24 (\~1GiB) です。32 ビットの場合、最大長は 2<sup>28</sup> - 16 (\~512MiB) です。
- Firefox では、最大長は 2<sup>30</sup> - 2 (\~2GiB) です。Firefox 65 以前では、最大長は 2<sup>28</sup> - 1 (\~512MiB) でした。
- Safari では、最大長は 2<sup>31</sup> - 1 (\~4GiB) です。

他のエンコーディング (UTF-8 のファイルや blob) の巨大な文字列を扱っている場合は、データを JavaScript の文字列にロードすると、エンコーディングは常に UTF-16 になることに注意してください。文字列のサイズはもとのファイルのサイズと異なる可能性があります。

```js
const str1 = "a".repeat(2 ** 29 - 24); // 成功する
const str2 = "a".repeat(2 ** 29 - 23); // RangeError: Invalid string length

const buffer = new Uint8Array(2 ** 29 - 24).fill("a".codePointAt(0)); // このバッファーのサイズは 512MiB
const str = new TextDecoder().decode(buffer); // この文字列のサイズは 1GiB
```

空文字列の場合、`length` は 0 になります。

静的プロパティの `String.length` は文字列の長さとは関係なく、 `String` 関数の[アリティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length)（簡単に言えば、それが持つ形式的な引数の数）であり、1 です。

`length` は文字数ではなくコード単位で数えるため、文字数を取得したい場合は、まず文字列を[イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)で分割し、文字ごとに反復処理をしてください。

```js
function getCharacterLength(str) {
  // ここで使用する文字列イテレーターは、単なるコード単位ではなく、
  // 文字を反復処理します。
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
```

書記素単位でカウントしたい場合は、 [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) を使用してください。まず、分割したい文字列を [`segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) メソッドに渡し、返された `Segments` オブジェクトを反復処理をして長さを取得してください。

```js
function getGraphemeCount(str) {
  const segmenter = new Intl.Segmenter("ja-JP", { granularity: "grapheme" });

  // ここで使用されている Segments オブジェクトのイテレーターは、文字を書記素で反復処理します。
  // 文字は複数の Unicode 文字で構成されている場合があります。
  return [...segmenter.segment(str)].length;
}

console.log(getGraphemeCount("👨‍👩‍👧‍👧")); // 1
```

## 例

### 基本的な使い方

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} は ${x.length} コード単位の長さです`);
/* "Mozilla は 7 コード単位の長さです" */

console.log(`空文字列の長さは ${empty.length} です`);
/* "空文字の長さは 0 です" */
```

### 文字列の length は文字数と等しいとは限らない

```js
const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
```

### length への代入

文字列はプリミティブであるため、文字列の `length` プロパティに値を代入しても目に見える効果はなく、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では例外が発生します。

```js
const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array`: `length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
