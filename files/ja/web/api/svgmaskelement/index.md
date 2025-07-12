---
title: SVGMaskElement
slug: Web/API/SVGMaskElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

**`SVGMaskElement`** インターフェイスは、 {{SVGElement("mask")}} 要素のプロパティへのアクセス、およびそれらを操作するためのメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したプロパティもあります。_

- {{domxref("SVGMaskElement.maskUnits")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("maskUnits")}} 属性に対応します。 {{domxref("SVGUnitTypes")}} で定義された定数のいずれかを取ります。
- {{domxref("SVGMaskElement.maskContentUnits")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("maskContentUnits")}} 属性に対応します。 {{domxref("SVGUnitTypes")}} で定義された定数のいずれかを取ります。
- {{domxref("SVGMaskElement.x")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("x")}} 属性に対応します。
- {{domxref("SVGMaskElement.y")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("y")}} 属性に対応します。
- {{domxref("SVGMaskElement.width")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("width")}} 属性に対応します。
- {{domxref("SVGMaskElement.height")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この {{SVGElement("mask")}} 要素の {{SVGAttr("height")}} 属性に対応します。

## インスタンスメソッド

_このインターフェイスには固有のメソッドは実装されていませんが、親である {{domxref("SVGElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("mask")}}
