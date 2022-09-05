---
title: WindowEventHandlers.onrejectionhandled
slug: conflicting/Web/API/Window/rejectionhandled_event
original_slug: Web/API/WindowEventHandlers/onrejectionhandled
---
{{APIRef}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onrejectionhandled`** プロパティは、{{event("rejectionhandled")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、{{jsxref("Promise")}} が拒否されたときに発生します。

## 構文

```
window.addEventListener("rejectionhandled", function(event) { ... });
window.onrejectionhandled = function(event) { ...};
```

## 例

```js
window.onrejectionhandled = function(e) {
  console.log(e.reason);
}
```

## 仕様

| 仕様                                                                                                                                     | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#handler-window-onrejectionhandled', 'onrejectionhandled')}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onrejectionhandled")}}
