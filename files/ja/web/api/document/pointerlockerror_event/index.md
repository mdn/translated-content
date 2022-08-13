---
title: 'Document: pointerlockerror イベント'
slug: Web/API/Document/pointerlockerror_event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockerror
  - イベント
  - ウェブ
  - ポインター
translation_of: Web/API/Document/pointerlockerror_event
---
{{APIRef}}

`pointerlockerror` イベントは、 (技術的な理由、またはパーミッションが拒否されたために) ポインターのロックに失敗したときに発生します。

| バブリング                   | あり                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| キャンセル可能               | いいえ                                                                                   |
| インターフェイス             | {{domxref("Event")}}                                                             |
| イベントハンドラープロパティ | {{domxref("Document/onpointerlockchange", "onpointerlockerror")}} |

## 例

`addEventListener()` を使用した場合

```js
const para = document.querySelector('p');

document.addEventListener('pointerlockerror', (event) => {
  console.log('Error locking pointer');
});
```

`onpointerlockerror` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockerror = (event) => {
  console.log('Error locking pointer');
};
```

## 仕様書

| 仕様書                                                                                                   | 状態                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Pointer Lock', '#pointerlockchange-and-pointerlockerror-events')}} | {{Spec2('Pointer Lock')}} |

## ブラウザーの対応

{{Compat("api.Document.pointerlockerror_event")}}

## 関連情報

- [Pointer Lock API の使用](/ja/docs/API/Pointer_Lock_API)
