---
title: "SVGCircleElement: cx プロパティ"
short-title: cx
slug: Web/API/SVGCircleElement/cx
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`cx`** は {{domxref("SVGCircleElement")}} インターフェイスの読み取り専用プロパティで、{{SVGElement("circle")}} 要素の {{SVGAttr("cx")}} 属性を反映し、この円の中心の X 座標を定義します。

指定されなかった場合は、`0` が設定されたかのような効果になります。

## 値

{{domxref("SVGAnimatedLength")}} で、この円の中心の X 座標を表します。

## 例

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="50" fill="gold" id="circle" />
</svg>
```

### JavaScript

```js
const circle = document.getElementById("circle");
console.log(circle.cx);
```

{{EmbedLiveSample("例", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGCircleElement.cy")}}
- {{domxref("SVGCircleElement.r")}}
