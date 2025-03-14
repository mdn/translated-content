---
title: "Window: paste イベント"
slug: Web/API/Window/paste_event
---

{{APIRef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから「貼り付け」操作を実行したときに発生します。

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
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、貼り付け操作を意図する対象である {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: paste イベント](/ja/docs/Web/API/Element/paste_event)を参照してください。

## 例

```js
document.addEventListener("paste", (event) => {
  console.log("paste action initiated");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/copy_event", "copy")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/paste_event", "paste")}}
