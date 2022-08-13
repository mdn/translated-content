---
title: 'Document: fullscreenerror イベント'
slug: Web/API/Document/fullscreenerror_event
tags:
  - API
  - Error
  - Event
  - Fullscreen API
  - Reference
  - fullscreen
  - fullscreenerror
translation_of: Web/API/Document/fullscreenerror_event
---
{{APIRef}}

`fullscreenerror` イベントは、ブラウザーが全画面モードに移行できないときに発生します。

| バブリング                   | あり                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| キャンセル                   | 不可                                                                                 |
| インターフェイス             | {{domxref("Event")}}                                                         |
| イベントハンドラープロパティ | {{domxref("Document.onfullscreenerror", "onfullscreenerror")}} |

{{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントと同様、二つの `fullscreenerror` イベントが発行されます。一つ目はモード切替に失敗した {{domxref("Element")}} へ送られ、二つ目はその要素を所有する {{domxref("Document")}} へ送られます。

全画面モードへの切り替えに失敗する理由については、[全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)を参照してください。

## 例

```js
const requestor = document.querySelector('div');

document.addEventListener('fullscreenerror', (event) => {
  console.error('an error occurred changing into fullscreen');
  console.log(event);
});

requestor.requestFullscreen();
```

## 仕様書

| 仕様書                               | 状態                             |
| ------------------------------------ | -------------------------------- |
| {{SpecName("Fullscreen")}} | {{Spec2("Fullscreen")}} |

## ブラウザーの互換性

{{Compat("api.Document.fullscreenerror_event")}}

## 関連情報

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
