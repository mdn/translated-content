---
title: 'Document: selectstart event'
slug: Web/API/Node/selectstart_event
original_slug: Web/API/Document/selectstart_event
---

{{APIRef}}

[Selection API](/ja/docs/Web/API/Selection) の **`selectstart`** イベントは新しい選択範囲をユーザが指定した際に発火します。

イベントがキャンセルされた場合、選択範囲は変更されません。

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>有効</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>有効</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectstart", "onselectstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
// addEventListener version
document.addEventListener('selectstart', () => {
  console.log('Selection started');
});

// onselectstart version
document.onselectstart = () => {
  console.log('Selection changed.');
};
```

## 仕様

| Specification                                                                            | Status                               | Comment             |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Selection API', '#selectstart-event', 'selectstart')}} | {{Spec2('Selection API')}} | Initial definition. |

## ブラウザ互換性

{{Compat}}

## 参照

- {{domxref("Document/selectionchange_event", "selectionchange")}}
