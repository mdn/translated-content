---
title: "Highlight: entries() メソッド"
short-title: entries()
slug: Web/API/Highlight/entries
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`entries()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。これは、この `Highlight` オブジェクト内の各 {{domxref("Range")}} オブジェクトを」配列 `[range, range]` の形で、挿入順に反復処理します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.entries()")}} を使うのと似ています。

## 構文

```js-nolint
entries()
```

### 返値

この `Highlight` 内のすべての `Range` オブジェクトを `[range, range]` の配列の形で反復処理する、新しいイテレーターオブジェクトです。

## 例

以下のコードスニペットは、2 つの範囲を持つ新しいハイライトを作成し、 `entries()` メソッドによって返されるイテレーターを使用してその範囲をログに記録する方法を示しています。

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const myHighlight = new Highlight();
myHighlight.add(range1);
myHighlight.add(range2);

const iter = myHighlight.entries();

console.log(iter.next().value); // [Range, Range]
console.log(iter.next().value); // [Range, Range]
```

次のサンプルコードは、 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用してハイライトの範囲を反復処理する方法を示しています。

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);

for (const [range] of highlight.entries()) {
  console.log(range.toString());
  // Time
  // Lunchtime
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
