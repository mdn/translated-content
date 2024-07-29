---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
---

{{APIRef("SVG")}}

**`SVGGraphicsElement`** インターフェイスは、直接グループにグラフィックを描画することを主な目的とした SVG 要素を表します。

{{InheritanceDiagram(600, 120)}}

> [!NOTE]
> このインターフェイスは SVG 2 で導入され、 SVG 1.1 で導入された {{domxref("SVGLocatable")}} および {{domxref("SVGTransformable")}} インターフェイスを置き換えています。

## プロパティ

_このインターフェイスは親である {{domxref("SVGElement")}} からプロパティを継承しています。_

- {{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedTransformList")}} で、指定された要素の {{cssxref("transform")}} プロパティおよび関連する {{SVGAttr("transform")}} 属性の計算値を反映します。

## メソッド

_このインターフェイスは親である {{domxref("SVGElement")}} からメソッドを継承しています。_

- {{domxref("SVGGraphicsElement.getBBox()")}}
  - : {{domxref("DOMRect")}} で、現在の要素の計算上の囲みボックスを返します。
- {{domxref("SVGGraphicsElement.getCTM()")}}
  - : {{domxref("DOMMatrix")}} で、現在の要素の座標系をその SVG ビューポートの座標系に変換する行列を返します。
- {{domxref("SVGGraphicsElement.getScreenCTM()")}}
  - : {{domxref("DOMMatrix")}} で、現在の要素の座標系を SVG 文書フラグメントの SVG ビューポートの座標系に変換する行列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
