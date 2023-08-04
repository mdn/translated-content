---
title: "ServiceWorkerGlobalScope: message イベント"
slug: Web/API/ServiceWorkerGlobalScope/message_event
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Service Workers API")}}

**`message`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、着信メッセージを受信したときに発生します。 制御されたページは、 {{domxref("Worker.postMessage()", "ServiceWorker.postMessage()")}} メソッドを使用して、サービスワーカーにメッセージを送信することができます。
サービスワーカーは、任意で、制御されたページに対応する {{domxref("Client.postMessage()")}} を介して返信することができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## イベント型

{{domxref("ExtendableMessageEvent")}} です。 {{domxref("ExtendableEvent")}} を継承しています。

{{InheritanceDiagram("ExtendableMessageEvent")}}

## イベントプロパティ

_親である {{domxref("ExtendableEvent")}} からプロパティを継承しています_。

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : イベントのデータを返します。任意のデータ型にすることができます。
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} のオリジンを返します。
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)において、イベントソースの最後のイベント ID を表します。これは空文字列です。
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} オブジェクトへの参照を返します。
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : 関連するメッセージチャネルのポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。

## 例

以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その `postMessage()` 関数を呼び出します。

```js
// 制御されているページ内
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
// サービスワーカー内
addEventListener("message", (event) => {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

また、スクリプトは `onmessage` を使用してメッセージを待ち受けすることもできます。

```js
// service-worker.js
self.onmessage = (event) => {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
