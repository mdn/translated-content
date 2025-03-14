---
title: "MessageChannel: MessageChannel() コンストラクター"
short-title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`MessageChannel()`** は {{domxref("MessageChannel")}} インターフェイスのコンストラクターで、2 つの新しい {{domxref("MessagePort")}} オブジェクトを持つ新しい {{domxref("MessageChannel")}} オブジェクトを返します。

## 構文

```js-nolint
new MessageChannel()
```

### 引数

なし ({{jsxref("undefined")}})。

### 返値

新しい {{domxref("MessageChannel")}} オブジェクト。

## 例

次のコードブロックでは、`MessageChannel()` コンストラクターを使用して作成された新しいチャンネルを知ることができます。
{{HTMLElement("iframe")}} が読み込まれると、{{domxref("MessagePort.postMessage")}} にメッセージを添えて {{domxref("MessageChannel.port2")}} を `<iframe>` へ渡します。
すると、`handleMessage` ハンドラーが `<iframe>` から返送されたメッセージに ({{domxref("MessagePort.message_event")}} を使用して) 返答し、これを段落に挿入します。
{{domxref("MessageChannel.port1", "port1")}} は、いつメッセージが到着しているかどうかをチェックするために待ち受けされます。

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
