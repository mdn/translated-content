---
title: Document.onfullscreenerror
slug: conflicting/Web/API/Document/fullscreenerror_event
tags:
  - API
  - Document
  - Event Handler
  - Fullscreen API
  - Property
  - Reference
  - イベントハンドラー
  - エラー
  - 全画面
  - 全画面 API
translation_of: Web/API/Document/onfullscreenerror
original_slug: Web/API/Document/onfullscreenerror
---
{{ApiRef("Fullscreen API")}}

**`Document.onfullscreenerror`** プロパティは、文書が直前の {{domxref("Element.requestFullscreen()")}} の呼び出しの後で全画面モードへの移行に失敗したときに、文書に送信される {{event("fullscreenerror")}} イベントのイベントハンドラーです。

## 構文

```
targetDocument.onfullscreenerror = fullscreenErrorHandler;
```

### 値

{{event("fullscreenerror")}} イベントのイベントハンドラーです。

## 例

この例では `requestFullscreen()` をイベントハンドラーの外で呼び出そうとしています。 `requestFullscreen()` はセキュリティ上の理由から、ユーザー操作への応答の中でしか呼び出せないため、これは失敗し、 `fullscreenerror` が発生して document に送られます。

```js
document.onfullscreenerror = function ( event ) {
  displayWarning("Unable to switch into full-screen mode.");
};

//....

document.documentElement.requestFullscreen();
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#handler-document-onfullscreenerror", "onfullscreenerror")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Document.onfullscreenerror")}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{event("fullscreenerror")}}
- {{domxref("Document.onfullscreenchange")}}
- {{domxref("Element.onfullscreenerror")}}
