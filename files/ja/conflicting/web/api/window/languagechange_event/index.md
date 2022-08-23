---
title: WindowEventHandlers.onlanguagechange
slug: conflicting/Web/API/Window/languagechange_event
tags:
  - API
  - Event Handler
  - Experimental
  - HTML DOM
  - Property
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onlanguagechange
original_slug: Web/API/WindowEventHandlers/onlanguagechange
---
{{APIRef("HTML DOM")}} {{SeeCompatTable}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onlanguagechange`** プロパティは、{{event("languagechange")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。

このイベントは、このインターフェイスを実装するオブジェクト（通常は {{domxref("Window")}}、{{domxref("HTMLBodyElement")}}、{{domxref("HTMLIFrameElement")}}）によって受信されます。 このイベントは、優先言語リストが更新されたことを知らせるためにブラウザーによって送信されます。 このリストは、{{domxref("NavigatorLanguage.languages")}} を介してアクセスできます。

## 構文

```
object.onlanguagechange = function;
```

### 値

- `function` は、`()` 接尾辞やパラメーターを持たないユーザー定義関数の名前、または `function(event) {...}` などの匿名関数宣言です。 イベントハンドラには常に、{{domxref("Event")}} 型のイベントを含む 1 つのパラメーターがあります。

## 例

```js
window.onlanguagechange = function(event) {
  console.log('languagechange イベントを検出！');
};
```

## 仕様

| 仕様                                                                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{ SpecName('HTML WHATWG', '#handler-window-onlanguagechange', 'WindowEventHandler.onlanguagechange') }} | {{ Spec2('HTML WHATWG') }} | 初期仕様 |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onlanguagechange")}}

## 関連情報

- {{event("languagechange")}} イベントとその型の {{domxref("Event")}}
