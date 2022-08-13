---
title: 'Window: animationend event'
slug: >-
  conflicting/Web/API/Element/animationend_event_f8c6f369fef1afdf76fa8a403994e66f
tags:
  - API
  - Animation
  - CSS Animations
  - CSS アニメーション
  - Event
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/animationend_event
original_slug: Web/API/Window/animationend_event
---
{{APIRef}}

**`animationend`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が完了したときに発生します。アニメーションが完了前に中止された場合、例えば要素が DOM から削除されたりアニメーションがヨウ素から削除されたりした場合、 `animationend` イベントは発生しません。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                                     |
| インターフェイス             | {{domxref("AnimationEvent")}}                                                 |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onanimationend","onanimationend")}} |

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationend イベント](/ja/docs/Web/API/HTMLElement/animationend_event)を参照してください。

## 例

この例は `animationend` イベントを待ち受けます。

```js
window.addEventListener('animationend', () => {
  console.log('アニメーション終了');
});
```

同様に、 `onanimationend` イベントハンドラープロパティを使用するとこうなります。

```js
window.onanimationend = () => {
  console.log('アニメーション終了');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationend_event#Live_example)

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationend")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.animationend_event")}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Window/animationstart_event", "animationstart")}}, {{domxref("Window/animationcancel_event", "animationcancel")}}, {{domxref("Window/animationiteration_event", "animationiteration")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationend_event", "animationend")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationend_event", "animationend")}}
