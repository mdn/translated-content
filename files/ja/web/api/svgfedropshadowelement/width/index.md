---
title: "SVGFEDropShadowElement: width プロパティ"
short-title: width
slug: Web/API/SVGFEDropShadowElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`width`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの水平サイズを {{domxref("SVGAnimatedLength")}} で記述します。

これは、{{SVGAttr("width")}} フィルタープリミティブ属性を反映しています。この属性は、フィルター領域の幅に対する [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) または [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage) です。デフォルト値は `100%` です。プロパティの値は、ユーザー座標系単位での長さです。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const feDropShadow = document.querySelector("feDropShadow");
const horizontalSize = feDropShadow.width;
console.log(horizontalSize.baseVal.value); // `width` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDropShadowElement.height")}}
- CSS の {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 関数
- CSS の {{cssxref("box-shadow")}} プロパティ
- CSS の {{cssxref("text-shadow")}} プロパティ
- CSS の {{cssxref("blend-mode")}} データ型
- CSS の {{cssxref("mix-blend-mode")}} プロパティ
