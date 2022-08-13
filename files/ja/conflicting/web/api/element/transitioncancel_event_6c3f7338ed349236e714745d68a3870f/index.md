---
title: 'Window: transitioncancel イベント'
slug: >-
  conflicting/Web/API/Element/transitioncancel_event_6c3f7338ed349236e714745d68a3870f
tags:
  - API
  - Event
  - Reference
  - Web
  - Window
  - events
  - transitioncancel
  - イベント
translation_of: Web/API/Window/transitioncancel_event
original_slug: Web/API/Window/transitioncancel_event
---
{{APIRef}}{{SeeCompatTable}}

**`transitioncancel`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)がキャンセルされたときに発生します。

詳しくは {{domxref("GlobalEventHandlers.ontransitioncancel")}} をご覧ください。

| バブリング                   | あり                                                                     |
| ---------------------------- | ------------------------------------------------------------------------ |
| キャンセル                   | 不可                                                                     |
| インターフェイス             | {{domxref("TransitionEvent")}}                                 |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers.ontransitioncancel")}} |

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: transitioncancel イベント](/ja/docs/Web/API/HTMLElement/transitioncancel_event)を参照してください。

## 例

このコードは、リスナーに `transitioncancel` イベントを追加します。

```js
document.addEventListener('transitioncancel', () => {
  console.log('Transition canceled');
});
```

同様に、 {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} プロパティを `addEventListener()` の代わりに使用した例です。

```js
document.ontransitioncancel = () => {
  console.log('Transition canceled');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/transitioncancel_event#Live_example)

## 仕様書

| 仕様書                                                                                           | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('CSS3 Transitions', '#transitioncancel', 'transitioncancel')}} | {{Spec2('CSS3 Transitions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Document.transitioncancel_event")}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitioncancel")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitionend_event", "transitionend")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/transitioncancel_event", "transitioncancel")}}
