---
title: String.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.iterator]()`** は {{jsxref("String")}} 値のメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装しており、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなど、反復可能オブジェクトを期待するほとんどの構文で文字列が利用できるようにします。これは、文字列値の Unicode コードポイントを個別の文字列として返す[文字列イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

{{InteractiveExample}}

```js interactive-example
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}

```

## 構文

```js-nolint
string[Symbol.iterator]()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)で、この文字列の各 Unicode コードポイントを、独立した文字列として生成します。

## 解説

文字列は Unicode コードポイントで反復処理されます。つまり、書記素クラスターは分割されますが、サロゲートペアは保持されます。

```js
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// 基本的な "Backhand Index Pointing Right" の絵文字と
// "Dark skin tone" の絵文字に分割

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// "Man" と "Boy" の絵文字に分割され、 ZWJ で結合されます。
```

## 例

### for...of ループを用いた反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`[Symbol.iterator]()` メソッドが存在することで、文字列は[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)になり、`for...of` ループのような反復処理構文は自動的にこのメソッドを呼び出して、ループするイテレーターを取得します。

```js
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### イテレーターを手動で手繰る

反復処理を最大限に制御するために、返すイテレーターオブジェクトの `next()` メソッドを手動で呼び出すこともできます。

```js
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype[Symbol.iterator]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [テキスト処理](/ja/docs/Web/JavaScript/Guide/Text_formatting)ガイド
- {{jsxref("Symbol.iterator")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
