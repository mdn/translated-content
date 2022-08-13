---
title: 'Window: animationiteration event'
slug: >-
  conflicting/Web/API/Element/animationiteration_event_f15477c7069b97dbfffaa96214db99f0
tags:
  - API
  - Animation
  - CSS Animations
  - CSS アニメーション
  - Event
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/animationiteration_event
original_slug: Web/API/Window/animationiteration_event
---
{{APIRef}}

**`animationiteration`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の反復が 1 回分終了し、次の回が始まったときに発生します。このイベントは {{domxref("Window/animationend_event", "animationend")}} イベントと同時には発生せず、従って `animation-iteration-count` が 1 のアニメーションでは発生しません。

| バブリング                   | あり                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                                                     |
| インターフェイス             | {{domxref("AnimationEvent")}}                                                                 |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}} |

このイベントの本来の対象は、トランジションが適用された {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントについて完全な詳細は、 [HTMLElement: animationiteration イベント](/ja/docs/Web/API/HTMLElement/animationiteration_event)を参照してください。

## 例

このコードは `animationiteration` を使用して、アニメーションの反復が終了した回数を追跡します。

```js
let iterationCount = 0;

window.addEventListener('animationiteration', () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
});
```

同様に、 `onanimationiteration` イベントハンドラープロパティを使用するとこうなります。

```js
let iterationCount = 0;

window.onanimationiteration = () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
};
```

[このイベントのライブデモを参照してください。](/ja/docs/Web/API/HTMLElement/animationiteration_event#Live_example)

## 仕様書

| 仕様書                                                                                                   | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName("CSS3 Animations", "#eventdef-animationevent-animationiteration")}} | {{Spec2("CSS3 Animations")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.animationiteration_event")}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Window/animationstart_event", "animationstart")}}, {{domxref("Window/animationend_event", "animationend")}}, {{domxref("Window/animationcancel_event", "animationcancel")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationiteration_event", "animationiteration")}}
- {{domxref("HTMLElement")}} を対象としたこのイベント: {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
