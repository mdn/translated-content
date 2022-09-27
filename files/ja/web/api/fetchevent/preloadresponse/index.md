---
title: FetchEvent.preloadResponse
slug: Web/API/FetchEvent/PreloadResponse
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} インターフェイスの **`preloadResponse`** 読み取り専用プロパティは、ナビゲーションプリロードがトリガーされた場合はナビゲーションプリロード {{domxref("Response")}} に解決され、それ以外の場合は `undefined` に解決される {{jsxref("Promise")}} を返します。

## 構文

```
var expectedResponse = fetchEvent.preloadResponse;
```

### 値

{{domxref("Response")}} に解決されるか、それ以外の場合は `undefined` に解決される {{jsxref("Promise")}}。

## 例

このコードスニペットは、[ナビゲーションプリロードのページ](https://developers.google.com/web/updates/2017/02/navigation-preload#the-solution)（英語）からのものです。 {{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、`fetch` イベントをリッスンします。 起動したら、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻す Promise を渡します。 この Promise は、{{domxref("Cache")}} オブジェクトで最初に一致した URL リクエストに解決されます。 一致が見つからない場合、コードはプリロード済みのレスポンスをチェックします。 それ以外の場合は、ネットワークからレスポンスをフェッチします。

```js
addEventListener('fetch', event => {
  event.respondWith(async function() {
    // 可能な場合はキャッシュから応答します
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // それ以外の場合は、プリロード済みのレスポンスがあればそれを使用します
    const response = await event.preloadResponse;
    if (response) return response;

    // それ以外の場合は、ネットワークを試します。
    return fetch(event.request);
  }());
});
```

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#fetch-event-preloadresponse', 'preloadResponse')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent.preloadResponse")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
