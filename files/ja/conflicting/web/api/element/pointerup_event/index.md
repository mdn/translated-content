---
title: 'HTMLElement: pointerup イベント'
slug: conflicting/Web/API/Element/pointerup_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - リファレンス
translation_of: Web/API/HTMLElement/pointerup_event
original_slug: Web/API/HTMLElement/pointerup_event
browser-compat: api.HTMLElement.pointerup_event
---
{{APIRef}}

`pointerup` イベントは、ポインターがアクティブでなくなったときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerup"
            >onpointerup</a
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

para.addEventListener('pointerup', (event) => {
  console.log('ポインターアップ');
});
```

`onpointerup` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerup = (event) => {
  console.log('ポインターアップ');
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
- [`pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event)
- [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
- [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerup`](/ja/docs/Web/API/GlobalEventHandlers/onpointerup) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointerup`](/ja/docs/Web/API/Document/pointerup_event) イベント
