---
title: FetchEvent.preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Service Workers API")}}

**`preloadResponse`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、 {{jsxref("Promise")}} を返します。これは、[ナビゲーション先読み](/ja/docs/Web/API/NavigationPreloadManager)が発生した場合はナビゲーション先読みの {{domxref("Response")}} に解決し、れ以外の場合は `undefined` に解決します。

ナビゲーション先読みは、[ナビゲーション先読みが有効](/ja/docs/Web/API/NavigationPreloadManager/enable)であり、リクエストが `GET` リクエストであり、かつナビゲーションリクエスト（ページや iframe を読み込むときにブラウザーが生成）である場合に起動します。

サービスワーカーは、 fetch イベントハンドラーでこのプロミスを待機することで、サービスワーカーの起動中に行われた読み込みリクエストの完了を追跡することができます。

## 値

{{jsxref("Promise")}} で、 {{domxref("Response")}} に解決するか、それ以外の場合は `undefined` に解決します。

## 例

このコードスニペットは、 [Speed up Service Worker with Navigation Preloads](https://developer.chrome.com/blog/navigation-preload/) （英語）からのものです。

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
      // 可能な場合はキャッシュから応答します
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // それ以外の場合は、プリロード済みのレスポンスがあればそれを使用します
      const response = await event.preloadResponse;
      if (response) return response;

      // それ以外の場合は、ネットワークを試します。
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

- [Speed up Service Worker with Navigation Preloads](https://developer.chrome.com/blog/navigation-preload/)（英語）
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
