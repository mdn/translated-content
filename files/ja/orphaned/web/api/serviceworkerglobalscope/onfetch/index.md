---
title: ServiceWorkerGlobalScope.onfetch
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onfetch
original_slug: Web/API/ServiceWorkerGlobalScope/onfetch
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`onfetch`** プロパティは、{{Event("fetch")}} イベントが発生するたびに（通常、{{domxref("WindowOrWorkerGlobalScope.fetch()")}} メソッドが呼び出されたときに）発火するイベントハンドラーです。

## 構文

```
serviceWorkerGlobalScope.onfetch = function(fetchEvent) { ... };
```

## 例

このコードスニペットは、[サービスワーカーのプリフェッチの例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)からのものです（[プリフェッチの例をライブで](https://googlechrome.github.io/samples/service-worker/prefetch/)見る）。{{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、`fetch` イベントをリッスンします。 コードが実行されると、コードは、{{domxref("Cache")}} オブジェクト内の最初に一致するリクエストに解決するプロミスを返します。 一致が見つからない場合、コードはネットワークからレスポンスをフェッチします。

このコードは、{{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} 操作からスローされた例外も処理します。 HTTP エラーレスポンス（404 など）は例外をトリガーしないことに注意してください。 適切なエラーコードが設定された通常のレスポンスオブジェクトを返します。

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
      }).catch(function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
```

## 仕様

| 仕様                                                                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onfetch")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
