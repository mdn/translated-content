---
title: WindowEventHandlers.onunhandledrejection
slug: conflicting/Web/API/Window/unhandledrejection_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - Promises
  - Property
  - Reference
  - WindowEventHandlers
  - events
  - onunhandledrejection
translation_of: Web/API/WindowEventHandlers/onunhandledrejection
original_slug: Web/API/WindowEventHandlers/onunhandledrejection
---
{{APIRef}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onunhandledrejection`** プロパティは、{{event("unhandledrejection")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、処理されなかった {{jsxref("Promise")}} 拒否に対して発生します。

## 構文

```
window.onunhandledrejection = function;
```

### 値

`function` は、ウィンドウが `unhandledrejection` イベントを受け取ったときに呼び出す {{event("Event_handlers", "event handler")}} または関数です。 イベントハンドラは、{{domxref("PromiseRejectionEvent")}} を入力パラメーターとして受け取ります。

## 例

この例では、処理されなかった拒否の `reason` 値を単にコンソールに記録します。

```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```

## 仕様

| 仕様                                                                                                                                         | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#handler-window-onunhandledrejection', 'onunhandledrejection')}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onunhandledrejection")}}
