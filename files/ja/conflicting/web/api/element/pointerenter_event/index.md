---
title: 'Document: pointerenter イベント'
slug: conflicting/Web/API/Element/pointerenter_event
original_slug: Web/API/Document/pointerenter_event
---

{{APIRef}}

`pointerenter` イベントは、ポインティングデバイスが要素またはその子孫のヒットテスト領域に入ったときに発生します。ホバーに対応していない機器では {{domxref("Document/pointerdown_event", "pointerdown")}} イベントの結果として移動した場合も含みます ({{domxref("Document/pointerdown_event", "pointerdown")}} を参照)。

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
        {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}}
      </td>
    </tr>
  </tbody>
</table>

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

## ブラウザーの互換性

{{Compat}}

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
