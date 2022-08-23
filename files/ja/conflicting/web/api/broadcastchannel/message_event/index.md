---
title: BroadcastChannel.onmessage
slug: conflicting/Web/API/BroadcastChannel/message_event
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Event Handler
  - Experimental
  - HTML API
  - Property
  - Reference
translation_of: Web/API/BroadcastChannel/onmessage
original_slug: Web/API/BroadcastChannel/onmessage
---
{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.onmessage`** イベントハンドラは、{{domxref("MessageEvent")}} 型の {{event("message")}} イベントがこの {{domxref("BroadcastChannel")}} によって受信されたときに実行する関数を指定するプロパティです。 このようなイベントは、チャネルに放送されるメッセージとともにブラウザーによって送信されます。

{{AvailableInWorkers}}

## 構文

```
channel.onmessage = function;
```

### Values

- `function` は、接尾辞 `()` もパラメーターも含まないユーザー定義関数の名前や、 `function(event) {...}` などの無名関数宣言です。 イベントハンドラには、イベントを含む単一のパラメータが常に 1 つあります。 ここでは {{domxref("MessageEvent")}} 型です。

## 例

```js
bc.onmessage = function(ev) { console.log('message event received!'); };
```

## 仕様

| 仕様                                                                                                                                         | 状態                             | コメント            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-broadcastchannel-onmessage", "BroadcastChannel.onmessage")}} | {{Spec2('HTML WHATWG')}} | Initial definition. |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.onmessage")}}

## 関連情報

- ブラウザコンテキスト間でやり取りするもう 1 つの、よりヘビー級の方法: {{domxref("ServiceWorker")}}
