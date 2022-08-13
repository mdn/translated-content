---
title: 'Document: pointerleave イベント'
slug: Web/API/Document/pointerleave_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerleave
  - pointerleave
  - イベント
translation_of: Web/API/Document/pointerleave_event
---
{{APIRef}}

`pointerleave` イベントは、ポインティングデバイスが要素のヒットテスト領域を出たときに発生します。ペンデバイスでは、このイベントはデジタイザーが検出可能なホバー範囲をスタイラスが離れたときに発生します。

| バブリング                   | なし                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                   |
| インターフェイス             | {{domxref("PointerEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} |

## 例

`addEventListener()` の使用例:

```js
document.addEventListener('pointerleave', (event) => {
  console.log('Pointer left element');
});
```

`onpointerleave` イベントハンドラープロパティの使用例:

```js
document.onpointerleave = (event) => {
  console.log('Pointer left element');
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerleave-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerleave_event")}}

## 関連情報

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} イベント
