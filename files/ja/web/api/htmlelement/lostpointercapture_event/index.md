---
title: 'HTMLElement: lostpointercapture イベント'
slug: Web/API/HTMLElement/lostpointercapture_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - リファレンス
browser-compat: api.HTMLElement.lostpointercapture_event
translation_of: Web/API/HTMLElement/lostpointercapture_event
---
{{APIRef}}

**`lostpointercapture`** イベントは、[キャプチャされたポインター](/ja/docs/Web/API/Pointer_events#pointer_capture)が解放されたときに発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a
            href="/ja/docs/Web/API/GlobalEventHandlers/onlostpointercapture"
            >onlostpointercapture</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、要素の `lostpointercapture` イベントを待ち受けし、`pointerdown` で要素のポインターをキャプチャします。 その後ユーザーがポインターを離すと、`lostpointercapture` イベントが発行されます。

```js
const para = document.querySelector('p');

para.addEventListener('lostpointercapture', () => {
  console.log('解放されました！')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

同じ例ですが、 `onlostpointercapture` イベントハンドラープロパティを使用した例です。

```js
const para = document.querySelector('p');

para.onlostpointercapture = () => {
  console.log('解放されました！')
};

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント

  - [`gotpointercapture`](/ja/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [`pointerover`](/ja/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
  - [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)

- [`onlostpointercapture`](/ja/docs/Web/API/GlobalEventHandlers/onlostpointercapture) イベントハンドラープロパティ
- `Document` を対象とするこのイベント: [`lostpointercapture`](/ja/docs/Web/API/Document/lostpointercapture_event) イベント
