---
title: WindowEventHandlers.onmessageerror
slug: conflicting/Web/API/Window/messageerror_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - Property
  - Reference
  - Window
  - WindowEventHandlers
  - onmessageerror
translation_of: Web/API/WindowEventHandlers/onmessageerror
original_slug: Web/API/WindowEventHandlers/onmessageerror
---
{{APIRef("HTML DOM")}}

{{domxref("WindowEventHandlers")}} インターフェイスの **`onmessageerror`** イベントハンドラは {{domxref("EventListener")}} であり、ウィンドウで `messageerror` タイプの MessageEvent が発生するたびに、つまり、{{glossary("Deserialization", "逆シリアル化")}}できないメッセージを受信したときに呼び出されます。

{{AvailableInWorkers}}

## 構文

```
window.onmessageerror = function() { ... };
```

## 仕様

| 仕様                                                                                                     | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-window-onmessageerror', 'onmessageerror')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onmessageerror")}}

## 関連情報

- [Channel Messaging の使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
