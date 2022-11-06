---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("Web Animations API")}}

**`AnimationEvent.elapsedTime`** は読み取り専用のプロパティで、アニメーションが開始されてからの秒数を `float` 型で表します。このイベントが発生したとき、アニメーションが停止した場合を除いて常に設定されます。 {{domxref("Element/animationstart_event", "animationstart")}} イベントにおいては `elapsedTime` は `0.0` になりますが、 {{cssxref("animation-delay")}} が負の値の場合は、このイベントは `elapsedTime` が `(-1 * 待ち時間 )` であるときに発生します。

## 値

`float` 型で、時間の量を秒単位で指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- アニメーションに関する CSS プロパティとアットルール: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- 所属先の {{domxref("AnimationEvent")}} インターフェイス
