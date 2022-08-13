---
title: 'Document: pointerenter イベント'
slug: Web/API/Document/pointerenter_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerenter
  - pointerenter
  - イベント
translation_of: Web/API/Document/pointerenter_event
---
{{APIRef}}

`pointerenter` イベントは、ポインティングデバイスが要素またはその子孫のヒットテスト領域に入ったときに発生します。ホバーに対応していない機器では {{domxref("Document/pointerdown_event", "pointerdown")}} イベントの結果として移動した場合も含みます ({{domxref("Document/pointerdown_event", "pointerdown")}} を参照)。

| バブリング                   | なし                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                   |
| インターフェイス             | {{domxref("PointerEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} |

## 例

`addEventListener()` の使用例:

```js
document.addEventListener('pointerenter', (event) => {
  console.log('Pointer entered element');
});
```

`onpointerenter` イベントハンドラープロパティの使用例:

```js
document.onpointerenter = (event) => {
  console.log('Pointer entered element');
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerenter-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerenter_event")}}

## 関連情報

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} イベント
