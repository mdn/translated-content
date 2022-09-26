---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
---

{{APIRef("Service Workers API")}}

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) の **`ExtendableMessageEvent`** インターフェイスは、（別のコンテキストからのメッセージを {{domxref("ServiceWorkerGlobalScope")}} で受信した時に）サービスワーカーで発生する {{event("message_(ServiceWorker)","message")}} イベントのイベントオブジェクトを表し、このようなイベントの存続期間を延長します。

このインターフェイスは、{{domxref("ExtendableEvent")}} インターフェイスを継承しています。

## コンストラクター

- {{domxref("ExtendableMessageEvent.ExtendableMessageEvent","ExtendableMessageEvent()")}}
  - : 新しい `ExtendableMessageEvent` オブジェクトのインスタンスを作成します。

## プロパティ

_親の {{domxref("ExtendableEvent")}} からプロパティを継承します。_

- {{domxref("ExtendableMessageEvent.data")}} {{readonlyinline}}
  - : イベントのデータを返します。 任意のデータ型を使用できます。
- {{domxref("ExtendableMessageEvent.origin")}} {{readonlyinline}}
  - : メッセージを送信した {{domxref("Client")}} のオリジンを返します。
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{readonlyinline}}
  - : サーバー送信イベント（[server-sent events](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)）で、イベントソースの最後のイベント ID を表します。 これは空の文字列です。
- {{domxref("ExtendableMessageEvent.source")}} {{readonlyinline}}
  - : メッセージを送信した {{domxref("Client")}} オブジェクトへの参照を返します。
- {{domxref("ExtendableMessageEvent.ports")}} {{readonlyinline}}
  - : 関連するメッセージチャンネルのポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。

## メソッド

_親の {{domxref("ExtendableEvent")}} からメソッドを継承します。_

## 例

以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その `postMessage()` 関数を呼び出します。

```js
// 制御されているページ内
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event => {
    // event は MessageEvent オブジェクトです
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration => {
    registration.active.postMessage("Hi service worker");
  });

}
```

次のように、サービスワーカーは、`message` イベントをリッスンしてメッセージを受信できます。

```js
// サービスワーカー内
addEventListener('message', event => {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## 仕様

| 仕様                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#extendablemessageevent', 'ExtendableMessageEvent')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ExtendableMessageEvent")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Channel Messaging](/ja/docs/Web/API/Channel_Messaging_API)
