---
title: "SVGAnimatedLength: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedLength/baseVal
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedLength")}} インターフェイスのプロパティで、 SVG のアニメーションの初期値を表します。

## 値

{{domxref("SVGLength")}} で、長さの初期値になります。

## 例

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20px" fill="gold" id="circle"></circle>
</svg>
<pre id="log"></pre>
```

```js
const unit = [
  "unknown",
  "",
  "%",
  "em",
  "ex",
  "px",
  "cm",
  "mm",
  "in",
  "pt",
  "pc",
];
const circle = document.getElementById("circle");
const log = document.getElementById("log");
const baseValue = circle.r.baseVal.value;
const baseUnit = unit[circle.r.baseVal.unitType];

log.textContent = `The 'circle.r.baseVal' is ${baseValue} (in ${baseUnit}).`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength.animVal")}}
