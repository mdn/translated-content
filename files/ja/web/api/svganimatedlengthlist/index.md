---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`SVGAnimatedLengthList`** インターフェイスは {{domxref("SVGLengthList")}} 型のアニメーションする属性に使用されます。

## インスタンスプロパティ

- {{domxref("SVGAnimatedLengthList.baseVal")}} {{ReadOnlyInline}}
  - : {{domxref("SVGLengthList")}} で、指定された属性のアニメーションを適用する前の基底値を表します。
- {{domxref("SVGAnimatedLengthList.animVal")}} {{ReadOnlyInline}}
  - : 読み取り専用の {{domxref("SVGLengthList")}} で、その属性の現在のアニメーション値を表します。その属性が現在アニメーションしていない場合、この {{domxref("SVGLengthList")}} は `baseVal` と同じ内容を持ちます。`animVal` が参照するオブジェクトは、属性がアニメーションしていない場合でも、`baseVal` が参照するオブジェクトとは常に異なります。

## インスタンスメソッド

_`SVGAnimatedLengthList` インターフェイスは固有のメソッドを提供していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
