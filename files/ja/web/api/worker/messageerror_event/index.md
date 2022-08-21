---
title: Worker.onmessageerror
slug: Web/API/Worker/messageerror_event
tags:
  - API
  - Property
  - Reference
  - Worker
  - onmessageerror
  - イベントハンドラ
translation_of: Web/API/Worker/onmessageerror
original_slug: Web/API/Worker/onmessageerror
---
{{APIRef("HTML DOM")}}

{{domxref("Worker")}} インターフェイスの **`onmessageerror`** イベントハンドラは {{domxref("EventListener")}} であり、 `messageerror` 型の {{domxref("MessageEvent")}} が `Worker` インスタンスで発生する度に呼び出されます。 — つまり {{glossary("Deserialization", "deserialized")}} できないメッセージを受け取ったときです。

{{AvailableInWorkers}}

## 構文

```
Worker.onmessageerror = function() { ... };
```

## 仕様

| 仕様                                                                                                     | ステータス                       | 備考 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#handler-worker-onmessageerror', 'onmessageerror')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("api.Worker.onmessageerror")}}

## 関連項目

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
