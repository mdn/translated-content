---
title: "HighlightRegistry: entries() メソッド"
short-title: entries()
slug: Web/API/HighlightRegistry/entries
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`entries()`** は {{domxref("HighlightRegistry")}} Hインターフェイスのメソッドで、 `HighlightRegistry` オブジェクト内の各要素の `[name, highlight]` ペアを挿入順に反復処理する、新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.entries()")}} を使用するのと似ています。

## 構文

```js-nolint
entries()
```

### 返値

`HighlightRegistry` 内のすべての `Highlight` オブジェクトの `[name, highlight]` の配列を挿入順で反復処理する、新しいイテレーターオブジェクト。

## 例

以下のコードスニペットは、2 つの新しいハイライトを作成して登録し、 `entries()` メソッドによって返されるイテレーターを使用して、ハイライトとその名前をログに記録します。

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

const iter = CSS.highlights.entries();

console.log(iter.next().value); // ['first-highlight', Highlight]
console.log(iter.next().value); // ['second-highlight', Highlight]
```

次のサンプルコードは、 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して、レジストリー内のハイライトを反復処理する方法を示しています。

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

for (const [name, highlight] of CSS.highlights.entries()) {
  console.log(`Highlight ${name}`, highlight);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
