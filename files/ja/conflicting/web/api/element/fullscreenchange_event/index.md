---
title: Element.onfullscreenchange
slug: conflicting/Web/API/Element/fullscreenchange_event
tags:
  - API
  - Element
  - Event Handler
  - Full
  - Full-screen
  - Fullscreen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenchange
  - screen
  - イベントハンドラー
  - プロパティ
  - 全画面
  - 全画面モード
translation_of: Web/API/Element/onfullscreenchange
original_slug: Web/API/Element/onfullscreenchange
---
{{ApiRef("Fullscreen API")}}

{{domxref("Element")}} インターフェイスの **`onfullscreenchange`** プロパティは、 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントのイベントハンドラーで、要素が全画面モードへ移行するか、終了するときに発生します。

## 構文

    targetDocument.onfullscreenchange = fullscreenChangeHandler;

### 値

{{event("fullscreenchange")}} イベントのイベントハンドラーで、要素が全画面モードへ移行または終了したことを示します。

## 例

この例では `fullscreenchange` イベントのハンドラーである `handleFullscreenChange()` を作成します。この関数は {{domxref("event.target")}} のチェックしてどの要素に対して呼び出されたのかを判別し、文書の {{domxref("Document.fullscreenElement", "fullscreenElement")}} の値と要素を比較して、同じノードであるかどうかを確認します。

これを `isFullscreen` の値に設定して `adjustMyControls()` という関数に渡し、これがウィンドウ内が全画面モードで表示されているときにアプリのユーザーインターフェイスが最適に表示されるように調整する関数になると想像してください。

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  elem.onfullscreenchange = handleFullscreenChange;
  if (!document.fullscreenElement) {
    elem.requestFullscreen().then({}).catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

function handleFullscreenChange(event) {
  let elem = event.target;
  let isFullscreen = document.fullscreenElement === elem;

  adjustMyControls(isFullscreen);
}
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#handler-document-onfullscreenchange", "onfullscreenchange")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Document.onfullscreenchange")}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
- {{domxref("Element.onfullscreenerror")}}
- {{domxref("Document")}} で同等のもの: {{domxref("Document.onfullscreenchange", "onfullscreenchange")}}.
