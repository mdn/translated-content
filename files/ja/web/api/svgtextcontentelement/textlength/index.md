---
title: "SVGTextContentElement: textLength プロパティ"
short-title: textLength
slug: Web/API/SVGTextContentElement/textLength
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

**`textLength`** は {{domxref("SVGTextContentElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("textLength")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

### `textLength` プロパティへのアクセス

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// textLength プロパティへのアクセス
const animatedLength = textElement.textLength;

// textLength 属性の元値
console.log(animatedLength.baseVal.value); // 出力: 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("textLength")}}
- {{domxref("SVGAnimatedLength")}}
