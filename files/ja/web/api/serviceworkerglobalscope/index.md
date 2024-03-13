---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Service Workers API")}}

**`ServiceWorkerGlobalScope`** は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカーのグローバル実行コンテキストを表します。

開発者は、サービスワーカーの状態が終了/再起動サイクルに渡って維持されないことを覚えておく必要があります。したがって、それぞれのイベントハンドラーは、それが裸の、既定のグローバル状態で呼び出されることを想定する必要があります。

いったん正しく登録されたら、サービスワーカーはメモリーとプロセッサーの力を温存するため、アイドル時であれば停止させることができます。アクティブなサービスワーカーは、例えば {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} や {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} などのイベントに応じて自動的に再起動します。

加えて、同期リクエストはサービスワーカーでは許可されていません。非同期リクエスト、つまり {{domxref("fetch()")}} メソッド経由で初期化されたものが使われます。

このインターフェイスは {{domxref("WorkerGlobalScope")}} インターフェイスと、その親の {{domxref("EventTarget")}} を継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("caches")}} {{ReadOnlyInline}}
  - : サービスワーカーに関連づけられた {{domxref("CacheStorage")}} オブジェクトを保持します。
- {{domxref("ServiceWorkerGlobalScope.clients")}} {{ReadOnlyInline}}
  - : サービスワーカーに関連付けられた {{domxref("Clients")}} オブジェクトを保持します。
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{ReadOnlyInline}}
  - : サービスワーカーの登録を表す {{domxref("ServiceWorkerRegistration")}} オブジェクトを保持します。

## イベント

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : {{domxref("ServiceWorkerRegistration")}} が新しい {{domxref("ServiceWorkerRegistration.active")}} ワーカーを得た時に発生します。
- {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} {{Experimental_Inline}}
  - : 決済アプリのサービスワーカーで発行され、決済を処理する準備ができたかどうかを調べるために使用されます。特に、販売者のウェブサイトが {{domxref("PaymentRequest.PaymentRequest", "new PaymentRequest()")}} を呼び出すと発行されます。
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : {{domxref("ContentIndex", "コンテンツ索引", "", 1)}}からアイテムが取り除かれたときに発生します。
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : {{domxref("fetch()")}} が呼び出されたときに発生します。
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : {{domxref("ServiceWorkerRegistration")}} が新しい {{domxref("ServiceWorkerRegistration.installing")}} ワーカーを得た時に発生します。
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : メッセージを受信したときに発生します。制御中のページは {{domxref("MessagePort.postMessage()")}} メソッドを使用してサービスワーカーにメッセージを送信することができます。サービスワーカーは任意で [`event.data.port`](https://html.spec.whatwg.org/multipage/comms.html#messageport) で公開されている {{domxref("MessagePort")}} を通じて、対応する制御中のページに返信することができます。
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : 表示された通知をユーザーがクリックしたときに発生します。
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : 表示された通知をユーザーが閉じたときに発生します。
- {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} {{Experimental_Inline}}
  - : 販売者のウェブサイトで {{domxref("PaymentRequest.show()")}} メソッドを介して支払いフローが開始されたときに、支払いアプリで発行されます。
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : サービスワーカーのクライアントページから {{domxref("SyncManager.register")}} への呼び出しが行われたときに発生します。ネットワークが有効であるか、すぐに利用可能になるのであれば、直ちに同期が試みられます。
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} {{Experimental_Inline}}
  - : {{domxref("PeriodicSyncManager")}} を登録したときに指定した周期で発生します。
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : サーバーのプッシュ通知が届いたときに発生します。
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : プッシュ通知への加入が無効化されたとき、または無効化されようとするとき (例えば、プッシュ通知の有効期限が設定されたとき) に発生します。

## インスタンスメソッド

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : 現在のサービスワーカーの登録を、待ち状態からクライアントが使っている時のアクティブ状態に進めます。

`ServiceWorkerGlobalScope` は {{domxref("WorkerGlobalScope")}} を実装しています。このため利用できる以下のプロパティもあります。

- {{domxref("fetch()")}}
  - : リソース取得 (fetch) のプロセスを開始します。これはリクエストのレスポンスを表す {{domxref("Response")}} オブジェクトを解決するプロミスを返します。このアルゴリズムはサービスワーカーコンテキストに渡されるフェッチ処理のエントリーポイントです。

## 例

このコードスニペットは、[service worker prefetch の例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)（[prefetch の例のライブ版](https://googlechrome.github.io/samples/service-worker/prefetch/)を参照してください）からのものです。 {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} イベントハンドラーは `fetch` イベントを監視します。イベントが発生した時、コードは {{domxref("Cache")}} オブジェクト内で、最初に一致したリクエストに対して解決するプロミスを返します。もし、何も一致しなかった場合は、コードはネットワークからレスポンスを読み取ります。

さらに、このコードは {{domxref("fetch()")}} 操作で発生した例外を処理しています。 HTTP のエラーレスポンス（たとえば、404）は、例外を引き起こさないことに注意してください。適切なエラーコードセットを持った通常のレスポンスオブジェクトを返します。

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request).then(
        (response) => {
          console.log("Response from network is:", response);

          return response;
        },
        (error) => {
          console.error("Fetching failed:", error);

          throw error;
        },
      );
    }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
