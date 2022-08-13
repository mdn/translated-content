---
title: 'Document: pointermove イベント'
slug: Web/API/Document/pointermove_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - pointer
  - pointermove
  - イベント
  - ウェブ
  - ポインター
translation_of: Web/API/Document/pointermove_event
---
{{APIRef}}

`pointermove` はポインターの座標が変化し、かつブラウザーの[タッチ操作](/ja/docs/Web/CSS/touch-action)によってポインターが[キャンセル](/ja/docs/Web/Events/pointercancel)されていないときに発生します。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | はい                                                                                     |
| インターフェイス             | {{domxref("PointerEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}} |

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener('pointermove', (event) => {
  console.log('Pointer moved');
});
```

`onpointermove` イベントハンドラープロパティを使用した場合

```js
document.onpointermove = (event) => {
  console.log('Pointer moved');
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointermove-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointermove_event")}}

## 関連情報

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointermove_event", "pointermove")}} イベント
