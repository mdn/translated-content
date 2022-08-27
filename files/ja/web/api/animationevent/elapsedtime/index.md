---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
  - API
  - AnimationEvent
  - CSSOM
  - Experimental
  - Property
  - Reference
  - Web Animations
  - プロパティ
translation_of: Web/API/AnimationEvent/elapsedTime
---
{{SeeCompatTable}}{{ apiref("Web Animations API") }}

**`AnimationEvent.elapsedTime`** は読み取り専用のプロパティで、アニメーションが開始されてからの秒数を `float` 型で表します。このイベントが発生したとき、アニメーションが停止した場合を除いて常に設定されます。 {{domxref("HTMLElement/animationstart_event", "animationstart")}} イベントにおいては `elapsedTime` は `0.0` になりますが、 {{cssxref("animation-delay")}} が負の値の場合は、このイベントは `elapsedTime` が `(-1 * `_待ち時間_`)` であるときに発生します。.

## 構文

```
time = AnimationEvent.elapsedTime
```

## 仕様書

| 仕様書                                                                                                                               | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{ SpecName('CSS3 Animations', '#dom-animationevent-elapsedtime', 'AnimationEvent.elapsedTime') }} | {{ Spec2('CSS3 Animations')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.AnimationEvent.elapsedTime")}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- アニメーションに関する CSS プロパティとアット規則: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- 所属先の {{domxref("AnimationEvent")}} インターフェイス
