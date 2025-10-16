---
title: "SVGAnimatedBoolean: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedBoolean")}} インターフェイスの読み取り専用プロパティで、この SVG 要素に関連付けられたアニメーション可能な論理型の SVG 属性の現在のアニメーション値を表します。 関連付けられた属性が現在アニメーションしていない場合、 `animVal` は {{domxref("SVGAnimatedBoolean.baseVal")}} と同じ値になります。

[`preserveAlpha`](/ja/docs/Web/SVG/Reference/Attribute/preserveAlpha) などの一部の論理型 SVG 属性はアニメーションできます。 このような場合、属性値が true に解決すると、 `SVGAnimatedBoolean.animVal` プロパティの値は `true` になります。 それ以外の場合は、値は `false` になります。

## 値

論理型です。アニメーション可能な論理型属性の値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
