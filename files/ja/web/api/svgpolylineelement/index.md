---
title: SVGPolylineElement
slug: Web/API/SVGPolylineElement
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`SVGPolylineElement`** インターフェイスは {{SVGElement("polyline")}} 要素のプロパティへのアクセスと、それらを操作するメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したプロパティもあります。_

- {{domxref("SVGPolylineElement.animatedPoints")}} {{ReadOnlyInline}}
  - : {{DOMxRef("SVGPointList")}} で、この要素の {{SVGAttr("points")}} 属性のアニメーションする値を表します。{{SVGAttr("points")}} 属性がアニメーションしない場合、この要素には `points` プロパティと同じ値が含まれます。
- {{domxref("SVGPolylineElement.points")}}
  - : {{DOMxRef("SVGPointList")}} で、この要素の {{SVGAttr("points")}} 属性のベース値（つまり静的な値）を表します。{{DOMxRef("SVGPointList")}} オブジェクトによる変更は {{SVGAttr("points")}} 属性に反映され、その逆も同様です。

## インスタンスメソッド

_このインターフェイスには固有のメソッドは実装されていませんが、親である {{domxref("SVGGeometryElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("polyline")}}
