---
title: "SVGRectElement: x プロパティ"
short-title: x
slug: Web/API/SVGRectElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x`** は {{domxref("SVGRectElement")}} インターフェイスの読み取り専用のプロパティで、 SVG 矩形の位置の水平座標を {{domxref("SVGAnimatedLength")}} として表します。 `<coordinate>` は、ユーザー座標系で原点からの x 軸方向の距離です。構文は、 [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

これは、{{SVGElement("rect")}} 要素の幾何属性値 {{SVGAttr("x")}} を反映します。CSS のプロパティ {{cssxref("x")}} が、SVG の幾何属性 `x` よりも優先されるため、この値は要素の外観を反映しない場合があります。既定値は `0` です。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const rectangle = document.querySelector("rect");
const leftPosition = rectangle.x;
console.log(leftPosition.baseVal.value); // `x` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("DOMRect.x")}}
- {{domxref("SVGRectElement.y")}}
