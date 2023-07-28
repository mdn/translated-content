---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Service Workers API")}}

**`ExtendableMessageEvent`** は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、（別のコンテキストからのメッセージを {{domxref("ServiceWorkerGlobalScope")}} で受信した時に）サービスワーカーで発生する {{domxref("ServiceWorkerGlobalScope/message_event", "message")}} イベントのイベントオブジェクトを表し、このようなイベントの存続期間を延長します。

このインターフェイスは、{{domxref("ExtendableEvent")}} インターフェイスを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ExtendableMessageEvent.ExtendableMessageEvent","ExtendableMessageEvent()")}}
  - : 新しい `ExtendableMessageEvent` オブジェクトのインスタンスを作成します。

## プロパティ

_親の {{domxref("ExtendableEvent")}} からプロパティを継承しています。_

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : イベントのデータを返します。 任意のデータ型が使用できます。
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} のオリジンを返します。
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)における、イベントソースの最後のイベント ID を表します。 これは空文字列です。
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : メッセージを送信した {{domxref("Client")}} オブジェクトへの参照を返します。
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : 関連するメッセージチャンネルのポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。

## メソッド

_親の {{domxref("ExtendableEvent")}} からメソッドを継承しています。_

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

サービスワーカーは次のようにして、 `message` イベントを待ち受けしてメッセージを受信できます。

```js
// サービスワーカー内
addEventListener("message", (event) => {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [チャンネルメッセージング](/ja/docs/Web/API/Channel_Messaging_API)
