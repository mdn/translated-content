---
title: "DedicatedWorkerGlobalScope: message イベント"
slug: Web/API/DedicatedWorkerGlobalScope/message_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef}}

`message` イベントは、ワーカーが親からメッセージを受け取ったとき（つまり、親が [`Worker.postMessage()`](/ja/docs/Web/API/Worker/postMessage) を使用してメッセージを送信したとき） {{domxref('DedicatedWorkerGlobalScope')}} オブジェクトで発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : メッセージ送信者から送信されたデータです。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信者のオリジンを表します。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントの固有の ID を表します。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : `MessageEventSource` （{{domxref("Window")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} の何れかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

以下のコードでは {{domxref("Worker")}} オブジェクトを、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを用いて生成しています。フォームの入力欄 `first` 内の値が変更されると、メッセージがワーカーに渡されます。ワーカーから戻ってきたメッセージを処理するために、{{domxref("Worker.message_event", "onmessage")}} ハンドラーもあります。

```js
// main.js

const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

// worker.js

self.onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

`main.js` スクリプトでは、ワーカースクリプトからのメッセージを処理するために `onmessage` ハンドラーを使用しています。

```js
// main.js

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

他に、スクリプトで [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用してメッセージを待ち受けすることができます。

```js
// worker.js

self.addEventListener("message", (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
});
```

メインスクリプトでは `onmessage` を `myWorker` で呼び出す必要がありますが、ワーカススクリプトの内部では `onmessage` だけで済みます。ワーカーは事実上グローバルスコープ ({{domxref("DedicatedWorkerGlobalScope")}}) になっているからです。

完全な例は、[基本的な専用ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)を参照してください（[専用ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- 関連イベント: [`messageerror`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- [`Worker.postMessage()`](/ja/docs/Web/API/Worker/postMessage)
- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
