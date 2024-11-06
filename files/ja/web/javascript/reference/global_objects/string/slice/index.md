---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`slice()`** メソッドは、元の文字列を変更せず、文字列の一部分を取り出し、それを新しい文字列として返します。

{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}

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

`slice()` は 1 つの文字列からテキストを取り出し、新しい文字列を返します。一方の文字列におけるテキストへの変更は、他の文字列に影響を与えません。

`slice()` は `indexEnd` を含まずにテキストを取り出します。例えば `str.slice(1, 4)` は、 2 番目から 4 番目までの文字（`1`, `2`, `3` の位置の文字）を取り出します。

- `indexStart >= str.length` の場合、空文字列が返されます。
- `indexStart < 0` の場合、位置は文字列の末尾から数えられます。もっと正式に言えば、この場合、部分文字列は `max(indexStart + str.length, 0)` から始まります。
- `indexStart` が省略されたり、 undefined であったり、（{{jsxref('Number', 'Number(indexStart)')}} を使用して）数値に変換できなかったりした場合は、 `0` として扱われます。
- `indexEnd` が省略されたり、 undefined であったり、（{{jsxref('Number', 'Number(indexEnd)')}} を使用して）数値に変換できなかったり、 `indexEnd >= str.length` であったりした場合は、 `slice()` は文字列の末尾まで抽出します。
- `indexEnd < 0` であった場合、その位置は文字列の末尾から数えられます。もっと正式に言えば、この場合、部分文字列は `max(indexEnd + str.length, 0)` で終わります。
- 負の値を正規化した後で `indexEnd <= indexStart` であった場合（すなわち、 `indexEnd` が `indexStart` よりも前の文字を表していた場合）は、空文字列が返されます。

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
