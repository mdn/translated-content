---
title: "MessageChannel: port1 プロパティ"
short-title: port1
slug: Web/API/MessageChannel/port1
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`port1`** は {{domxref("MessageChannel")}} インターフェイスの読み取り専用プロパティで、メッセージチャンネルの第 1 ポートを返します。このポートは、チャンネルの元となるコンテキストに付属します。

## 値

チャンネルの第 1 ポートを表す {{domxref("MessagePort")}} オブジェクト。これはチャンネルの元となるコンテキストに付属するポートです。

## 例

次のコードブロックでは、 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターを使用して作成された新しいチャンネルが見られます。 {{HTMLElement("iframe")}} が読み込まれると、 {{domxref("MessageChannel.port2")}} を {{HTMLElement("iframe")}} へ、メッセージを通して {{domxref("MessagePort.postMessage")}} を使用して渡します。すると、 `handleMessage` ハンドラーが `<iframe>` から返送されたメッセージに（{{domxref("MessagePort.message_event")}} を使用して）返答し、これを段落に挿入します。メッセージが到着したとき、 `handleMessage` メソッドが `port1` に関連付けられて待ち受けします。

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

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

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
