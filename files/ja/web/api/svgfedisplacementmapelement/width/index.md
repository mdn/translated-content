---
title: "SVGFEDisplacementMapElement: width プロパティ"
short-title: width
slug: Web/API/SVGFEDisplacementMapElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`width`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの水平サイズを {{domxref("SVGAnimatedLength")}} で記述します。

これは {{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("width")}} フィルタープリミティブ属性を反映します。この属性は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) またはこのフィルター領域の幅に対する [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage) です。デフォルト値は `100%` です。このプロパティの値は、ユーザー座標系単位における長さです。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const horizontalSize = feDisplacementMap.width;
console.log(horizontalSize.baseVal.value); // `width` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDisplacementMapElement.height")}}
- {{domxref("SVGFEImageElement")}} API と {{SVGElement("feImage")}} 要素
- {{domxref("SVGFETurbulenceElement")}} API と {{SVGElement("feTurbulence")}} ヨウソ
- CSS {{cssxref("blend-mode")}} データ型
- CSS {{cssxref("mix-blend-mode")}} プロパティ
