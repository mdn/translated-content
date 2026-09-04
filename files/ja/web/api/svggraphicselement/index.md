---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
l10n:
  sourceCommit: 34055723f9d2bbadfa8b0f0d27102e3adcedbd58
---

{{APIRef("SVG")}}

**`SVGGraphicsElement`** インターフェイスは、直接グループにグラフィックを描画することを主な目的とした SVG 要素を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したプロパティもあります。_

- {{domxref("SVGGraphicsElement.requiredExtensions")}} {{ReadOnlyInline}}
  - : {{domxref("SVGStringList")}} であり、指定された要素の {{SVGAttr("requiredExtensions")}} 属性を反映します。
- {{domxref("SVGGraphicsElement.systemLanguage")}} {{ReadOnlyInline}}
  - : {{domxref("SVGStringList")}} であり、指定された要素の {{SVGAttr("systemLanguage")}} 属性を反映します。
- {{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedTransformList")}} であり、指定された要素の {{cssxref("transform")}} プロパティおよび関連する {{SVGAttr("transform")}} 属性の計算値を反映します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したメソッドもあります。_

- {{domxref("SVGGraphicsElement.getBBox()")}}
  - : {{domxref("DOMRect")}} で、現在の要素の囲みボックスの計算値を返します。
- {{domxref("SVGGraphicsElement.getCTM()")}}
  - : {{domxref("DOMMatrix")}} で、現在の要素の座標系をその SVG ビューポートの座標系に変換する行列を返します。
- {{domxref("SVGGraphicsElement.getScreenCTM()")}}
  - : {{domxref("DOMMatrix")}} で、現在の要素の座標系を SVG 文書フラグメントの SVG ビューポートの座標系に変換する行列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
