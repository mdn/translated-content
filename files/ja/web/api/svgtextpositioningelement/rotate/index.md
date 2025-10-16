---
title: "SVGTextPositioningElement: rotate プロパティ"
short-title: rotate
slug: Web/API/SVGTextPositioningElement/rotate
l10n:
  sourceCommit: 46b0ecd3b5280fbff659d138e3a7eaaf0fd12a24
---

{{APIRef("SVG")}}

**`rotate`** は {{domxref("SVGTextPositioningElement")}} インターフェイスの読み取り専用プロパティで、指定された要素の {{SVGAttr("rotate")}} 属性で指定されたとおりに、個々のテキスト文字の回転を反映します。

## 値

{{domxref("SVGAnimatedNumberList")}} オブジェクトです。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" rotate="45">Hello</text>
  <text x="50" y="50" rotate="90">World</text>
</svg>
```

`rotate` 属性にアクセスできます。

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].rotate.baseVal); // 出力: 45
console.log(texts[1].rotate.baseVal); // 出力: 90
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumberList")}}
