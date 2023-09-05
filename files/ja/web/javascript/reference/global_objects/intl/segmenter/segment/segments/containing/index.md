---
title: Intl.Segments.prototype.containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
---

{{JSRef}}

**`Intl.Segments.containing()`** メソッドは、指定されたインデックスのコードユニットを含む文字列中のセグメントを記述したオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-containing.html")}}

## 構文

```js
containing(codeUnitIndex);
```

### 引数

- `codeUnitIndex` {{ optional_inline }}
  - : 元の入力文字列におけるコードユニットのインデックスを指定する数値。省略した場合のデフォルトは `0` となります。

### 返値

元の文字列のセグメントを記述するオブジェクトで以下のプロパティを持ちます。与えられたインデックス値が範囲外の場合は `undefined` となります。

- `segment`
  - : 元の入力文字列から抽出されたセグメントを含む文字列。
- `index`
  - : セグメントを開始する元の入力文字列のコードユニットのインデックス。
- `input`
  - : セグメント化された完全な入力文字列。
- `isWordLike`
  - : `granularity` が `"word"` の場合のみブール値となり、それ以外は `undefined` です。`granularity` が `"word"` の場合、`isWordLike` は、セグメントが単語のようなもの（すなわち、文字／数字／英字／その他）である場合に `true`、それ以外の場合に `false` となります。

## 例

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← code unit index
// ┃A l l o n s┃-┃y┃!┃   ← code unit
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);
let current = undefined;

current = segments.containing();
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// → { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// → { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// → { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// → undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
