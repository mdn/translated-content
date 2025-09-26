---
title: "ServiceWorkerGlobalScope: messageerror イベント"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`messageerror`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、受信メッセージがデシリアライズできない場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## イベント型

{{domxref("ExtendableMessageEvent")}} です。 {{domxref("ExtendableEvent")}} を継承しています。

{{InheritanceDiagram("ExtendableMessageEvent")}}

## イベントプロパティ

_親である {{domxref("ExtendableEvent")}} からプロパティを継承しています_。

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : イベントのデータを返します。任意のデータ型にすることができます。`messageerror` イベントで配信された場合、プロパティは `null` になります。
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} のオリジンを返します。
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)において、イベントソースの最後のイベント ID を表します。
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} オブジェクトへの参照を返します。
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : 関連するメッセージチャネルのポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。

## 例

以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その `postMessage()` 関数を呼び出します。

```js
// main.js
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event は MessageEvent オブジェクトです
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}
```

サービスワーカーは、次のようにして "message" イベントを待ち受けすることでメッセージを受け取ることができます。

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event は ExtendableMessageEvent オブジェクトです
  console.error("Message deserialization failed");
});
```

また、スクリプトは `onmessageerror` を使用してメッセージを待ち受けすることもできます。

```js
// service-worker.js
self.onmessageerror = (event) => {
  // event は ExtendableMessageEvent オブジェクトです
  console.error("Message deserialization failed");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
- {{domxref("ServiceWorker.postMessage()")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
