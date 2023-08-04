---
title: "Window: pagehide イベント"
slug: Web/API/Window/pagehide_event
---

{{APIRef("HTML DOM")}}

**`pagehide`** イベントは、ブラウザーがセッションの履歴から他のページを表示する過程において、現在のページを非表示にしたときに {{domxref("Window")}} へ送られます。例えば、ユーザーがブラウザーの戻るボタンをクリックしたとき、現在のページはひとつ前のページが表示される前に `pagehide` イベントを受け取ります。

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
      <td>{{domxref("PageTransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("Window.onpagehide", "onpagehide")}}</td>
    </tr>
  </tbody>
</table>

## 例

この例では、イベントハンドラーが `pagehide` イベントを監視するために確立され、ページが再利用できるように保存されようとするときに特殊な扱いを行います。

```js
window.addEventListener("pagehide", event => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
}, false);
```

これは {{domxref("Window.onpagehide", "onpagehide")}} イベントハンドラープロパティを {{domxref("Window")}} 上で利用することで書くこともできます。

```js
window.onpagehide = event => {
  if (event.persisted) {
    /* このページは破棄されないので、後で再利用することができます */
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.pagehide_event")}}

## 関連情報

- {{domxref("Window.onpageshow", "onpageshow")}} イベントハンドラープロパティ
- {{domxref("Window.pageshow_event", "pageshow")}} イベント
