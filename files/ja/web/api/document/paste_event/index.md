---
title: 'Document: paste イベント'
slug: Web/API/Document/paste_event
tags:
  - API
  - Document
  - Event
  - Reference
  - Web
  - paste
  - イベント
translation_of: Web/API/Document/paste_event
---
{{APIRef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから「貼り付け」操作を実行したときに発生します。

| バブリング                   | あり                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| キャンセル                   | 可                                                           |
| インターフェイス             | {{domxref("ClipboardEvent")}}                     |
| イベントハンドラープロパティ | {{domxref("HTMLElement/onpaste", "onpaste")}} |

このイベントの本来の対象は、貼り付け操作を意図する対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: paste イベント](/ja/docs/Web/API/Element/paste_event)を参照してください。

## 例

```js
document.addEventListener('paste', (event) => {
    console.log('paste action initiated')
});
```

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-paste')}} | {{Spec2('Clipboard API')}} |

## ブラウザーの互換性

{{Compat("api.Document.paste_event")}}

## 関連情報

- 関連イベント: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/copy_event", "copy")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/paste_event", "paste")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/paste_event", "paste")}}
