---
title: "SVGGradientElement: gradientUnits プロパティ"
short-title: gradientUnits
slug: Web/API/SVGGradientElement/gradientUnits
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

**`gradientUnits`** は {{domxref("SVGGradientElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("gradientUnits")}} 属性を反映します。これは {{domxref("SVGUnitTypes")}} で定義されている定数 `SVG_UNIT_TYPE_*` のいずれかを取ります。

## 値

A{{domxref("SVGAnimatedEnumeration")}} です。

## 例

### `gradientUnits` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient1)" />
</svg>
```

```js
const gradient = document.getElementById("gradient1");
console.log(gradient.gradientUnits.baseVal); // 出力: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
