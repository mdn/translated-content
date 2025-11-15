---
title: SVGClipPathElement
slug: Web/API/SVGClipPathElement
l10n:
  sourceCommit: 1c24dd81053cd34f393ce2c4b2ac071886007625
---

{{APIRef("SVG")}}

**`SVGClipPathElement`** インターフェイスは、 {{SVGElement("clipPath")}} 要素のプロパティへのアクセス、およびそれらを操作するためのメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したプロパティもあります。_

- {{domxref("SVGClipPathElement.clipPathUnits")}} {{ReadOnlyInline}}
  - : 関連付けられた {{SVGElement("clipPath")}} 要素の {{SVGAttr("clipPathUnits")}} 属性に対応する {{domxref("SVGAnimatedEnumeration")}} を返します。{{domxref("SVGUnitTypes")}} で定義されている定数のいずれかを引数として取ります。
- {{domxref("SVGClipPathElement.transform")}} {{ReadOnlyInline}}
  - : 関連付けられた {{SVGElement("clipPath")}} 要素の {{SVGAttr("transform")}} 属性に対応する {{domxref("SVGAnimatedTransformList")}} を返します。

## インスタンスメソッド

_このインターフェイスでは固有のメソッドを実装していませんが、親である {{domxref("SVGElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("clipPath")}}
- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
