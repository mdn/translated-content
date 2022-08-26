---
title: BroadcastChannel.onmessageerror
slug: conflicting/Web/API/BroadcastChannel/messageerror_event
tags:
  - API
  - BroadcastChannel
  - Event Handler
  - Property
  - Reference
  - onmessageerror
translation_of: Web/API/BroadcastChannel/onmessageerror
original_slug: Web/API/BroadcastChannel/onmessageerror
---
{{APIRef("HTML DOM")}}

{{domxref("BroadcastChannel")}} インタフェース の **`onmessageerror`** イベントハンドラは {{domxref("EventListener")}} であり、`messageerror` 型の {{domxref("MessageEvent")}} が `BroadcastChannel` インスタンスで発生するたびに、つまり{{glossary("Deserialization", "逆シリアル化")}}できないメッセージを受信すると呼び出されます。

{{AvailableInWorkers}}

## 構文

```
bc.onmessageerror = function() { ... };
```

## 仕様

| 仕様                                                                                                                     | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-broadcastchannel-onmessageerror', 'onmessageerror')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.onmessageerror")}}

## 関連情報

- [Channel Messaging の使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
