---
title: MessagePort.postMessage()
slug: Web/API/MessagePort/postMessage
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} インターフェイスの **`postMessage()`** メソッドは、ポートからのメッセージを送信します。任意で、オブジェクトの所有権を他のブラウザコンテキストへ転送します。

{{AvailableInWorkers}}

## 構文

```
port.postMessage(message [,transfer]);
```

### 戻り値

無効。

### 引数

- message
  - : チャンネル経由で送信するメッセージ。これは基本データタイプになります。複数のデータアイテムを配列として送信できます。
- \[, transfer]
  - : (任意) 転送されるオブジェクト。これらのオブジェクトの所有権は、受信側のブラウザコンテキストへ転送されるため、送信側のブラウザコンテキストでは使用できなくなります。

## 例

次のコードブロックでは、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタで新しいチャンネルを作成しています。IFrame が読み込まれた時、{{domxref("window.postMessage")}} メソッドによってメッセージと {{domxref("MessageChannel.port2")}} が IFrame へ渡されます。すると、`handleMessage` が `onmessage` によって IFrame から返されたメッセージに応答し、そのメッセージを段落に出力します。ここで、{{domxref("MessageChannel.port1")}} は、メッセージが到着したときに確認するための待機状態にあります。

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

{{Compat("api.MessagePort.postMessage")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
