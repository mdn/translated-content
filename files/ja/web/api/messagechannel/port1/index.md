---
title: MessageChannel.port1
slug: Web/API/MessageChannel/port1
---

{{APIRef("HTML DOM")}}

**`port1`** は {{domxref("MessageChannel")}} インターフェースの読み取り専用プロパティで、メッセージチャンネルの最初のポートを返します。このポートは、チャンネルの元となるコンテキストに付属します。

{{AvailableInWorkers}}

## 構文

```
channel.port1;
```

### 値

チャンネルの最初のポートを表す {{domxref("MessagePort")}} オブジェクト。これはチャンネルの元となるコンテキストに付属するポートです。

## 例

次のコードブロックでは、 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターを使用して作成された新しいチャンネルが見られます。 {{HTMLElement("iframe")}} が読み込まれると、 {{domxref("MessageChannel.port2")}} を {{HTMLElement("iframe")}} へ、メッセージを通して {{domxref("MessagePort.postMessage")}} を使用して渡します。すると、 `handleMessage` ハンドラーが `<iframe>` から返送されたメッセージに ({{domxref("MessagePort.onmessage")}} を使用して) 返答し、これを段落に挿入します。メッセージが到着したとき、 `handleMessage` メソッドが `port1` に関連付けられて待ち受けします。

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

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat("api.MessageChannel.port1")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
