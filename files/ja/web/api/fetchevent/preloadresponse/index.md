---
title: "FetchEvent: preloadResponse プロパティ"
short-title: preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: d81234a2ce0cc4ceb06622e3cd5d8cb5e447cb6f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`preloadResponse`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、 {{jsxref("Promise")}} を返します。これは、[ナビゲーション先読み](/ja/docs/Web/API/NavigationPreloadManager)が発生した場合はナビゲーション先読みの {{domxref("Response")}} に解決し、それ以外の場合は `undefined` に解決します。

ナビゲーション先読みは、[ナビゲーション先読みが有効](/ja/docs/Web/API/NavigationPreloadManager/enable)であり、リクエストが `GET` リクエストであり、かつナビゲーションリクエスト（ページや iframe を読み込むときにブラウザーが生成）である場合に起動します。

サービスワーカーは、 fetch イベントハンドラーでこのプロミスを待機することで、サービスワーカーの起動中に行われた読み込みリクエストの完了を追跡することができます。

## 値

{{jsxref("Promise")}} で、 {{domxref("Response")}} に解決するか、それ以外の場合は `undefined` に解決します。

## 例

このコードスニペットは、 [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) <sup>(英語)</sup>からのものです。

{{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} イベントハンドラーは、`fetch` イベントを待ち受けします。
起動したら、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻すプロミスを渡します。
このプロミスは、リクエストされたリソースに解決します。

もし {{domxref("Cache")}} オブジェクトの中に一致する URL リクエストがあれば、コードはキャッシュからレスポンスを返すためのプロミスを返します。
キャッシュに一致するものが見つからなかった場合、コードは `preloadResponse` にあるプロミスを返します。
キャッシュや先読みされたレスポンスに一致するものがない場合、コードはネットワークからレスポンスをフェッチし、関連するプロミスを返します。

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const preloadResponsePromise = event.preloadResponse;

      // 可能な場合はキャッシュから応答する
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        // レスポンスを使用しない場合でも、ナビゲーションの先読みリクエストを有効な状態に保つ。
        event.waitUntil(preloadResponsePromise.catch(() => undefined));
        return cachedResponse;
      }

      // それ以外の場合は、先読み済みのレスポンスがあればそれを使用する
      const response = await preloadResponsePromise;
      if (response) return response;

      // それ以外の場合は、ネットワークを試す
      return fetch(event.request);
    })(),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload)<sup>(英語)</sup>
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)<sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
