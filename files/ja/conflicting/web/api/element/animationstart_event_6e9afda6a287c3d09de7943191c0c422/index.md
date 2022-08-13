---
title: 'Window: animationstart イベント'
slug: >-
  conflicting/Web/API/Element/animationstart_event_6e9afda6a287c3d09de7943191c0c422
tags:
  - API
  - Animation
  - CSS animation
  - CSS アニメーション
  - Reference
  - Web
  - Window
  - イベント
translation_of: Web/API/Window/animationstart_event
original_slug: Web/API/Window/animationstart_event
---
{{APIRef}}

**`animationstart`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)が開始したときに発生します。 {{cssxref("animation-delay")}} がある場合、このイベントは待ち時間が経過したときに一度発生します。待ち時間が負の数の場合、イベントは {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} が待ち時間の絶対値と等しくなったときに発生します (および、関連して、アニメーションはシーケンスの中でそのタイムインデックスに再生が始まります)。

| バブリング                   | あり                                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                                         |
| インターフェイス             | {{domxref("AnimationEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onanimationstart","onanimationstart")}} |

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationstart イベント](/ja/docs/Web/API/HTMLElement/animationstart_event)を参照してください。

## 例

このコードは `animationstart` イベントを待ち受けし、イベント発生時にメッセージを記録します。

```js
window.addEventListener('animationstart', () => {
  console.log('Animation started');
});
```

同様に、 `onanimationstart` を使用するとこうなります。

```js
window.onanimationstart = () => {
  console.log('Animation started');
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationstart_event#Live_example)

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationstart")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.animationstart_event")}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Window/animationend_event", "animationend")}}, {{domxref("Window/animationiteration_event", "animationiteration")}}, {{domxref("Window/animationcancel_event", "animationcancel")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationstart_event", "animationstart")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationstart_event", "animationstart")}}
