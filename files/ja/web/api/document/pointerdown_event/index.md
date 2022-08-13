---
title: 'Document: pointerdown イベント'
slug: Web/API/Document/pointerdown_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerdown
  - pointerdown
  - イベント
translation_of: Web/API/Document/pointerdown_event
---
{{APIRef}}

`pointerdown` イベントは、ポインターがアクティブになったときに発生します。マウスでは、端末がボタンが押されていない状態から一つ以上のボタンが押されている状態に遷移したときに発生します。タッチ操作では、デジタイザーに物理的な接触が行われたときに発生します。ペンでは、スタイラスがデジタイザーに物理的に接触したときに発生します。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | はい                                                                                     |
| インターフェイス             | {{domxref("PointerEvent")}}                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} |

## 例

`addEventListener()` の使用例:

```js
document.addEventListener('pointerdown', (event) => {
  console.log('Pointer down event');
});
```

`onpointerdown` イベントハンドラープロパティの使用例:

```js
document.onpointerdown = (event) => {
  console.log('Pointer down event');
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerdown-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerdown_event")}}

## 関連情報

- {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベント
