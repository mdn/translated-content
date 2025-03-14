---
title: "Window: copy イベント"
slug: Web/API/Window/copy_event
---

{{APIRef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

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
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

このイベントの本来の対象は、コピー操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Window")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: copy イベント](/ja/docs/Web/API/Element/copy_event)を参照してください。

## 例

```js
window.addEventListener("copy", (event) => {
  console.log("copy action initiated");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/copy_event", "copy")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/copy_event", "copy")}}
