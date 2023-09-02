---
title: Request.cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: f5054555f990996051ea47e4282b905dffb95206
---

{{APIRef("Fetch")}}

**`cache`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストのキャッシュモードを保持します。リクエストがブラウザーの [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching) とどのように作用するかを制御します。

## 値

`RequestCache` 値です。使用可能な値は次のとおりです。

- `default` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。

  - 一致したものが[新しい](/ja/docs/Web/HTTP/Caching#鮮度)場合、キャッシュから返されます。
  - 一致したものが[古い](/ja/docs/Web/HTTP/Caching#鮮度)場合、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `no-store` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新しません*。
- `reload` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新します*。
- `no-cache` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかに関わらず*、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `force-cache` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `only-if-cached` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは [504 Gateway timeout](/ja/docs/Web/HTTP/Status/504) ステータスで応答します。

  `"only-if-cached"` モードは、リクエストの [`mode`](/ja/docs/Web/API/Request/mode) が `"same-origin"` の場合にのみ使用できます。リクエストの `redirect` プロパティが `"follow"` であり、リダイレクトが `"same-origin"` モードに違反していない場合、キャッシュされたリダイレクトを行います。

## 例

```js
// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* consume the response */
});

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", { cache: "reload" }).then((response) => {
  /* consume the response */
});

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* consume the response */
});

// Download a resource with economics in mind! Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* consume the response */
});

// Naive stale-while-revalidate client-level implementation.
// Prefer a cached albeit stale response; but update if it's too old.
// AbortController and signal to allow better memory cleaning.
// In reality; this would be a function that takes a path and a
// reference to the controller since it would need to change the value
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // Workaround for chrome; which fails with a TypeError
      : Promise.reject(e),
  )
  .then((res) => {
    if (res.status === 504) {
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "force-cache",
        mode: "same-origin",
        signal: controller.signal,
      });
    }
    const date = res.headers.get("date"),
      dt = date ? new Date(date).getTime() : 0;
    if (dt < Date.now() - 86_400_000) {
      // if older than 24 hours
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // Other possible conditions
    if (dt < Date.now() - 300_000)
      // If it's older than 5 minutes
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // no cancellation or return value.
    return res;
  })
  .then((response) => {
    /* consume the (possibly stale) response */
  })
  .catch((error) => {
    /* Can be an AbortError/DOMError or a TypeError */
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
