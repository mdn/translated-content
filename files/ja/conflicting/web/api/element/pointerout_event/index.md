---
title: 'Document: pointerout イベント'
slug: conflicting/Web/API/Element/pointerout_event
original_slug: Web/API/Document/pointerout_event
---

{{APIRef}}

`pointerout` イベントはいくつかの理由で発生します。ポインティングデバイスが要素の*ヒットテスト*境界を出たとき、ホバーに対応していない端末で {{domxref("Document/pointerup_event", "pointerup")}} イベントが発生したとき ({{domxref("Document/pointerup_event", "pointerup")}} を参照)、 {{domxref("Document/pointercancel_event", "pointercancel")}} イベントが発生した後 ({{domxref("Document/pointercancel_event", "pointercancel")}} を参照)、スタイラスペンがデジタイザーで検出可能なホバー範囲を離れたとき、などです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}}
      </td>
    </tr>
  </tbody>
</table>

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
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} event handler property
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerout_event", "pointerout")}} event
