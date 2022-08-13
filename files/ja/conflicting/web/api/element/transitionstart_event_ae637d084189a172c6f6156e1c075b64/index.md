---
title: 'Window: transitionstart イベント'
slug: >-
  conflicting/Web/API/Element/transitionstart_event_ae637d084189a172c6f6156e1c075b64
tags:
  - API
  - Reference
  - Web
  - Window
  - events
  - transitionstart
  - イベント
translation_of: Web/API/Window/transitionstart_event
original_slug: Web/API/Window/transitionstart_event
---
{{APIRef}} {{SeeCompatTable}}

**`transitionstart`** イベントは、 [CSS トランジション](/ja/docs/CSS/Using_CSS_transitions)が実際に始まったとき、すなわち {{cssxref("transition-delay")}} が終了した後に発生します。

| バブリング                   | あり                                                                 |
| ---------------------------- | -------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                 |
| インターフェイス             | {{domxref("TransitionEvent")}}                             |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers.ontransitionstart")}} |

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: transitionstart イベント](/ja/docs/Web/API/HTMLElement/transitionstart_event)を参照してください。

## 例

次のコードは `transitionstart` イベントにリスナーを追加します。

```js
window.addEventListener('transitionstart', () => {
  console.log('Started transitioning');
});
```

同じですが、 {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} を `addEventListener()` の代わりに使用すると次のようになります。

```js
window.ontransitionrun = () => {
  console.log('Started transitioning');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/transitionstart_event#Live_example)

## 仕様書

| 仕様書                                                                                           | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('CSS3 Transitions', '#transitionstart', 'transitionstart')}} | {{Spec2('CSS3 Transitions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.transitionstart_event")}}

## 関連情報

- {{domxref("GlobalEventHandlers.ontransitionstart")}} イベントハンドラー
- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Document/transitionend_event", "transitionend")}}, {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/transitionstart_event", "transitionstart")}}
