---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`SVGGradient`** インターフェイスは、{{domxref("SVGLinearGradientElement")}} および {{domxref("SVGRadialGradientElement")}} で使用される基本インターフェイスです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGElement")}} から継承したプロパティがあります。_

- {{domxref("SVGGradientElement.href")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} 属性に対応します。
- {{domxref("SVGGradientElement.gradientUnits")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("gradientUnits")}} 属性に対応します。このプロパティは {{domxref("SVGUnitTypes")}} で定義されている定数のいずれかを取ります。
- {{domxref("SVGGradientElement.gradientTransform")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedTransformList")}} で、この要素の {{SVGAttr("gradientTransform")}} 属性に対応します。
- {{domxref("SVGGradientElement.spreadMethod")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("spreadMethod")}} 属性に対応します。このインターフェイスで定義されている拡張方式のいずれかです。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを提供していませんが、親である {{domxref("SVGElement")}} のメソッドを実装しています。_

## 静的プロパティ

- `SVG_SPREADMETHOD_UNKNOWN` (0)
  - : この種類は、事前定義された種類には含まれていません。この種類の新しい値を定義したり、既存の値をこの種類に変換したりしようとすると、不正となります。
- `SVG_SPREADMETHOD_PAD` (1)
  - : `pad` の値に対応します。
- `SVG_SPREADMETHOD_REFLECT` (2)
  - : `reflect` の値に対応します。
- `SVG_SPREADMETHOD_REPEAT` (3)
  - : `repeat` の値に対応します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
