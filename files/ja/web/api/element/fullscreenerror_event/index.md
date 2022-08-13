---
title: 'Element: fullscreenerror イベント'
slug: Web/API/Element/fullscreenerror_event
tags:
  - API
  - Element
  - Reference
  - events
  - fullscreenerror
  - イベント
translation_of: Web/API/Element/fullscreenerror_event
---
{{APIRef}}

`fullscreenerror` イベントは、ブラウザーが全画面モードに切り替えることができなかったときに発生します。

| バブリング                   | あり                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                             |
| インターフェイス             | {{domxref("Event")}}                                                     |
| イベントハンドラープロパティ | {{domxref("Element.onfullscreenerror", "onfullscreenerror")}} |

{{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントと同様に、2 つの `fullscreenerror` イベントが発生します。1 つ目はモード切替に失敗した {{domxref("Element")}} に送られ、2 つ目はその要素を含む {{domxref("Document")}} に送られます。

全画面モードへの切り替えが失敗する理由の一部は、 [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)をお読みください。

## 例

```js
const requestor = document.querySelector('div');

requestor.addEventListener('fullscreenerror', (event) => {
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

{{Compat("api.Element.fullscreenerror_event")}}

## 関連情報

- [`fullscreenchange`](/ja/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
