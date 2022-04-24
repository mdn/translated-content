---
title: 'HTMLElement: pointerenter イベント'
slug: Web/API/HTMLElement/pointerenter_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - リファレンス
browser-compat: api.HTMLElement.pointerenter_event
translation_of: Web/API/HTMLElement/pointerenter_event
---
{{APIRef}}

`pointerenter` イベントは、ポインティングデバイスが要素またはその子孫の 1 つのヒットテスト境界内に移動したときに発生します。これには、ホバーに対応していない端末からの {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントの結果も含まれます（{{domxref("HTMLElement/pointerdown_event", "pointerdown")}} を参照）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
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
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerenter"
            >onpointerenter</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` を使用する場合

```js
const para = document.querySelector('p');

para.addEventListener('pointerenter', (event) => {
  console.log('ポインターが要素に進入しました');
});
```

`onpointerenter` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerenter = (event) => {
  console.log('ポインターが要素に進入しました');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`gotpointercapture`](/ja/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/ja/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerover`](/ja/docs/Web/API/HTMLElement/pointerover_event)
- [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
- [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerenter`](/ja/docs/Web/API/GlobalEventHandlers/onpointerenter) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointerenter`](/ja/docs/Web/API/Document/pointerenter_event) イベント
