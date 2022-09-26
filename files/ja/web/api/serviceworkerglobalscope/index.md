---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
---

{{APIRef("Service Workers API")}}

`ServiceWorkerGlobalScope` は [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API) のインターフェイスで、サービスワーカーのグローバル実行コンテキストを表します。

開発者は ServiceWorker の状態が停止/再起動サイクルをまたいで続かないことを心にとめておいてください。このため各イベントハンドラーは、むき出しの、デフォルトのグローバル状態で実行されることを想定すべきです。

いったん正しく登録されたら、サービスワーカーはメモリーとプロセッサーの力を温存するため、アイドル時であれば停止させることができます。アクティブなサービスワーカーはイベント、例えば {{domxref("ServiceWorkerGlobalScope.onfetch")}} や {{domxref("ServiceWorkerGlobalScope.onmessage")}} に応じて自動的に再起動します。

加えて、同期リクエストはサービスワーカーでは許可されていません— 非同期リクエスト、つまり{{domxref("GlobalFetch.fetch", "fetch()")}} メソッド経由で初期化されたものが使われます。

このインターフェイスは {{domxref("WorkerGlobalScope")}} インターフェイスと、その親の {{domxref("EventTarget")}} を継承し、このため {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, {{domxref("WindowEventHandlers")}} のプロパティを実装しています。

{{InheritanceDiagram(700, 85, 20)}}

## プロパティ

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{readonlyinline}}
  - : サービスワーカーに関連する {{domxref("Clients")}} オブジェクトを含む。
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{readonlyinline}}
  - : サービスワーカーの登録を表す {{domxref("ServiceWorkerRegistration")}} オブジェクトを含む。
- {{domxref("ServiceWorkerGlobalScope.caches")}} {{readonlyinline}}
  - : サービスワーカーに関連する {{domxref("CacheStorage")}} オブジェクトを含む。

## イベント

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : {{domxref("ServiceWorkerRegistration")}} が新しい {{domxref("ServiceWorkerRegistration.active")}} ワーカーを得た時に発生します。
    {{domxref("ServiceWorkerGlobalScope.onactivate")}} プロパティからも利用できます。
- `fetch`
  - : {{domxref("GlobalFetch.fetch", "fetch()")}} が呼び出されたときに発生します。
    {{domxref("ServiceWorkerGlobalScope.onfetch")}} プロパティからも利用できます。
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : {{domxref("ServiceWorkerRegistration")}} が新しい {{domxref("ServiceWorkerRegistration.installing")}} ワーカーを得た時に発生します。
    {{domxref("ServiceWorkerGlobalScope.oninstall")}} プロパティからも利用できます。
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : メッセージを受信したときに発生します。制御中のページは {{domxref("MessagePort.postMessage()")}} メソッドを使用してサービスワーカーにメッセージを送信することができます。サービスワーカーは任意で [`event.data.port`](https://html.spec.whatwg.org/multipage/comms.html#messageport) で公開されている {{domxref("MessagePort")}} を通じて、対応する制御中のページに返信することができます。
    {{domxref("ServiceWorkerGlobalScope.onmessage")}} プロパティからも利用できます。
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : 表示された通知をユーザーがクリックしたときに発生します。
    {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} プロパティからも利用できます。
- `notificationclose`
  - : 表示された通知をユーザーが閉じたときに発生します。
    {{domxref("ServiceWorkerGlobalScope.onnotificationclose")}} プロパティからも利用できます。
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : サーバーのプッシュ通知が届いたときに発生します。
    {{domxref("ServiceWorkerGlobalScope.onpush")}} プロパティからも利用できます。
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : プッシュ通知への加入が無効化されたとき、または無効化されようとするとき (例えば、プッシュ通知の有効期限が設定されたとき) に発生します。
    {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}} プロパティからも利用できます。
- `sync`
  - : サービスワーカーのクライアントページから {{domxref("SyncManager.register")}} への呼び出しが行われたときに発生します。ネットワークが有効であるか、すぐに利用可能になるのであれば、直ちに同期が試みられます。
    {{domxref("ServiceWorkerGlobalScope.onsync")}} プロパティからも利用できます。

## メソッド

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : 現在のサービスワーカーの登録を、待ち状態からクライアントが使っている時のアクティブ状態に進めます。

`ServiceWorkerGlobalScope` は {{domxref("WorkerGlobalScope")}} を実装します — これは {{domxref("GlobalFetch")}} を実装します。このため利用できる次のプロパティも持っています:

- {{domxref("GlobalFetch.fetch()")}}
  - : リソース取得(fetch)のプロセスを開始します。これはリクエストのレスポンスを表す {{domxref("Response")}} オブジェクトを解決する promise を返します。このアルゴリズムは service worker コンテキストに渡される fetch 処理のエントリーポイントです。

## 例

このコードスニペットは、[service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)（[prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/) を参照してください）からのものです。{{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは `fetch` イベントを監視します。イベントが発火した時、コードは {{domxref("Cache")}} オブジェクト内で、最初にマッチングしたリクエストに対して解決するプロミスを返します。もし、何もマッチしなかった場合は、コードはネットワークからのレスポンスをフェッチします。

さらに、このコードは {{domxref("GlobalFetch.fetch", "fetch()")}} 演算から投げられた例外をハンドリングします。 HTTP のエラーレスポンス (たとえば、404) は、例外を引き起こさないことにご注意ください。適切なエラーコードセットを持った通常のレスポンスオブジェクトを返します。

```js
self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }, function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
```

## 仕様書

| 仕様書                                                                                                                               | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#serviceworkerglobalscope-interface', 'ServiceWorkerGlobalScope')}} | {{Spec2('Service Workers')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope")}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/Guide/Performance/Using_web_workers)
