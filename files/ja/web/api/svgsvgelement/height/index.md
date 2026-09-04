---
title: "SVGSVGElement: height プロパティ"
short-title: height
slug: Web/API/SVGSVGElement/height
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

**`height`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、要素の垂直方向のサイズを {{domxref("SVGAnimatedLength")}} として記述します。これは{{SVGElement("svg")}} 要素の {{SVGAttr("height")}} 属性を反映しますが、これは SVG のレンダリングされる高さと一致しないことがあります。

CSS の {{cssxref("height")}} プロパティは `<svg>` 要素の `height` 属性よりも優先されますので、この値はこの要素の外見を反映していないことがあります。 {{SVGAttr("viewBox")}} および `height` 属性が省略された場合、この `height` プロパティは実際の高さを反映します。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const svg = document.querySelector("svg");
const verticalSize = svg.height;
console.dir(verticalSize.baseVal.value); // `height` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGSVGElement.width")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
