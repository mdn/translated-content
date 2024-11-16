---
title: MessagePort
slug: Web/API/MessagePort
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`MessagePort`** は[チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API) のインターフェイスで、{{domxref("MessageChannel")}} の 2 つのポートの一方を表し、片方のポートから送信されるメッセージをもう片方のポートで受信待機できます。

`MessagePort` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

{{InheritanceDiagram}}

## インスタンスメソッド

_親である {{domxref("EventTarget")}} からの継承したメソッドがあります。_

- {{domxref("MessagePort.postMessage","postMessage()")}}
  - : ポートからメッセージを送信します。また、任意でオブジェクトの所有権を他の閲覧コンテキストへ転送します。
- {{domxref("MessagePort.start","start()")}}
  - : ポート上で順番待ちのメッセージの送信を開始します。({{domxref("EventTarget.addEventListener")}} を使用する場合のみ必要です。{{domxref("MessagePort.message_event", "onmessage")}} を使用する場合は暗黙に実行されます。)
- {{domxref("MessagePort.close","close()")}}
  - : ポートとの接続を切断し、このポートはアクティブではなくなります。

## イベント

_親である {{domxref("EventTarget")}} から継承したイベントがあります。_

- {{domxref("MessagePort.message_event","message")}}
  - : `MessagePort` オブジェクトがメッセージを受信したときに発行されます。
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : `MessagePort` オブジェクトがデシリアライズできないメッセージを受け取ったときに発行されます。

## 例

次の例では、{{domxref("MessageChannel.MessageChannel","MessageChannel()")}} コンストラクターで作成された新しいチャンネルがあります。

IFrame が読み込まれると、{{domxref("MessagePort/message_event","onmessage")}} ハンドラーを {{domxref("MessageChannel.port1")}} に登録し、{{domxref("MessageChannel.port2")}} を IFrame に、メッセージと共に {{domxref("window.postMessage")}} を使用して送信します。

IFrame からメッセージが返却されると。`onMessage` 関数でメッセージを段落に出力します。

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

完全に動作する例は、Github 上の [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) を参照してください ([実際のデモも実行できます](https://mdn.github.io/dom-examples/channel-messaging-basic/))。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
