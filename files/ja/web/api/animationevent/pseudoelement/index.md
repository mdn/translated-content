---
title: AnimationEvent.pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
l10n:
  sourceCommit: ebeac1d8438d3150ef4d16716061d8736af25e7a
---

{{APIRef("Web Animations API")}}

## 概要

**`AnimationEvent.pseudoElement`** は読み取り専用のプロパティです。 `'::'` で始まる文字列で、このアニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前を示します。
このアニメーションが擬似要素ではなく、要素上で動作している場合は、空文字列 `''` になります。

## 値

`'::'` で始まる文字列で、このアニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Chromium Issue 437132](https://bugs.chromium.org/p/chromium/issues/detail?id=437132)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- アニメーション関連の CSS プロパティとアットルール: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- 所属先の {{domxref("AnimationEvent")}} インターフェイス
