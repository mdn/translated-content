---
title: Request.cache
slug: Web/API/Request/cache
---

{{APIRef("Fetch")}}

{{domxref("Request")}} インターフェースの **`cache`** 読み取り専用プロパティには、リクエストのキャッシュモードが含まれています。リクエストがブラウザの [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching) とどのように相互作用するかを制御します。

## 構文

```js
var currentCacheMode = request.cache;
```

### 値

`RequestCache` 使用可能な値は次のとおりです。

- `default` — ブラウザは、HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが[新しい](/ja/docs/Web/HTTP/Caching#Freshness)場合、キャッシュから返されます。
  - 一致するものが古い場合、ブラウザはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `no-store` — ブラウザは、最初にキャッシュを調べずにリモートサーバーからリソースをフェッチし、ダウンロードしたリソースでキャッシュを*更新しません*。
- `reload` — ブラウザは、最初にキャッシュを調べずにリモートサーバーからリソースをフェッチし、ダウンロードしたリソースでキャッシュを*更新します*。
- `no-cache` — ブラウザは、HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかを問わず*、ブラウザはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `force-cache` — ブラウザは、HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかを問わず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `only-if-cached` — ブラウザは、HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかを問わず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザは [504 ゲートウェイタイムアウト](/ja/docs/Web/HTTP/Status/504)ステータスで応答します。

  `"only-if-cached"` モードは、リクエストの[`モード`](/ja/docs/Web/API/Request/mode)が `"same-origin"` の場合にのみ使用できます。リクエストの`リダイレクト`プロパティが `"follow"` であり、リダイレクトが `"same-origin"` モードに違反していない場合、キャッシュされたリダイレクトがフォローされます。

## 例

```js
// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", {cache: "no-store"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", {cache: "reload"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", {cache: "no-cache"})
  .then(function(response) { /* consume the response */ });

// Download a resource with economics in mind!  Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", {cache: "force-cache"})
  .then(function(response) { /* consume the response */ });

// Naive stale-while-revalidate client-level implementation.
// Prefer a cached albeit stale response; but update if it's too old.
// AbortController and signal to allow better memory cleaning.
// In reality; this would be a function that takes a path and a
// reference to the controller since it would need to change the value
let controller = new AbortController();
fetch("some.json", {cache: "only-if-cached", mode: "same-origin", signal: controller.signal})
  .catch(e => e instanceof TypeError && e.message === "Failed to fetch" ?
    ({status: 504}) : // Workaround for chrome; which simply fails with a typeerror
    Promise.reject(e))
  .then(res => {
    if (res.status === 504) {
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "force-cache", mode: "same-origin", signal: controller.signal})
    }
    const date = res.headers.get("date"), dt = date ? new Date(date).getTime() : 0
    if (dt < (Date.now() - 86400000)) {
      // if older than 24 hours
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "reload", mode: "same-origin", signal: controller.signal})
    }

    // Other possible conditions
    if (dt < (Date.now() - 300000)) // If it's older than 5 minutes
      fetch("some.json", {cache: "no-cache", mode: "same-origin"}) // no cancellation or return value.
    return res
  })
  .then(function(response) { /* consume the (possibly stale) response */ })
  .catch(error => { /* Can be an AbortError/DOMError or a TypeError */ });
```

## Specifications

| 仕様書                                                               | 状態                     | コメント           |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-cache','cache')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.Request.cache")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
