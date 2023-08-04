---
title: "Worker: messageerror イベント"
slug: Web/API/Worker/messageerror_event
l10n:
  sourceCommit: 6d697b8a86ea3ce1bf82615c5dc006aeaa22d90b
---

{{APIRef}}

`messageerror` イベントは、 {{domxref('Worker')}} オブジェクトに、解読 (deserialize) できないメッセージを受け取ったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('messageerror', (event) => { });

onmessageerror = (event) => { };
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
  - : `MessageEventSource` （{{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} の何れかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

ワーカーを作成し、 `message` および `messageerror` イベントを [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) で待ち受けします。

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
    console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
    console.error(`Error receiving message from worker: ${event}`);
});
```

同じですが、 `onmessageerror` イベントハンドラープロパティを使用した例です。

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
    console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
    console.error(`Error receiving message from worker: ${event}`);
};
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [`Worker.postMessage()`](/ja/docs/Web/API/Worker/postMessage)
- 関連イベント: [`message`](/ja/docs/Web/API/Worker/message_event)
