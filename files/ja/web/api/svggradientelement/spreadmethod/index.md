---
title: "SVGGradientElement: spreadMethod プロパティ"
short-title: spreadMethod
slug: Web/API/SVGGradientElement/spreadMethod
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

**`spreadMethod`** は {{domxref("SVGGradientElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("spreadMethod")}} 属性を反映します。これは、このインターフェイスで定義された `SVG_SPREADMETHOD_*` 定数のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} です。

## 例

### `spreadMethod` プロパティのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient2" spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.spreadMethod.baseVal); // 出力: 2 (SVG_SPREADMETHOD_REFLECT)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
