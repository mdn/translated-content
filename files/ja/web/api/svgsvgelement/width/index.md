---
title: "SVGSVGElement: width プロパティ"
short-title: width
slug: Web/API/SVGSVGElement/width
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

**`width`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、要素の水平方向のサイズを {{domxref("SVGAnimatedLength")}} として記述します。これは{{SVGElement("svg")}} 要素の {{SVGAttr("width")}} 属性を反映しますが、これは SVG のレンダリングされる幅と一致しないことがあります。

CSS の {{cssxref("width")}} プロパティは `<svg>` 要素の `width` 属性よりも優先されますので、この値はこの要素の外見を反映していないことがあります。 {{SVGAttr("viewBox")}} および `width` 属性が省略された場合、この `width` プロパティは実際の高さを反映します。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const svg = document.querySelector("svg");
const inlineSize = svg.width;
console.dir(inlineSize.baseVal.value); // `width` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
