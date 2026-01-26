---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

**`SVGAnimatedString`** インターフェイスは、それぞれの SVG 宣言からアニメーションできる文字列属性を表します。何らかの処理を行う前に SVG 属性を作成する必要があり、すべてはこの中に宣言されます。

## インスタンスプロパティ

- {{domxref("SVGAnimatedString.animVal")}} {{ReadOnlyInline}}
  - : これはアニメーション値を表す文字列です。指定された属性またはプロパティがアニメーションしている場合、その属性またはプロパティの現在のアニメーション値が含まれます。指定された属性またはプロパティが現在アニメーションしていない場合、 baseVal と同じ値が含まれます。
- {{domxref("SVGAnimatedString.baseVal")}}
  - : これは、基底値を 表す文字列です。 指定された属性のアニメーション適用前の基底値です。設定しようとすると DOMException が発生します。

## インスタンスメソッド

_`SVGAnimatedString` インターフェイスは固有のメソッドを提供していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
