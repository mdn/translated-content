---
title: 'HTMLElement: pointerout イベント'
slug: Web/API/HTMLElement/pointerout_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - リファレンス
browser-compat: api.HTMLElement.pointerout_event
translation_of: Web/API/HTMLElement/pointerout_event
---
{{APIRef}}

`pointerout` イベントは、いくつかの理由で発生します。例えば、ポインティングデバイスが要素の*ヒットテスト*境界から外れたり、ホバーに対応していないデバイスに {{domxref("HTMLElement/pointerup_event", "pointerup")}} イベントが発生したとき（{{domxref("HTMLElement/pointerup_event", "pointerup")}} を参照）、{{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントが発生した後（{{domxref("HTMLElement/pointercancel_event", "pointercancel")}} を参照）、ペンスタイラスがデジタイザーによって検出可能なホバー範囲を離脱したときなどです。

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
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerout"
            >onpointerout</a
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

para.addEventListener('pointerout', (event) => {
  console.log('ポインターが外に移動しました');
});
```

`onpointerout` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerout = (event) => {
  console.log('ポインターが外に移動しました');
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
- [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerout`](/ja/docs/Web/API/GlobalEventHandlers/onpointerout) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointerout`](/ja/docs/Web/API/Document/pointerout_event) イベント
