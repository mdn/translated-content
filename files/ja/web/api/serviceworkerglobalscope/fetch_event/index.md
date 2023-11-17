---
title: "ServiceWorkerGlobalScope: fetch イベント"
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: 6f2391b536a4db607ea94e4ce07396b2cead6a88
---

{{APIRef("Service Workers API")}}

**fetch** イベントは {{domxref("fetch()")}} メソッドが呼び出されたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

このコードスニペットは、[service worker prefetch の例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)（[prefetch の例のライブ版](https://googlechrome.github.io/samples/service-worker/prefetch/)を参照してください）からのものです。 {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} イベントハンドラーは `fetch` イベントを監視します。イベントが発生した時、コードは {{domxref("Cache")}} オブジェクト内で、最初に一致したリクエストに対して解決するプロミスを返します。もし、何も一致しなかった場合は、コードはネットワークからレスポンスを読み取ります。

さらに、このコードは {{domxref("fetch()")}} 操作で発生した例外を処理しています。 HTTP のエラーレスポンス（たとえば、404）は、例外を引き起こさないことに注意してください。適切なエラーコードセットを持った通常のレスポンスオブジェクトを返します。

```js
self.addEventListener("fetch", (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);
        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request)
        .then((response) => {
          console.log("Response from network is:", response);

          return response;
        })
        .catch((error) => {
          console.error(`Fetching failed: ${error}`);
          throw error;
        });
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
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
