---
title: FetchEvent.request
slug: Web/API/FetchEvent/request
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Service Workers API")}}

**`request`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、イベントハンドラーを起動した {{domxref("Request")}} を返します。

このプロパティは null 不可です（Firefox の場合、バージョン 46 以降）。 他の方法でリクエストが提供されない場合、コンストラクターの `options` オブジェクトにリクエストを設定する必要があります（{{domxref("FetchEvent.FetchEvent()")}} を参照）。

### 値

{{domxref("Request")}} オブジェクトです。

## 例

このコードスニペットは、[サービスワーカーのフェッチの例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)からのものです（[フェッチの例をライブで実行](https://googlechrome.github.io/samples/service-worker/prefetch/)）。 {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} イベントハンドラーは、`fetch` イベントを待ち受けします。イベントが発生、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻すプロミスを渡します。
このプロミスは、{{domxref("Cache")}} オブジェクトで最初に一致した URL リクエストに解決されます。 一致が見つからない場合、コードはネットワークからレスポンスをフェッチします。

このコードは、{{domxref("fetch()")}} 操作で発生した例外も処理します。 HTTP のエラーレスポンス（404 など）でも例外は発生しないことに注意してください。然るべきエラーコードが設定された通常のレスポンスオブジェクトを返します。

```js
self.addEventListener("fetch", (event) => {
  console.log("フェッチイベントの処理:", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("キャッシュで見つかったレスポンス:", response);

        return response;
      }
      console.log(
        "キャッシュにレスポンスが見つかりません。 ネットワークから読み取ります...",
      );

      return fetch(event.request)
        .then((response) => {
          console.log("ネットワークからのレスポンス:", response);

          return response;
        })
        .catch((error) => {
          console.error("フェッチ失敗:", error);

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
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
