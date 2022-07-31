---
title: 'HTMLElement: pointerleave イベント'
slug: conflicting/Web/API/Element/pointerleave_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - リファレンス
translation_of: Web/API/HTMLElement/pointerleave_event
original_slug: Web/API/HTMLElement/pointerleave_event
browser-compat: api.HTMLElement.pointerleave_event
---
{{APIRef}}

`pointerleave` イベントは、ポインティングデバイスが要素のヒットテスト境界から外れると発生します。ペンデバイスの場合、このイベントは、スタイラスがデジタイザーによって検出可能なホバー範囲を離れたときに発生します。

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
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerleave"
            >onpointerleave</a
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

para.addEventListener('pointerleave', (event) => {
  console.log('ポインターが要素から離脱しました');
});
```

`onpointerleave` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerleave = (event) => {
  console.log('ポインターが要素から離脱しました');
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
- [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
- [`onpointerleave`](/ja/docs/Web/API/GlobalEventHandlers/onpointerleave) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointerleave`](/ja/docs/Web/API/Document/pointerleave_event) イベント
