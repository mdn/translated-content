---
title: "SVGRectElement: height プロパティ"
short-title: height
slug: Web/API/SVGRectElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`height`** は {{domxref("SVGRectElement")}} インターフェイスの読み取り専用のプロパティで、 SVG 矩形の垂直方向のサイズを {{domxref("SVGAnimatedLength")}} として表します。長さは、y 軸方向のユーザー座標系の単位で表されます。構文は、 [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

これは、 {{SVGElement("rect")}} 要素のプレゼンテーション属性 {{SVGAttr("height")}} を反映します。 CSS のプロパティ {{cssxref("height")}} が、SVG のプレゼンテーション属性 `height` よりも優先されるため、この値は要素の実際のサイズを反映しない場合があります。既定値は `0` です。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const rectangle = document.querySelector("rect");
const rectHeight = rectangle.height;
console.log(rectHeight.baseVal.value); // `height` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("DOMRect.height")}}
- {{domxref("SVGRectElement.width")}}
