---
title: SVGGeometryElement
slug: Web/API/SVGGeometryElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

`SVGGeometryElement` インターフェイスは、同等のパスによる幾何形状によってレンダリングが定義され、塗りつぶしやストロークが可能な SVG 要素を表します。これには、パスおよび基本的な図形が含まれます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したプロパティもあります。_

- {{domxref("SVGGeometryElement.pathLength")}} {{ReadOnlyInline}}
  - : このプロパティは {{SVGAttr("pathLength")}} 属性を反映します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGGraphicsElement")}} から継承したメソッドもあります。_

- {{domxref("SVGGeometryElement.isPointInFill()")}}
  - : 指定された点が要素の塗りつぶし図形内に含まれるかどうかを判断します。通常の衝突検査ルールが適用されます。要素の {{cssxref("pointer-events")}} プロパティの値によって、この点が塗りつぶし図形内に含まれるとみなされるかどうかが決まります。
- {{domxref("SVGGeometryElement.isPointInStroke()")}}
  - : 指定された点が要素のストローク図形内にあるかどうかを判断します。通常の衝突検査ルールが適用されます。要素の {{cssxref("pointer-events")}} プロパティの値によって、その点がストローク内にあるとみなされるかどうかが決まります。
- {{domxref("SVGGeometryElement.getTotalLength()")}}
  - : ユーザーエージェントが計算した、パス全体の長さをユーザー単位の値として返します。
- {{domxref("SVGGeometryElement.getPointAtLength()")}}
  - : パス上の指定された距離にある点を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
