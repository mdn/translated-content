---
title: "SVGCircleElement: r プロパティ"
short-title: r
slug: Web/API/SVGCircleElement/r
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

**`r`** は {{domxref("SVGCircleElement")}} インターフェイスの読み取り専用プロパティで、{{SVGElement("circle")}} 要素の {{SVGAttr("r")}} 属性を反映し、この円の半径を定義します。

指定されなかった場合は、`0` が設定されたかのような効果になります。

## 値

{{domxref("SVGAnimatedLength")}} で、この円の半径を表します。

## 例

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.r);
```

{{EmbedLiveSample("例", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.cy")}}
