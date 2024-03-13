---
title: "ServiceWorkerContainer: message イベント"
slug: Web/API/ServiceWorkerContainer/message_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef}}

**`message`** イベントは、サービスワーカーからメッセージを受信するために、サービスワーカーによって制御されるページで使用します。

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

_このインターフェイスは親である {{domxref("Event")}} からプロパティを継承しています。_

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

## 例

この例では、サービスワーカーは [`fetch`](/ja/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) イベントからクライアントの ID を取得し、[`Client.postMessage`](/ja/docs/Web/API/Client/postMessage) を使用してメッセージを送信します。

```js
// サービスワーカー内
async function messageClient(clientId) {
  const client = await clients.get(clientId);
  client.postMessage("こんにちはクライアント！");
}

addEventListener("fetch", (event) => {
  messageClient(event.clientId);
  event.respondWith(() => {
    // …
  });
});
```

クライアントは `message` イベントを待ち受けしてメッセージを受信できます。

```js
// main.js
navigator.serviceWorker.addEventListener("message", (message) => {
  console.log(message);
});
```

あるいは、クライアントは `onmessage` イベントハンドラーでメッセージを受信することもできます。

```js
// main.js
navigator.serviceWorker.onmessage = (message) => {
  console.log(message);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
