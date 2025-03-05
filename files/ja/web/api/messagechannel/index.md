---
title: MessageChannel
slug: Web/API/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`MessageChannel`** は[チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API) のインターフェイスで、新しいメッセージチャンネルを作成し、2 つの {{domxref("MessagePort")}} プロパティを通して、その間でデータを送信できます。

## コンストラクター

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : 2 つの新しい {{domxref("MessagePort")}} オブジェクトを持つ新しい `MessageChannel` オブジェクトを返します。

## プロパティ

- {{domxref("MessageChannel.port1")}} {{ReadOnlyInline}}
  - : チャンネルの port1 を返します。
- {{domxref("MessageChannel.port2")}} {{ReadOnlyInline}}
  - : チャンネルの port2 を返します。

## 例

次の例では、{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターを使用して新しいチャンネルを作成する様子を見ることができます。

iframe が読み込まれると、{{domxref("MessagePort/message_event","onmessage")}} ハンドラーを {{domxref("MessageChannel.port1")}} に登録し、{{domxref("MessageChannel.port2")}} を {{domxref("window.postMessage")}} メソッドを使用して iframe へ転送します。

IFrame からメッセージが返送されると、`onMessage` 関数はそのメッセージを段落に出力します。

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// iframe が読み込まれるのを待つ
iframe.addEventListener("load", onLoad);

function onLoad() {
  // port1 のメッセージを待ち受けする
  channel.port1.onmessage = onMessage;

  // port2 を iframe へ転送する
  iframe.contentWindow.postMessage("メインページからこんにちは！", "*", [
    channel.port2,
  ]);
}

// port1 で受け取ったメッセージを処理する
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
