---
title: 'HTMLElement: gotpointercapture イベント'
slug: >-
  conflicting/Web/API/Element/gotpointercapture_event_7f96b143800d76a3bff8abbddbff0a0a
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - リファレンス
translation_of: Web/API/HTMLElement/gotpointercapture_event
original_slug: Web/API/HTMLElement/gotpointercapture_event
browser-compat: api.HTMLElement.gotpointercapture_event
---
{{APIRef}}

**`gotpointercapture`** イベントは、 [`setPointerCapture()`](/ja/docs/Web/API/Element/setPointerCapture) を使用して要素がポインターをキャプチャしたときに発生します。

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
        {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では `<p>` 要素を取得し、`gotpointercapture` イベントを待ち受けします。それから、`pointerdown` イベントの要素に対して `setPointerCapture()` を呼び出します。これが `gotpointercapture` を起動します。

```js
const para = document.querySelector('p');

para.addEventListener('gotpointercapture', () => {
  console.log('キャプチャされた！')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

`ongotpointercapture` イベントハンドラープロパティを使用した同じ例

```js
const para = document.querySelector('p');

para.ongotpointercapture = () => {
  console.log('キャプチャされた！')
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

  - [`lostpointercapture`](/ja/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [`pointerover`](/ja/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
  - [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)

- [`ongotpointercapture`](/ja/docs/Web/API/GlobalEventHandlers/ongotpointercapture) イベントハンドラープロパティ
- `Document` を対象とするこのイベント: [`gotpointercapture`](/ja/docs/Web/API/Document/gotpointercapture_event) イベント
