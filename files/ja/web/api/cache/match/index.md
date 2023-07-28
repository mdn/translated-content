---
title: Cache.match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Service Workers API")}}

**`match()`** は {{domxref("Cache")}} インターフェイスのメソッドで、{{domxref("Cache")}} オブジェクトで最初に一致したリクエストに関連付けられた {{domxref("Response")}} に解決される {{jsxref("Promise")}} を返します。一致するものが見つからない場合、{{jsxref("Promise")}} は {{jsxref("undefined")}} に解決されます。

## 構文

```js-nolint
match(request)
match(request, options)
```

### 引数

- `request`
  - : {{domxref("Cache")}} 内でレスポンスを見つけようとしている {{domxref("Request")}}。 これは、{{domxref("Request")}} オブジェクトまたは URL です。
- `options` {{optional_inline}}

  - : `match` 操作のオプションを設定するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoreSearch`
      - : 論理値で、URL のクエリー文字列を無視するかどうかを指定します。 例えば、`true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` の部分は、照合の実行時に無視されます。 既定値は `false` です。
    - `ignoreMethod`
      - : 論理値で、`true` に設定すると、照合操作が {{domxref("Request")}} の `http` メソッドを検証しないようにします（通常、`GET` および `HEAD` のみが許可されます）。 既定値は `false` です。
    - `ignoreVary`
      - : 論理値で、`true` に設定すると、`VARY` ヘッダーの照合を実行しないように照合操作に指示します。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 既定値は `false` です。

### 返値

リクエストに一致した最初の {{domxref("Response")}} に解決し、一致するものが見つからない場合は {{jsxref("undefined")}} に解決する {{jsxref("Promise")}} です。

> **メモ:** `Cache.match()` は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致したレスポンスのみ（つまり、`response[0]`）で解決することを除いて、基本的に {{domxref("Cache.matchAll()")}} と同じです。

## 例

この例は、[カスタムオフラインページ](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js)の例（[ライブデモ](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)）からの引用です。 リクエストが失敗した場合、キャッシュを使用して選択したデータを提供します。 `catch()` 句は、`fetch()` の呼び出しが例外をスローしたときにトリガーされます。 `catch()` 句の内部では、 `match()` を使用して正しいレスポンスを返します。

この例では、HTTP の GET メソッドで取得された HTML 文書のみがキャッシュされます。 `if ()` 条件が false の場合、このフェッチハンドラーはリクエストに介入しません。他のフェッチハンドラーが登録されている場合、それらは `event.respondWith()` を呼び出す機会を得ます。 フェッチハンドラーが `event.respondWith()` を呼び出さなかった場合、リクエストはブラウザーによって処理され、サービスワーカーが関与していないかのように処理されます。 `fetch()` が 4xx または 5xx の範囲のレスポンスコードで有効な HTTP レスポンスを返す場合、`catch()` は呼び出されません。

```js
self.addEventListener("fetch", (event) => {
  // これが HTML 文書に対する GET リクエストである場合のみ、event.respondWith() を呼び出します。
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    console.log("フェッチイベントの処理: ", event.request.url);
    event.respondWith(
      fetch(event.request).catch((e) => {
        console.error("フェッチ失敗、代わりにオフラインページに戻ります。", e);
        return caches
          .open(OFFLINE_CACHE)
          .then((cache) => cache.match(OFFLINE_URL));
      }),
    );
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
