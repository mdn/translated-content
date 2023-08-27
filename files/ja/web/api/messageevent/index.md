---
title: MessageEvent
slug: Web/API/MessageEvent
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{APIRef("HTML DOM")}}

**`MessageEvent`** インターフェースは対象のオブジェクトから受け取ったメッセージを表します。

次のメッセージを表すために使用されます。

- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events) （{{domxref("EventSource.message_event")}} を参照）。
- [ウェブソケット](/ja/docs/Web/API/WebSockets_API) （[WebSocket](/ja/docs/Web/API/WebSocket) インターフェイスの `onmessage` プロパティを参照）。
- 文書間のメッセージ（{{domxref("Window.postMessage()")}} および {{domxref("Window.message_event")}} を参照）。
- [チャンネルメッセージ](/ja/docs/Web/API/Channel_Messaging_API) （{{domxref("MessagePort.postMessage()")}} および {{domxref("MessagePort.message_event")}} を参照）。
- ワーカー／文書間メッセージ（上記 2 項目ほか、{{domxref("Worker.postMessage()")}}, {{domxref("Worker.message_event")}}, {{domxref("ServiceWorkerGlobalScope.message_event")}} なども参照）。
- [ブロードキャストチャンネル](/ja/docs/Web/API/Broadcast_Channel_API) ({{domxref("Broadcastchannel.postMessage()")}}) および {{domxref("BroadcastChannel.onmessage")}} を参照).

このイベントによって引き起こされる動作は、対応する `message` イベント（例えば、 上記の `onmessage` ハンドラーを使ったもの）のイベントハンドラーとして設定された関数の中で定義されています。

{{AvailableInWorkers}}
{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : 新しい `MessageEvent` を作成します。

## インスタンスプロパティ

_このインターフェースは親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : メッセージ送信元によって送信されたデータです。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信元のオリジンを表します。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントの一意の ID を表します。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : `MessageEventSource` （{{domxref("WindowProxy")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## インスタンスメソッド

_このインターフェースは親である {{domxref("Event")}} からメソッドを継承してします。_

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : メッセージイベントを初期化します。**これ以上このメソッドを使用しないでください。代わりに、{{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} コンストラクターを使用してください。**

## 例>

[基本的な共有ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）には 2 つの HTML ページがあり、それぞれのページが単純な計算をする JavaScript を実行しています。異なるスクリプトが計算を実行するために同一のワーカーファイルを使用しています。ページの異なるウィンドウ内で動作していても、どちらのスクリプトもワーカーファイルにアクセスできます。

次のコードスニペットは、 {{domxref("SharedWorker")}} オブジェクトの作成を {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターを使用して行う様子を示しています。どちらのスクリプトもこれを含んでいます。

```js
const myWorker = new SharedWorker("worker.js");
```

次にどちらのスクリプトも {{domxref("SharedWorker.port")}} プロパティで作成された {{domxref("MessagePort")}} オブジェクトを通してワーカーにアクセスします。 onmessage イベントが addEventListener で装着されると、 `start()` メソッドでポートが手動で開きます。

```js
myWorker.port.start();
```

ポートが開くと、どちらのスクリプトもワーカーにメッセージを送信し、送信されたメッセージを `port.postMessage()` と `port.onmessage` でそれぞれ処理します。

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

ワーカーの内部では、 {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} ハンドラーを使用して上記の同一のポートに接続しています。そのワーカーと関連付けられたポートは、{{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} イベントの `ports` プロパティで接続可能です。その後、ポートを開くために {{domxref("MessagePort")}} の `start()` メソッドを、メインのスレッドから送信されたメッセージを処理するために `onmessage` ハンドラーを使用します。

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
