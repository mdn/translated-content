---
title: "Request: cache プロパティ"
short-title: cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`cache`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストのキャッシュモードを保持します。リクエストがブラウザーの [HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching) とどのように作用するかを制御します。

## 値

`RequestCache` 値です。使用可能な値は次のとおりです。

- `default` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。
  - 一致したものが[新しい](/ja/docs/Web/HTTP/Guides/Caching#age_に基づく新鮮さと古さ)場合、キャッシュから返されます。
  - 一致したものが[古い](/ja/docs/Web/HTTP/Guides/Caching#age_に基づく新鮮さと古さ)場合、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `no-store` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新しません*。
- `reload` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新します*。
- `no-cache` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。
  - 一致するものが*新しいか古いかに関わらず*、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `force-cache` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。
  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `only-if-cached` — ブラウザーは、 HTTP キャッシュで一致するリクエストを探します。 {{experimental_inline}}
  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは [504 Gateway timeout](/ja/docs/Web/HTTP/Reference/Status/504) ステータスで応答します。

  `"only-if-cached"` モードは、リクエストの [`mode`](/ja/docs/Web/API/Request/mode) が `"same-origin"` の場合にのみ使用できます。リクエストの `redirect` プロパティが `"follow"` であり、リダイレクトが `"same-origin"` モードに違反していない場合、キャッシュされたリダイレクトを行います。

## 例

```js
// キャッシュを完全にバイパスするために、キャッシュ無効で
// リソースをダウンロードします。
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* レスポンスを消費 */
});

// キャッシュ無効でリソースをダウンロードしますが、
// ダウンロードしたリソースで HTTP キャッシュを更新します。
fetch("some.json", { cache: "reload" }).then((response) => {
  /* レスポンスを消費 */
});

// 正しい ETag および Date ヘッダーを送信し、If-Modified-Since と
// If-None-Match リクエストヘッダーを適切に処理するよう適切に
// 構成されたサーバーを扱う際には、キャッシュ無効でリソースを
// ダウンロードします。これにより、新鮮なレスポンスを保証する
// 検証をシンラインすることができます。
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* レスポンスを消費 */
});

// 経済性を考慮してリソースをダウンロードします。できるだけ多くの
// 帯域幅を確保するために、キャッシュされた古いレスポンスを優先します。
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* レスポンスを消費 */
});

// 単純な期限切れを再検証するクライアントレベルの実装。
// キャッシュされた古いレスポンスを優先しますが、あまりにも古い場合は更新します。
// AbortController および signal により、よりよくメモリーの掃除ができます。
// 実際には、値を変更する必要があるため、パスとコントローラーの参照を取る関数となります。
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // Chrome の回避策。TypeError で失敗する
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
      // 24 時間以上古ければ
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // その他の条件
    if (dt < Date.now() - 300_000)
      // 5 分以上古ければ
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // no cancellation or return value.
    return res;
  })
  .then((response) => {
    /* （おそらく古い）レスポンスを消費する */
  })
  .catch((error) => {
    /* AbortError/DOMException または TypeError となる */
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
