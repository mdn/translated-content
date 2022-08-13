---
title: Element.onfullscreenerror
slug: conflicting/Web/API/Element/fullscreenerror_event
tags:
  - API
  - Element
  - Event Handler
  - Full
  - Full-screen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenerror
  - screen
  - プロパティ
  - 全画面モード
translation_of: Web/API/Element/onfullscreenerror
original_slug: Web/API/Element/onfullscreenerror
---
{{ApiRef("Fullscreen API")}}

{{domxref("Element")}} インターフェイスの **`onfullscreenchange`** プロパティは {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベントのイベントハンドラーで、要素が全画面モードへ移行するか、終了するときにエラーが発生したときに発生します。

## 構文

    targetElement.onfullscreenerror = fullscreenErrorHandler;

### 値

{{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベントのエラーハンドラーです。

## 例

この例は、ユーザーが主導するイベント ({{domxref("Element/click_event", "click")}} や {{domxref("Element/keypress_event", "keypress")}} イベントなど) のハンドラーの外から全画面モードへの切り替えを試みます。全画面モードへの意向は、ユーザー入力への応答の中からしか許可されていないため、これによってエラーが発生し、 {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベントをエラーハンドラーに配信します。

```js
let elem = document.querySelector("video")}}

elem.onfullscreenerror = function ( event ) {
  displayWarning("Unable to switch into full-screen mode.");
};

//....

elem.requestFullscreen();
```

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#dom-element-onfullscreenerror", "onfullscreenerror")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Element.onfullscreenerror")}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element.onfullscreenerror")}}
- {{domxref("Document.onfullscreenerror")}}
