---
title: "Document: lostpointercapture イベント"
slug: Web/API/Document/lostpointercapture_event
---

{{APIRef}}

**`lostpointercapture`** イベントは、[ポインターのキャプチャ](/ja/docs/Web/API/Pointer_events#Pointer_capture)が解放されたときに発生します。

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
        {{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

この例は `lostpointercapture` イベントを待ち受けし、 `pointerdown` でその要素のためにポインターをキャプチャします。後でユーザーがポインターを解放したとき、 `lostpointercapture` イベントが発生します。

```js
const para = document.querySelector("p");

document.addEventListener("lostpointercapture", () => {
  console.log("I've been released!");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

同じ例ですが、 `onlostpointercapture` イベントハンドラーを使用して行います。

```js
const para = document.querySelector("p");

document.onlostpointercapture = () => {
  console.log("I've been released!");
};

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

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

- {{domxref("GlobalEventHandlers.onlostpointercapture")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}} イベント
