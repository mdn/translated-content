---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

The **`SVGTextPathElement`** interface corresponds to the {{SVGElement("textPath")}} element.

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親インターフェイスである {{domxref("SVGTextContentElement")}} から継承したプロパティもあります。_

- {{domxref("SVGTextPathElement.href")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedString")}} で、この要素の {{SVGAttr("href")}} または {{SVGAttr("xlink:href")}} 属性に対応します。
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}} で、この要素の {{SVGAttr("startOffset")}} 属性の X 成分に対応します。
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("method")}} 属性に対応します。このインターフェイスで定義されている `TEXTPATH_METHODTYPE_*` 定数のいずれかを取ります。
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}} で、この要素の {{SVGAttr("spacing")}} 属性に対応します。このインターフェイスで定義されている `TEXTPATH_SPACINGTYPE_*` 定数のいずれかを取ります。

## インスタンスメソッド

_胃のインターフェイスは固有のメソッドを提供していませんが、親である {{domxref("SVGTextContentElement")}} のメソッドを実装しています。_

## 静的プロパティ

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : この型は、事前定義された型には含まれていません。この型の新しい値を定義したり、既存の値をこの型に変更しようとしたりすることは不正です。
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : `align` の値に対応します。
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : `stretch` の値に対応します。
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : この型は、事前定義された型には含まれていません。この型の新しい値を定義したり、既存の値をこの型に変更しようとしたりすることは不正です。
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : `auto` の値に対応します。
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : `exact` の値に対応します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("textPath")}}
