---
title: "KeyframeEffect: iterationComposite プロパティ"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
page-type: web-api-instance-property
browser-compat: api.KeyframeEffect.iterationComposite
---

{{ APIRef("Web Animations") }}

The **`iterationComposite`** property of a {{domxref("KeyframeEffect")}} resolves how the animation's property value changes accumulate or override each other upon each of the animation's iterations.

## 値

One of the following:

- `replace`
  - : The `keyframeEffect` value produced is independent of the current iteration.
- `accumulate`
  - : Subsequent iterations of the `keyframeEffect` build on the final value of the previous iteration.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- Property of both {{domxref("KeyframeEffect")}} objects.
