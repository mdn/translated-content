---
title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
---

{{APIRef("HTML DOM")}}

{{domxref("MessageChannel")}} インターフェースの `MessageChannel()` コンストラクタは、2 つの新しい {{domxref("MessagePort")}} オブジェクトを持つ新しい {{domxref("MessageChannel")}} オブジェクトを返します。

{{AvailableInWorkers}}

## 構文

```
var channel = new MessageChannel();
```

### 戻り値

新たに作成された {{domxref("MessageChannel")}} オブジェクト。

## 例

次のコードブロックでは、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタを使用して作成された新しいチャンネルを知ることができます。{{HTMLElement("iframe")}} が読み込まれると、{{domxref("MessagePort.postMessage")}} にメッセージを添えて {{domxref("MessageChannel.port2")}} を {{HTMLElement("iframe")}} へ渡します。すると、`handleMessage` ハンドラが {{HTMLElement("iframe")}} から返送されたメッセージに ({{domxref("MessagePort.onmessage")}} を使用して) 返答し、これを段落に挿入します。

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

完全に動作する例は、Github 上の [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) を参照してください ([実際のデモも実行できます](http://mdn.github.io/channel-messaging-basic-demo/))。

## 仕様

{{Specifications}}

## ブラウザの実装状況

{{Compat("api.MessageChannel.MessageChannel")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
