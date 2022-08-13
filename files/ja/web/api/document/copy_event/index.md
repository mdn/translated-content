---
title: 'Document: copy イベント'
slug: Web/API/Document/copy_event
tags:
  - API
  - Clipboard API
  - Document
  - Event
  - Reference
  - Web
  - copy
translation_of: Web/API/Document/copy_event
---
{{APIRef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

| バブリング                   | あり                                                     |
| ---------------------------- | -------------------------------------------------------- |
| キャンセル                   | 可                                                       |
| インターフェイス             | {{domxref("ClipboardEvent")}}                 |
| イベントハンドラープロパティ | {{domxref("HTMLElement/oncopy", "oncopy")}} |

このイベントの本来の対象は、コピー操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: copy イベント](/ja/docs/Web/API/Element/copy_event)を参照してください。

## 例

```js
document.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});
```

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-copy')}} | {{Spec2('Clipboard API')}} |

## ブラウザーの互換性

{{Compat("api.Document.copy_event")}}

## 関連情報

- 関連イベント: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/paste_event", "paste")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/copy_event", "copy")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/copy_event", "copy")}}
