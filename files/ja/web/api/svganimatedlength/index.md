---
title: SVGAnimatedLength
slug: Web/API/SVGAnimatedLength
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`SVGAnimatedLength`** インターフェイスは、 [\<length>](/ja/docs/Web/SVG/Guides/Content_type#length) 型における、アニメーション可能な属性値を表します。

## インスタンスプロパティ

- {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} {{ReadOnlyInline}}
  - : {{domxref("SVGLength")}} で、アニメーションを適用する前の指定された属性の基底値を表します。
- {{domxref("SVGAnimatedLength.animVal", "animVal")}} {{ReadOnlyInline}}
  - : 指定された属性またはプロパティがアニメーションしている場合、 {{domxref("SVGLength")}} でその属性またはプロパティの現在のアニメーション値になります。
    指定された属性またはプロパティが現在アニメーションしていない場合、 {{domxref("SVGLength")}} で `baseVal` と同じ値になります。

## インスタンスメソッド

_このインターフェイスは、固有のメソッドを実装していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGLength")}}
