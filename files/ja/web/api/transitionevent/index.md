---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("CSSOM")}}

**`TransitionEvent`** インターフェイスは、[トランジション](/ja/docs/Web/CSS/Guides/Transitions/Using)に関する情報を提供するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}
  - : 指定された引数で `TransitionEvent` イベントを作成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : 文字列で、このトランジションに関連付けられた CSS プロパティの名前が入ります。
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : `float` で、このイベントが発生した時点でトランジションが実行している時間を秒単位で表します。この値は {{cssxref("transition-delay")}} プロパティの影響を受けません。
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 文字列で、 `::` で始まる、アニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)の名前が入ります。トランジションが擬似要素上ではなく要素上で実行されている場合は、空文字列 `''` になります。

## `TransitionEvent` の種類

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)が中断されたときに発生します。
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)の実行が終了したときに発生します。
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)が生成されたとき、実行中のトランジションに追加されたときに発生し、必ずしも開始時に発生するとは限りません。
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : {{domxref("Event")}} で、 [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)の推移が開始したときに発生します。

## インスタンスメソッド

_親である {{domxref("Event")}} から継承したプロパティもあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/Guides/Transitions/Using)
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
