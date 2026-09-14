---
title: Segments.prototype.containing()
short-title: containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`containing()`** は [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) インスタンスのメソッドで、指定されたインデックスにあるコード単位を含む文字列内の区間を記述するオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Segments.prototype.containing")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const segments = segmenterFr.segment(string);

console.log(segments.containing(5));
// 予想される結果:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## 構文

```js-nolint
containing(codeUnitIndex)
```

### 引数

- `codeUnitIndex` {{optional_inline}}
  - : 元の入力文字列におけるコード単位のインデックスを指定する数値。省略した場合のデフォルトは `0` となります。

### 返値

元の文字列の区間を説明するオブジェクトで、以下のプロパティを持ちます。与えられたインデックス値が範囲外の場合は `undefined` となります。

- `segment`
  - : 元の入力文字列から抽出された区間を含む文字列。
- `index`
  - : 区間を開始する元の入力文字列のコード単位のインデックス。
- `input`
  - : 区切られた完全な入力文字列。
- `isWordLike`
  - : `granularity` が `"word"` の場合のみ論理値となり、それ以外は `undefined` です。`granularity` が `"word"` の場合、`isWordLike` は、区間が単語のようなもの（すなわち、文字／数字／英字／その他）である場合に `true`、それ以外の場合に `false` となります。

## 例

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← コード単位のインデックス
// ┃A l l o n s┃-┃y┃!┃   ← コード単位
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
