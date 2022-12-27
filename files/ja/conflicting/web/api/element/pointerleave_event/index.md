---
title: 'Document: pointerleave イベント'
slug: conflicting/Web/API/Element/pointerleave_event
original_slug: Web/API/Document/pointerleave_event
---

{{APIRef}}

`pointerleave` イベントは、ポインティングデバイスが要素のヒットテスト領域を出たときに発生します。ペンデバイスでは、このイベントはデジタイザーが検出可能なホバー範囲をスタイラスが離れたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}}
      </td>
    </tr>
  </tbody>
</table>

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

## ブラウザーの互換性

{{Compat}}

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
