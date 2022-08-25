---
title: AnimationEvent
slug: Web/API/AnimationEvent
tags:
  - API
  - CSS アニメーション
  - Experimental
  - Interface
  - Reference
  - Web Animations
  - インターフェイス
translation_of: Web/API/AnimationEvent
---
{{SeeCompatTable}}{{APIRef("Web Animations API")}}

**`AnimationEvent`** インターフェイスは、[アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)に関する情報を提供するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : 指定された引数で `AnimationEvent` イベントを生成します。

## プロパティ

_親の {{domxref("Event")}} から継承されるプロパティもあります_。

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、この変化に関連付けられた {{cssxref("animation-name")}} CSS プロパティの値を含みます。
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : `float` 値で、アニメーションが実行された時間の長さを秒単位で表し、イベントが発生したときは、アニメーションが停止していた時間は除外されます。 `animationstart` イベントでは、 `elapsedTime` は、ふつう `0.0` となりますが、 {{cssxref("animation-delay")}} が負の値であった場合は例外で、この場合はイベントは `elapsedTime` に `(-1 * delay)` が入った状態でイベントが発生します。
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、 `'::'` で始まり、アニメーションが実行される [疑似要素](/ja/docs/Web/CSS/Pseudo-elements) の名前が入ります。このアニメーションが疑似要素ではなく要素で実行されている場合は、空文字列 `''` になります。

## メソッド

_親の {{domxref("Event")}} から継承されるメソッドもあります_。

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : 非推奨の {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} メソッドを使用して作成された `AnimationEvent` を初期化します。

## 仕様書

| 仕様書                                                                                                   | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#interface-animationevent", "AnimationEvent")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.AnimationEvent")}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- アニメーションに関する CSS プロパティとアット規則: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
