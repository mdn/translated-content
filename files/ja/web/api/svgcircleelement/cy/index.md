---
title: "SVGCircleElement: cy プロパティ"
short-title: cy
slug: Web/API/SVGCircleElement/cy
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

**`cy`** は {{domxref("SVGCircleElement")}} インターフェイスの読み取り専用プロパティで、{{SVGElement("circle")}} 要素の {{SVGAttr("cy")}} 属性を反映し、この円の中心の Y 座標を定義します。

指定されなかった場合は、`0` が設定されたかのような効果になります。

## 値

{{domxref("SVGAnimatedLength")}} で、この円の中心の Y 座標を表します。

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
console.log(circle.cy);
```

{{EmbedLiveSample("例", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGCircleElement.cx")}}
- {{domxref("SVGCircleElement.r")}}
