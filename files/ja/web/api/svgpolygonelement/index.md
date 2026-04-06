---
title: SVGPolygonElement
slug: Web/API/SVGPolygonElement
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`SVGPolygonElement`** インターフェイスは、{{SVGElement("polygon")}} 要素のプロパティへのアクセス機能に加え、それらを操作するためのメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したプロパティもあります。_

- {{domxref("SVGPolygonElement.animatedPoints")}} {{ReadOnlyInline}}
  - : {{DOMxRef("SVGPointList")}} で、この要素の {{SVGAttr("points")}} 属性のアニメーション値を表します。この {{SVGAttr("points")}} 属性がアニメーションしない場合、ここには `points` プロパティと同じ値が入ります。
- {{domxref("SVGPolygonElement.points")}}
  - : {{DOMxRef("SVGPointList")}} で、この要素の {{SVGAttr("points")}} 属性のベース値（つまり静的な値）を表します。 {{DOMxRef("SVGPointList")}} オブジェクトを通して変更をすると {{SVGAttr("points")}} 属性に反映され、逆も同様です。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、親である {{domxref("SVGGeometryElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("polygon")}}
