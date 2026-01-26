---
title: "HighlightRegistry: values() メソッド"
short-title: values()
slug: Web/API/HighlightRegistry/values
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`values()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、 `HighlightRegistry` オブジェクト内のすべての `Highlight` オブジェクトの値を挿入順に含む新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.values()")}} を使用するのと似ています。

## 構文

```js-nolint
values()
```

### 返値

このレジストリー内のすべての `Highlight` オブジェクトを挿入順に反復処理する新しいイテレーターオブジェクト。

## 例

次のコードスニペットは、3 つの `Highlight` オブジェクトを作成して登録し、 `values()` メソッドが返すイテレーターを使用してハイライトをログに記録する方法を示しています。

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

const iter = CSS.highlights.values();

console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
```

次のサンプルコードは、 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して、レジストリー内のハイライトを反復処理する方法を示しています。

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

for (const highlight of CSS.highlights.values()) {
  console.log(highlight); // Highlight
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
