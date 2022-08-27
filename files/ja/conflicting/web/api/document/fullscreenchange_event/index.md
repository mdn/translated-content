---
title: Document.onfullscreenchange
slug: conflicting/Web/API/Document/fullscreenchange_event
tags:
  - API
  - Document
  - Event Handler
  - Fullscreen API
  - Property
  - Reference
  - イベントハンドラー
  - プロパティ
  - 全画面 API
translation_of: Web/API/Document/onfullscreenchange
original_slug: Web/API/Document/onfullscreenchange
---
{{APIRef("Fullscreen API")}}

{{domxref("Document")}} インターフェイスの **`onfullscreenchange`** プロパティは、文書が全画面モードに移行したり復帰したりする直前に発生する {{event("fullscreenchange")}} イベントのイベントハンドラーです。

## 構文

```
targetDocument.onfullscreenchange = fullscreenChangeHandler;
```

### 値

文書が全画面モードへの移行および復帰を示す {{event("fullscreenchange")}} イベントを受け取るたびに呼び出されるイベントハンドラーです。

## 使用上のメモ

`fullscreenchange` イベントは全画面モードへの移行か復帰かを直接特定する方法がないので、イベントハンドラーでは {{domxref("Document.fullscreenElement")}} の値を見てください。 `null` であれば、イベントは全画面モードからの*復帰*を示します。それ以外であれば、指定された要素が画面全体に表示されるところです。

## 例

```js
document.onfullscreenchange = function ( event ) {
  console.log("FULL SCREEN CHANGE")
};
document.documentElement.onclick = function () {
  // requestFullscreen() はイベントハンドラー内で使用しなければなりません。そうしなければ失敗します。
  document.documentElement.requestFullscreen();
}
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#handler-document-onfullscreenchange", "onfullscreenchange")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Document.onfullscreenchange")}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{event("fullscreenchange")}}
- {{domxref("Document.onfullscreenerror")}}
