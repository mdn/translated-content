---
title: "HighlightRegistry: keys() メソッド"
short-title: keys()
slug: Web/API/HighlightRegistry/keys
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`keys()`** は {{domxref("HighlightRegistry")}} インターフェイスのメソッドで、この `HighlightRegistry` オブジェクト内のすべての `Highlight` オブジェクトのキーを挿入順で含む新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。

`HighlightRegistry` は {{jsxref("Map")}} 風オブジェクトであるため、これは {{jsxref("Map.keys()")}} を使用するのと似ています。

## 構文

```js-nolint
keys()
```

### 返値

レジストリーにあるすべての `Highlight` オブジェクトの名前を挿入順で格納する新しいイテレーターオブジェクト。

## 例

次のコードスニペットは、3 つの `Highlight` オブジェクトを作成して登録し、 `keys()` メソッドによって返されるイテレーターを使用してそれらの名前をログに記録する方法を示しています。

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

const iter = CSS.highlights.keys();

console.log(iter.next().value); // "foo"
console.log(iter.next().value); // "bar"
console.log(iter.next().value); // "baz"
```

次のサンプルコードは、 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して、レジストリー内のハイライトを反復処理する方法を示しています。

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

for (const name of CSS.highlights.keys()) {
  console.log(name);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
