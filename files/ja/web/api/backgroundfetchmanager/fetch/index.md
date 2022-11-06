---
title: BackgroundFetchManager.fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchManager")}} インターフェイスの **`fetch()`** メソッドは、引数に与えられた配列( URL や {{domxref("Request")}} オブジェクトで構成される) に対して、{{domxref("BackgroundFetchRegistration")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### 引数

- `id`
  - : {{domxref("backgroundFetchRegistration")}} を取得するために他のメソッドに渡すことができる、開発者定義の識別子。
- `requests`
  - : {{domxref("RequestInfo")}} オブジェクトか、その配列。
- `options` {{optional_inline}}
  - : {{domxref("BackgroundFetchOptions")}} オブジェクト。

### 返値

{{domxref("BackgroundFetchRegistration")}} オブジェクトで解決される {{jsxref("Promise")}} 。

### 例外

- {{jsxref("TypeError")}}
  - : 次のような場合に発生します。リクエストが与えられていない場合、リクエストのモードが 'no-cors' の場合、サービスワーカーが存在しない場合、リクエストされた `id` のリクエストが既に存在する場合、またはリクエストが失敗した場合。
- `AbortError` {{domxref("DOMException")}}
  - : fetch が失敗したことを示します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : バックグラウンド fetch を作成するためのユーザー権限が与えられていないことを示します。

## 例

下記の例は `fetch()` を使用して {{domxref("BackgroundFetchRegistration")}} を作成する方法を示しています。 アクティブな {{domxref('ServiceWorker', 'service worker')}} で、 {{domxref('ServiceWorkerRegistration.backgroundFetch')}} プロパティを使用して `BackgroundFetchManager` オブジェクトにアクセスし、その `fetch()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    }
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
