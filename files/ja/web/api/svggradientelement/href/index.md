---
title: "SVGGradientElement: href プロパティ"
short-title: href
slug: Web/API/SVGGradientElement/href
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

**`href`** は {{domxref("SVGGradientElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("href")}} または {{SVGAttr("xlink:href")}} {{deprecated_inline}} 属性を反映します。

## 値

{{domxref("SVGAnimatedString")}} です。

## 例

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="gradient2" href="#gradient1" />
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.href.baseVal); // 出力: "#gradient1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
