---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

{{APIRef("Web Animations")}}

**`AnimationEvent`** インターフェイスは、[アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)に関する情報を提供するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : 指定された引数で `AnimationEvent` イベントを生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承されるプロパティもあります_。

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : 文字列で、このアニメーションを生成した {{cssxref("animation-name")}} の値が入ります。
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : `float` 値で、アニメーションが実行された時間の長さを秒単位で表し、イベントが発生したときは、アニメーションが停止していた時間は除外されます。 `animationstart` イベントでは、 `elapsedTime` は、ふつう `0.0` となりますが、 {{cssxref("animation-delay")}} が負の値であった場合は例外で、この場合はイベントは `elapsedTime` に `(-1 * delay)` が入った状態でイベントが発生します。
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 文字列で、 `'::'` で始まる、アニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が入ります。このアニメーションが擬似要素ではなく要素で実行されている場合は、空文字列 `''` になります。

## インスタンスメソッド

_親である {{domxref("Event")}} からメソッドを継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- アニメーションに関する CSS プロパティとアットルール: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
