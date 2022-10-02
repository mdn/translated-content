---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel()`** コンストラクタは新しい {{domxref("BroadcastChannel")}} を作成し、それを基礎となるチャネルに接続します。

{{AvailableInWorkers}}

## 構文

```
 channel = new BroadcastChannel(channel);
```

### 値

- _channel_
  - : チャネルの名前を表す {{domxref("DOMString")}} です。 同じ{{glossary("origin","オリジン")}}を持つすべての{{glossary("browsing context", "閲覧コンテキスト")}}に対して、この名前を持つ単一のチャンネルがあります。

## 例

```js
// "internal_notification" チャンネルをリッスンする新しいチャンネルを作成します。

var bc = new BroadcastChannel('internal_notification');
bc.postMessage('New listening connected!');
```

## 仕様

| 仕様                                                                                                             | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel", "BroadcastChannel()")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.BroadcastChannel")}}

## 関連情報

- {{domxref("BroadcastChannel")}}: これが属するインターフェース。
