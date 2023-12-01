---
title: MessagePort.onmessage
slug: Web/API/MessagePort/message_event
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} インターフェイスの **`onmessage`** イベントハンドラは、{{domxref("EventListener")}} であり、ポート上で `message` 型の {{domxref("MessageEvent")}} が発動した時に呼び出されます。つまり、ポートがメッセージを受信した時に呼び出されます。

{{AvailableInWorkers}}

## 構文

```
channel.onmessage = function() { ... };
```

## 例

次のコードブロックには、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタで作成された新しいチャンネルがあります。IFrame が読み込まれた時、{{domxref("MessagePort.postMessage")}} を使用してメッセージと {{domxref("MessageChannel.port2")}} が IFrame へ渡されます。すると、`handleMessage` ハンドラが `onmessage` によって IFrame から返されたメッセージに応答し、そのメッセージを段落に出力します。ここで、{{domxref("MessageChannel.port1")}} は、メッセージが到着したときに確認するための待機状態にあります。

```js
var channel = new MessageChannel();
var para = document.querySelector("p");

var ifr = document.querySelector("iframe");
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

完全に動作する例は、Github 上の [チャンネルメッセージ送信の基本デモ](https://github.com/mdn/channel-messaging-basic-demo) を見てください ([実際の動作も確認できます](http://mdn.github.io/channel-messaging-basic-demo/))。

## 仕様

{{Specifications}}

## ブラウザの実装状況

{{Compat}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
