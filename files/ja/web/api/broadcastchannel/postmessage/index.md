---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.postMessage()`** は、任意の種類の {{jsxref("Object")}} のメッセージを、同じ{{glossary("origin","オリジン")}}を持つ任意の{{glossary("browsing context","閲覧コンテキスト")}}内の各リスナーに送信します。 メッセージは、チャネルに結び付けられた各 `BroadcastChannel` を対象とした {{event("message")}} イベントとして送信します。

{{AvailableInWorkers}}

## 構文

```
var str = channel.postMessage(object);
```

## 仕様

| 仕様                                                                                                                                             | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel-postmessage", "BroadcastChannel.postmessage()")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.postMessage")}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これが属するインターフェース。
