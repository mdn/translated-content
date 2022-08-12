---
title: 'HTMLElement: pointerover イベント'
slug: conflicting/Web/API/Element/pointerover_event
tags:
  - イベント
  - PointerEvent
translation_of: Web/API/HTMLElement/pointerover_event
original_slug: Web/API/HTMLElement/pointerover_event
browser-compat: api.HTMLElement.pointerover_event
---
{{APIRef}}

`pointerover` イベントは、ポインティングデバイスが要素のヒットテスト境界内に移動したときに発生します。

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
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerover"
            >onpointerover</a
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

para.addEventListener('pointerover', (event) => {
  console.log('ポインターが中へ移動しました');
});
```

`onpointerover` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerover = (event) => {
  console.log('ポインターが中へ移動しました');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`gotpointercapture`](/ja/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/ja/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event)
- [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
- [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerover`](/ja/docs/Web/API/GlobalEventHandlers/onpointerover) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointerover`](/ja/docs/Web/API/Document/pointerover_event) イベント
