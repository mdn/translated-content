---
title: 'Document: selectionchange イベント'
slug: Web/API/Document/selectionchange_event
tags:
  - Event
  - Reference
  - Selection
  - Selection API
  - selectionchange
translation_of: Web/API/Document/selectionchange_event
---
{{APIRef}}

**`selectionchange`** イベントは [Selection API](/ja/docs/Web/API/Selection_API) の一部で、文書における現在のテキストの選択が変更された際に発生します。

| バブリング                   | なし                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------ |
| キャンセル                   | 不可                                                                                             |
| インターフェイス             | {{domxref("Event")}}                                                                     |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}} |

## 例

```js
// addEventListener version
document.addEventListener('selectionchange', () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Selection API', '#selectionchange-event', 'selectionchange')}} | {{Spec2('Selection API')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Document.selectionchange_event")}}

## 関連情報

- {{domxref("Document/selectstart_event", "selectstart")}}
- {{domxref("Document/getSelection", "Document.getSelection")}}
- {{domxref("Selection", "Selection")}}
