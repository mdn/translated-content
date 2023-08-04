---
title: "Document: selectionchange イベント"
slug: Web/API/Document/selectionchange_event
---

{{APIRef}}

**`selectionchange`** イベントは [Selection API](/ja/docs/Web/API/Selection_API) の一部で、文書における現在のテキストの選択が変更された際に発生します。

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
// addEventListener version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/selectstart_event", "selectstart")}}
- {{domxref("Document/getSelection", "Document.getSelection")}}
- {{domxref("Selection", "Selection")}}
