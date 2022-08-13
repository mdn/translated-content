---
title: 'Document: selectstart event'
slug: Web/API/Document/selectstart_event
translation_of: Web/API/Document/selectstart_event
---
{{APIRef}}

[Selection API](/ja/docs/Web/API/Selection) の **`selectstart`** イベントは新しい選択範囲をユーザが指定した際に発火します。

イベントがキャンセルされた場合、選択範囲は変更されません。

| Bubbles                | 有効                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Cancelable             | 有効                                                                                     |
| Interface              | {{domxref("Event")}}                                                             |
| Event handler property | {{domxref("GlobalEventHandlers.onselectstart", "onselectstart")}} |

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

{{Compat("api.Document.selectstart_event")}}

## 参照

- {{domxref("Document/selectionchange_event", "selectionchange")}}
