---
title: 'HTMLElement: pointermove イベント'
slug: conflicting/Web/API/Element/pointermove_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - リファレンス
translation_of: Web/API/HTMLElement/pointermove_event
original_slug: Web/API/HTMLElement/pointermove_event
---
{{APIRef}}

`pointermove` イベントは、ポインターの座標が変更され、ブラウザーの [touch-action](/ja/docs/Web/CSS/touch-action) によってポインターが[キャンセルされて](/ja/docs/Web/API/HTMLElement/pointercancel_event)いない場合に発生します。

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
        {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}}
      </td>
    </tr>
  </tbody>
</table>

## 使用上の注意

{{domxref("PointerEvent")}} 型のイベントは、ポインティングデバイスによるユーザーの対話に必要なすべての情報を提供します。位置、移動距離、ボタンの状態などです。

## 例

`pointermove` イベントのハンドラーを {{domxref("EventTarget.addEventListener", "addEventListener()")}} で追加する場合です。

```js
const para = document.querySelector('p');

para.addEventListener('pointermove', (event) => {
  console.log('ポインターが移動しました');
});
```

`onpointermove` イベントハンドラープロパティを使用することもできます。

```js
const para = document.querySelector('p');

para.onpointermove = (event) => {
  console.log('ポインターが移動しました');
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
- [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointermove`](/ja/docs/Web/API/GlobalEventHandlers/onpointermove) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointermove`](/ja/docs/Web/API/Document/pointermove_event) イベント

Internet Explorer は、`MSPointerHover` という名前のイベントにも対応していました。これは、接触（通常はペン）が表面に触れずに要素上を移動したときに発生します。 この独自の方法は Internet Explorer に固有のものであり、 Internet Explorer 11 以降、推奨されなくなりました。 IE11 以降では、 [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event) イベントがすべてのペンの動きに対して発生します（ホバーしているかどうかにかかわらず）。
