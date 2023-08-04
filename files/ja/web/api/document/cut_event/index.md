---
title: "Document: cut イベント"
slug: Web/API/Document/cut_event
---

{{APIRef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。

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
      <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、切り取り操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: cut イベント](/ja/docs/Web/API/Element/cut_event)を参照してください。

## 例

```js
document.addEventListener("cut", (event) => {
  console.log("cut action initiated");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/paste_event", "paste")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/cut_event", "cut")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/cut_event", "cut")}}
