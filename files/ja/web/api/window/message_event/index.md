---
title: WindowEventHandlers.onmessage
slug: Web/API/Window/message_event
original_slug: Web/API/WindowEventHandlers/onmessage
---

{{APIRef("HTML DOM")}}{{ SeeCompatTable() }}

{{domxref("WindowEventHandlers")}} ミックスインの **`onmessage`** プロパティは、オブジェクトが {{event("message")}} イベントを受け取るたびに呼び出される {{event("Event_handlers", "event handler")}} です。

## 構文

```
window.addEventListener('message', function(event) { ... })
window.onmessage = function(event) { ... }
```

## 仕様

| 仕様                                                                                     | 状態                             | コメント |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG','#handler-window-onmessage','onmessage')}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onmessage")}}
