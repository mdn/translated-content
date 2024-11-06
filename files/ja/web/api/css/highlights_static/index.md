---
title: "CSS: highlights 静的プロパティ"
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`highlights`** は {{domxref("CSS")}} インターフェイスは静的な読み取り専用プロパティであり、interface は、{{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}} を使用して任意のテキスト範囲をスタイル設定するために用いる `HighlightRegistry` へのアクセス手段を提供します。

## 値

{{DOMxRef("HighlightRegistry")}} オブジェクトです。

## 例

次の例は、複数のテキスト範囲を作成し、そのテキスト範囲に対して `Highlight` オブジェクトを作成し、このハイライトを `HighlightRegistry` に登録し、最後に {{cssxref("::highlight", "::highlight()")}} 擬似要素を使用してテキスト範囲にスタイルを設定する例を示しています。

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

const myCustomHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-custom-highlight", myCustomHighlight);
```

```css
::highlight(my-custom-highlight) {
  background-color: yellow;
  color: black;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
