---
title: "SVGTextContentElement: lengthAdjust プロパティ"
short-title: lengthAdjust
slug: Web/API/SVGTextContentElement/lengthAdjust
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

**`lengthAdjust`** は {{domxref("SVGTextContentElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("lengthAdjust")}} 属性を反映します。これはこのインターフェイスで定義されている `LENGTHADJUST_*` 定数のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} です。

## 例

### `lengthAdjust` プロパティにアクセス

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// `lengthAdjust` プロパティにアクセス
const lengthAdjust = textElement.lengthAdjust;

// `lengthAdjust` 属性の元値をログ出力
console.log(lengthAdjust.baseVal); // 出力: 1 (e.g. LENGTHADJUST_SPACING)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("lengthAdjust")}}
- {{domxref("SVGAnimatedEnumeration")}}
