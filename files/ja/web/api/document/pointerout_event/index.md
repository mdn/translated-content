---
title: 'Document: pointerout イベント'
slug: Web/API/Document/pointerout_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerout
  - pointerout
  - イベント
translation_of: Web/API/Document/pointerout_event
---
{{APIRef}}

`pointerout` イベントはいくつかの理由で発生します。ポインティングデバイスが要素の*ヒットテスト*境界を出たとき、ホバーに対応していない端末で {{domxref("Document/pointerup_event", "pointerup")}} イベントが発生したとき ({{domxref("Document/pointerup_event", "pointerup")}} を参照)、 {{domxref("Document/pointercancel_event", "pointercancel")}} イベントが発生した後 ({{domxref("Document/pointercancel_event", "pointercancel")}} を参照)、スタイラスペンがデジタイザーで検出可能なホバー範囲を離れたとき、などです。

| バブリング                   | あり                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| キャンセル可能               | はい                                                                                 |
| インターフェイス             | {{domxref("PointerEvent")}}                                                 |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} |

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener('pointerout', (event) => {
  console.log('Pointer moved out');
});
```

`onpointerout` イベントハンドラープロパティを使用した場合

```js
document.onpointerout = (event) => {
  console.log('Pointer moved out');
};
```

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerout-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerout_event")}}

## 関連情報

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} event handler property
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerout_event", "pointerout")}} event
