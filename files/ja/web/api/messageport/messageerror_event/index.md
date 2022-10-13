---
title: MessagePort.onmessageerror
slug: Web/API/MessagePort/messageerror_event
original_slug: Web/API/MessagePort/onmessageerror
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} インターフェースの **`onmessageerror`** イベントハンドラーは、ポートで `messageerror` 型の {{domxref("MessageEvent")}} が発火すると呼び出されます。つまり、{{glossary("Deserialization", "deserialized")}} できないメッセージを受け取ったときです。

{{AvailableInWorkers}}

## 構文

```
port.onmessageerror = function() { ... };
```

## 仕様

| 仕様                                                                                                                                     | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'web-messaging.html#handler-messageport-onmessageerror', 'onmessageerror')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー実装状況

{{Compat("api.MessagePort.onmessageerror")}}

## 関連項目

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
