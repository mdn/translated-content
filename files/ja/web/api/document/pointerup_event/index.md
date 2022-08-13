---
title: 'Document: pointerup event'
slug: Web/API/Document/pointerup_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerup
  - pointerup
  - イベント
  - ポインター
translation_of: Web/API/Document/pointerup_event
---
{{APIRef}}

`pointerup` イベントは、ポインターがアクティブではなくなったときに発生します。

| バブリング                   | あり                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------- |
| キャンセル可能               | はい                                                                             |
| インターフェイス             | {{domxref("PointerEvent")}}                                             |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} |

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener('pointerup', (event) => {
  console.log('Pointer up');
});
```

`onpointerup` イベントハンドラープロパティを使用した場合

```js
document.onpointerup = (event) => {
  console.log('Pointer up');
};
```

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerup-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerup_event")}}

## 関連情報

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerup_event", "pointerup")}} イベント
