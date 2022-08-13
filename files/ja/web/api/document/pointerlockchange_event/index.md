---
title: 'Document: pointerlockchange イベント'
slug: Web/API/Document/pointerlockchange_event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockchange
  - イベント
  - ウェブ
translation_of: Web/API/Document/pointerlockchange_event
---
{{APIRef}}

`pointerlockchange` イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                   |
| インターフェイス             | {{domxref("Event")}}                                                             |
| イベントハンドラープロパティ | {{domxref("Document/onpointerlockchange", "onpointerlockchange")}} |

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener('pointerlockchange', (event) => {
  console.log('Pointer lock changed');
});
```

`onpointerlockerror` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockchange = (event) => {
  console.log('Pointer lock changed');
};
```

## 仕様書

| 仕様書                                                                                                   | 状態                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Pointer Lock', '#pointerlockchange-and-pointerlockerror-events')}} | {{Spec2('Pointer Lock')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerlockchange_event")}}

## 関連情報

- [Pointer Lock API の使用](/ja/docs/API/Pointer_Lock_API)
