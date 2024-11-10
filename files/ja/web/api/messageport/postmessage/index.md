---
title: "MessagePort: postMessage() メソッド"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`postMessage()`** は {{domxref("MessagePort")}} インターフェイスのメソッドで、ポートからのメッセージを送信します。任意で、オブジェクトの所有権を他の閲覧コンテキストへ転送します。

## 構文

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### 引数

- `message`
  - : チャンネル経由で送信するメッセージ。これはいずれかの基本データ型です。複数のデータアイテムを配列として送信できます。
- `transfer` {{optional_inline}}
  - : オプションで、所有権を委譲する[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)。これらのオブジェクトの所有権は出力先に移動され、送信側ではそれらを使用できなくなります。これらの移譲可能オブジェクトはメッセージに添付する必要があります。そうでない場合、移動はされますが、受信側では実際にアクセスできなくなります。
- `options` {{optional_inline}}
  - : オプションで、以下のプロパティを持つオブジェクトです。
    - `transfer` {{optional_inline}}
      - : `transfer` 引数と同じ意味です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコードブロックでは、{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターで新しいチャンネルを作成しています。IFrame が読み込まれた時、{{domxref("MessageChannel.port2")}} が {{domxref("window.postMessage")}} メソッドによってメッセージとともに IFrame へ渡されます。すると、`handleMessage` が `onmessage` によって IFrame から返されたメッセージに応答し、そのメッセージを段落に出力します。ここで、{{domxref("MessageChannel.port1")}} は、メッセージが到着したときに確認するための待機状態にあります。

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Transferring message port", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}

// in the iframe…

window.addEventListener("message", (event) => {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("Hello from the iframe!");
});
```

完全に動作する例は、Github 上の [チャンネルメッセージ送信の基本デモ](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) を見てください ([実際の動作も確認できます](https://mdn.github.io/dom-examples/channel-messaging-basic/))。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
