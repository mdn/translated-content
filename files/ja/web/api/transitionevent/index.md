---
title: TransitionEvent
slug: Web/API/TransitionEvent
---

{{APIRef("CSSOM")}} {{SeeCompatTable}}

**`TransitionEvent`** インターフェイスは、[トランジション](/ja/docs/Web/Guide/CSS/Using_CSS_transitions)に関する情報を提供するイベントを表します。

## コンストラクター

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}
  - : 指定された引数で `TransitionEvent` イベントを作成します。

## プロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("TransitionEvent.propertyName")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、トランジションに関連付けられた CSS プロパティの名前が入ります。
- {{domxref("TransitionEvent.elapsedTime")}} {{readonlyInline}}
  - : `float` で、このイベントが発生した時点でトランジションが実行している時間を秒単位で表します。この値は {{cssxref("transition-delay")}} プロパティの影響を受けません。
- {{domxref("TransitionEvent.pseudoElement")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、 `::` で始まる、アニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が入ります。トランジションが擬似要素上ではなく要素上で実行されている場合は、空文字列 `''` になります。

## `TransitionEvent` の種類

- {{domxref("HTMLElement.transitioncancel_event", "transitioncancel")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)が中断されたときに発生します。
- {{domxref("HTMLElement.transitionend_event", "transitionend")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)の実行が終了したときに発生します。
- {{domxref("HTMLElement.transitionrun_event", "transitionrun")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)が生成されたとき、実行中のトランジションに追加されたときに発生し、必ずしも開始時に発生するとは限りません。
- {{domxref("HTMLElement.transitionstart_event", "transitionstart")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)の推移が開始したときに発生します。

## メソッド

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("TransitionEvent.initTransitionEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : 非推奨の {{domxref("Document.createEvent()", "Document.createEvent(\"TransitionEvent\")")}} メソッドを使用して生成された `TransitionEvent` を初期化します。

## 仕様書

| 仕様書                                                                                                           | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{ SpecName('CSS3 Transitions', '#interface-transitionevent', 'TransitionEvent') }} | {{ Spec2('CSS3 Transitions') }} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.TransitionEvent")}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/Guide/CSS/Using_CSS_transitions)
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}.
