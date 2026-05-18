---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`SVGFEDisplacementMapElement`** インターフェイスは {{SVGElement("feDisplacementMap")}} 要素に対応します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親インターフェイスである {{domxref("SVGElement")}} から継承したプロパティもあります。_

- {{domxref("SVGFEDisplacementMapElement.height")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("height")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.in1")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("in")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.in2")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("in2")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.result")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("result")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.scale")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedNumber")}} で、この要素の {{SVGAttr("scale")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.width")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("width")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.x")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("x")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.xChannelSelector")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("xChannelSelector")}} 属性に対応します。このインターフェイスで定義されている `SVG_CHANNEL_*` 定数のいずれかを取ります。
- {{domxref("SVGFEDisplacementMapElement.y")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("y")}} 属性に対応します。
- {{domxref("SVGFEDisplacementMapElement.yChannelSelector")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("yChannelSelector")}} 属性に対応します。このインターフェイスで定義されている `SVG_CHANNEL_*` 定数のいずれかを取ります。

## インスタンスメソッド

_このインターフェイスには固有のメソッドがありませんが、親である {{domxref("SVGElement")}} から継承したメソッドがあります。_

## 静的プロパティ

- `SVG_CHANNEL_UNKNOWN` (0)
  - : この型は、事前定義された型には含まれません。この型の新しい値を定義したり、既存の値をこの型に変換したりしようとすると、無効となります。
- `SVG_CHANNEL_R` (1)
  - : `R` の値に対応します。
- `SVG_CHANNEL_G` (2)
  - : `G` の値に対応します。
- `SVG_CHANNEL_B` (3)
  - : `B` の値に対応します。
- `SVG_CHANNEL_A` (4)
  - : `A` の値に対応します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("feDisplacementMap")}}
