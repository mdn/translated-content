---
title: "SVGGradientElement: gradientTransform プロパティ"
short-title: gradientTransform
slug: Web/API/SVGGradientElement/gradientTransform
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

**`gradientTransform`** は {{domxref("SVGGradientElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("gradientTransform")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedTransformList")}} です。

## 例

### `gradientTransform` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient3" gradientTransform="rotate(45)">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient3)" />
</svg>
```

```js
// gradientTransform プロパティへのアクセス
const gradient = document.getElementById("gradient3");
console.dir(gradient.gradientTransform.baseVal);
// 出力: SVGTransformList オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
