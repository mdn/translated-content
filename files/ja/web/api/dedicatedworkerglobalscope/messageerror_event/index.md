---
title: "DedicatedWorkerGlobalScope: messageerror イベント"
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef}}

`messageerror` イベントは {{domxref('DedicatedWorkerGlobalScope')}} オブジェクトで、シリアライズ解除できないメッセージを受け取ったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
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

`messageerror` は [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して待ち受けします。

```js
// worker.js

self.addEventListener("messageerror", (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
});
```

同じですが、 `onmessageerror` イベントハンドラープロパティを使用しています。

```js
// worker.js

self.onmessageerror = (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- 関連イベント: [`message`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- [`Worker.postMessage()`](/ja/docs/Web/API/Worker/postMessage)
- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
