---
title: String.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`slice()`** は {{jsxref("String")}} 値のメソッドで、元の文字列を変更せず、文字列の一部分を取り出し、それを新しい文字列として返します。

{{InteractiveExample("JavaScript デモ: String.prototype.slice()", "taller")}}

```js interactive-example
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// 予想される結果: "the lazy dog."

console.log(str.slice(4, 19));
// 予想される結果: "quick brown fox"

console.log(str.slice(-4));
// 予想される結果: "dog."

console.log(str.slice(-9, -5));
// 予想される結果: "lazy"
```

## 構文

```js-nolint
slice(indexStart)
slice(indexStart, indexEnd)
```

### 引数

- `indexStart`
  - : 返却する部分文字列に含める最初の文字の位置です。
- `indexEnd` {{optional_inline}}
  - : 返却する部分文字列から除外する最初の文字の位置です。

### 返値

文字列の取り出された部分を含んだ新しい文字列です。

## 解説

`slice()` は 1 つの文字列からテキストを取り出し、新しい文字列を返します。

`slice()` は、`indexEnd` まで（ただし `indexEnd` 自体は含まない）を抽出します。例えば、`str.slice(4, 8)` は、5 文字目から 8 文字目（インデックス `4`、`5`、`6`、`7` の文字）を抽出します。

```plain
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result
```

- `indexStart >= str.length` の場合、空文字列が返されます。
- `indexStart < 0` の場合、位置は文字列の末尾から数えられます。もっと正式に言えば、この場合、部分文字列は `max(indexStart + str.length, 0)` から始まります。
- `indexStart` が省略されていたり、`undefined` であったり、または[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)できなかったりした場合、`0` として扱われます。
- `indexEnd` が省略されているか、`undefined` であるか、`indexEnd >= str.length` の場合、`slice()` は文字列の末尾まで抽出します。
- `indexEnd < 0` であった場合、その位置は文字列の末尾から数えられます。もっと正式に言えば、この場合、部分文字列は `max(indexEnd + str.length, 0)` で終わります。
- 負の値を正規化した後、`indexEnd <= indexStart` である場合（つまり、`indexEnd` が `indexStart` の前の文字を表す場合）、空文字列が返されます。

## 例

### slice() を使って新しい文字列を作る

以下の例では、新しい文字列を生成するために `slice()` を使っています。

```js
const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

### 負の位置で slice() を使う

下記の例では負の位置で `slice()` を使っています。

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

この例では、文字列の末尾から前方に `11` 番目を開始位置とし、先頭から後方に `16` 番目を終了位置とします。

```js
console.log(str.slice(-11, 16)); // "is u"
```

こちらは先頭から後方に `11` 番目を開始位置とし、末尾から前方に `7` 番目を終了位置とします。

```js
console.log(str.slice(11, -7)); // " is u"
```

これらの引数は、末尾から前方に `5` 番目を開始位置とし、末尾から前方に `1` 番目を終了位置とします。

```js
console.log(str.slice(-5, -1)); // "n us"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
