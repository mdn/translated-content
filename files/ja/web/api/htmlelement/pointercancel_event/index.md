---
title: 'HTMLElement: pointercancel イベント'
slug: Web/API/HTMLElement/pointercancel_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - ポインターイベント
  - PointerEvent
  - リファレンス
  - pointercancel
  - ユーザー入力
browser-compat: api.HTMLElement.pointercancel_event
translation_of: Web/API/HTMLElement/pointercancel_event
---
{{APIRef}}

**`pointercancel`** イベントは、これ以上ポインターイベントが発行されそうにないとブラウザーが判断したとき、または {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントが発行された後に、ポインターを使用してパン、ズーム、スクロールなどのビューポートの操作が行われた場合に発行されます。

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
        <code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointercancel">onpointercancel</a></code>
      </td>
    </tr>
  </tbody>
</table>

`pointercancel` イベントを発行させる状況の例

- ポインターの活動をキャンセルするハードウェアイベントが発生した。これには、例えば、ユーザーがアプリ切り替えインターフェイスやモバイル端末の「ホーム」ボタンを使用して、アプリケーションを切り替えようとした場合です。
- ポインターがアクティブなときに、端末の画面の向きが変わった。
- ブラウザーが、ユーザーが誤ってポインター入力を開始したと判断した。これは、例えば、スタイラスを使用しているときに誤って画面上に手を置いたときに起動しないようにする、ハードウェアが手のひら拒否に対応している場合に発生する可能性があります。
- CSS の {{cssxref("touch-action")}} プロパティが、入力の続行を拒否した場合。

> **Note:** `pointercancel` イベントが発生した後、ブラウザーは {{domxref("HTMLElement/pointerout_event", "pointerout")}} とそれに続く {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} も送信します。

## 例

`addEventListener()` を使用する場合

```js
const para = document.querySelector('p');

para.addEventListener('pointercancel', (event) => {
  console.log('ポインターイベントがキャンセルされた');
});
```

`onpointercancel` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointercancel = (event) => {
  console.log('ポインターイベントがキャンセルされた');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント

  - [`gotpointercapture`](/ja/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [`lostpointercapture`](/ja/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [`pointerover`](/ja/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/ja/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event)

- [`onpointercancel`](/ja/docs/Web/API/GlobalEventHandlers/onpointercancel) イベントハンドラープロパティ
- `Document` をターゲットとしたのこのイベント: [`pointercancel`](/ja/docs/Web/API/Document/pointercancel_event) イベント
