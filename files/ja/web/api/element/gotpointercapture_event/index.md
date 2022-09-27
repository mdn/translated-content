---
title: 'Document: gotpointercapture イベント'
slug: Web/API/Element/gotpointercapture_event
original_slug: Web/API/Document/gotpointercapture_event
---

{{APIRef}}

**`gotpointercapture`** イベントは、要素が {{domxref("Element.setPointerCapture", "setPointerCapture()")}} を使用してポインターをキャプチャしたときに発生します。

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
        {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

この例は `<p>` 要素を取得し、 `gotpointercapture` イベントを待ち受けします。 `setPointerCapture()` を `pointerdown` イベントの要素上で呼び出し、 `gotpointercapture` を発生させます。

```js
const para = document.querySelector('p');

document.addEventListener('gotpointercapture', () => {
  console.log('I\'ve been captured!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

同じ例ですが、 `ongotpointercapture` イベントハンドラーを使用して行います。

```js
const para = document.querySelector('p');

document.ongotpointercapture = () => {
  console.log('I\'ve been captured!')
};

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## 仕様書

| 仕様書                                                                               | 状態                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-gotpointercapture-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの対応

{{Compat}}

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

- {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}} イベント
