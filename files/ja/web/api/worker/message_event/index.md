---
title: "Worker: message イベント"
short-title: message
slug: Web/API/Worker/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

`message` イベントは {{domxref('Worker')}} オブジェクトで、ワーカーの親がワーカーからメッセージを受け取ったとき（すなわち、ワーカーが [`DedicatedWorkerGlobalScope.postMessage()`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) を用いてメッセージを送信したとき）に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
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
  - : `MessageEventSource` （{{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} のいずれかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

このコードでは、新しいワーカーを生成して、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を用いてメッセージを待ち受けします。

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

他にも、 `onmessage` イベントハンドラープロパティを使用して待ち受けすることもできます。

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
};
```

ワーカーは [`self.postMessage()`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) を使用してメッセージを送信します。

```js
// static/scripts/worker.js

self.postMessage("I'm alive!");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`messageerror`](/ja/docs/Web/API/Worker/messageerror_event).
- [`DedicatedWorkerGlobalScope.postMessage()`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/postMessage).
