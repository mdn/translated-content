---
title: SVGFEDropShadowElement
slug: Web/API/SVGFEDropShadowElement
l10n:
  sourceCommit: 7527a11a2b7fc7440aa6d518a9f5b4c061794ff3
---

{{APIRef("SVG")}}

**`SVGFEDropShadowElement`** インターフェイスは {{SVGElement("feDropShadow")}} 要素に対応します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親インターフェイスである {{domxref("SVGElement")}} から継承したプロパティもあります。_

- {{domxref("SVGFEDropShadowElement.dx")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedNumber")}} で、この要素の {{SVGAttr("dx")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.dy")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedNumber")}} で、この要素の {{SVGAttr("dy")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.height")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("height")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.in1")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("in")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.result")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("result")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.stdDeviationX")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedNumber")}} で、この要素の {{SVGAttr("stdDeviation")}} 属性の（おそらく自動的に計算された）X 成分に対応します。
- {{domxref("SVGFEDropShadowElement.stdDeviationY")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedNumber")}} で、この要素の {{SVGAttr("stdDeviation")}} 属性の（おそらく自動的に計算された）Y 成分にに対応します。
- {{domxref("SVGFEDropShadowElement.width")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("width")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.x")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("x")}} 属性に対応します。
- {{domxref("SVGFEDropShadowElement.y")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("y")}} 属性に対応します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したメソッドもあります。_

- {{domxref("SVGFEDropShadowElement.setStdDeviation()")}}
  - : `stdDeviation` 属性の値を設定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("feDropShadow")}}
