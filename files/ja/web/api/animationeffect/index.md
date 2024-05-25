---
title: AnimationEffect
slug: Web/API/AnimationEffect
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ APIRef("Web Animations") }}

`AnimationEffect` は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のインターフェイスで、アニメーション効果を表すインターフェイスです。

`AnimationEffect` は抽象インターフェイスなので、直接インスタンス化することはできません。しかし、 {{domxref("KeyframeEffect")}} のような具体的なインターフェイスはこれを継承しており、これらのインターフェイスのインスタンスは {{domxref("Animation")}} オブジェクトに渡して再生することができますし、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)や[トランジション](/ja/docs/Web/CSS/CSS_transitions)でも使うことができます。

## インスタンスメソッド

- {{domxref("AnimationEffect.getTiming()")}}
  - : アニメーションのすべてのタイミング値を含む、アニメーションに関連付けられたオブジェクトを返します。
- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : この `AnimationEffect` のタイミングプロパティの計算値を返します。
- {{domxref("AnimationEffect.updateTiming()")}}
  - : この `AnimationEffect` のタイミングプロパティの指定値を更新します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.effect")}}
