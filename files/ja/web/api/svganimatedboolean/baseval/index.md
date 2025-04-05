---
title: "SVGAnimatedBoolean: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedBoolean/baseVal
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedBoolean")}} インターフェイスのプロパティで、関連付けられたアニメーション可能な論理型の SVG 属性の基底（アニメーションなし）状態の値です。アニメーションが適用されていない場合、関連付けられたアニメーション可能な論理型属性の値を反映します。

[`preserveAlpha`](/ja/docs/Web/SVG/Reference/Attribute/preserveAlpha) などの一部の論理型 SVG 属性はアニメーションが可能です。 このような場合、属性が `false` に設定されている場合、 `SVGAnimatedBoolean.baseVal` プロパティは `false` となり、省略されている場合、既定では `false` となり、継承可能な場合は `false` を継承します。 それ以外の場合は、値は `true` となります。

## 値

論理値です。反映された属性の基底値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGElement")}}
- {{domxref("SVGAnimationElement")}}
