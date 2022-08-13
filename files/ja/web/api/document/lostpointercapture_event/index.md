---
title: 'Document: lostpointercapture イベント'
slug: Web/API/Document/lostpointercapture_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - lostpointercapture
  - イベント
translation_of: Web/API/Document/lostpointercapture_event
---
{{APIRef}}

**`lostpointercapture`** イベントは、[ポインターのキャプチャ](/ja/docs/Web/API/Pointer_events#Pointer_capture)が解放されたときに発生します。

| バブリング                   | なし                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                                   |
| インターフェイス             | {{domxref("PointerEvent")}}                                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}} |

## 例

この例は `lostpointercapture` イベントを待ち受けし、 `pointerdown` でその要素のためにポインターをキャプチャします。後でユーザーがポインターを解放したとき、 `lostpointercapture` イベントが発生します。

```js
const para = document.querySelector('p');

document.addEventListener('lostpointercapture', () => {
  console.log('I\'ve been released!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

同じ例ですが、 `onlostpointercapture` イベントハンドラーを使用して行います。

```js
const para = document.querySelector('p');

document.onlostpointercapture = () => {
  console.log('I\'ve been released!')
};

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## 仕様書

| 仕様書                                                                               | 状態                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-lostpointercapture-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.lostpointercapture_event")}}

## 関連情報

- 関連イベント

  - {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Document/pointerover_event", "pointerover")}}
  - {{domxref("Document/pointerenter_event", "pointerenter")}}
  - {{domxref("Document/pointerdown_event", "pointerdown")}}
  - {{domxref("Document/pointermove_event", "pointermove")}}
  - {{domxref("Document/pointerup_event", "pointerup")}}
  - {{domxref("Document/pointercancel_event", "pointercancel")}}
  - {{domxref("Document/pointerout_event", "pointerout")}}
  - {{domxref("Document/pointerleave_event", "pointerleave")}}

- {{domxref("GlobalEventHandlers.onlostpointercapture")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}} イベント
