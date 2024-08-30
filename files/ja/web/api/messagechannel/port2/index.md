---
title: "MessageChannel: port2 プロパティ"
short-title: port2
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`port2`** は {{domxref("MessageChannel")}} インターフェイスの読み取り専用プロパティで、メッセージチャンネルの第 2 ポートを返します。このポートは、チャンネルのもう一方の端のコンテキストに接続されたポートで、メッセージが最初に送信される先です。

## 値

チャンネルの第 2 ポートを表す {{domxref("MessagePort")}} オブジェクト。これはチャネルのもう一方の端のコンテキストに接続されたポートです。

## 例

次のコードブロックでは、 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターを使用して作成された新しいチャンネルが見られます。iframe が読み込まれると、`port2` を iframe へ、メッセージを通して {{domxref("MessagePort.postMessage")}} を使用して渡します。すると、 `handleMessage` ハンドラーが `<iframe>` から返送されたメッセージに（{{domxref("MessagePort.message_event")}} を使用して）返答し、これを段落に挿入します。
メッセージが到着したタイミングを調べるために、{{domxref("MessageChannel.port1", "port1")}} が待ち受けされています。

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

完全に動作する例は、Github 上の [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) を参照してください ([実際のデモも実行できます](https://mdn.github.io/channel-messaging-basic-demo/))。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
