---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: 4f592683ad29346af3866858f9dfe2e812c35f9d
---

{{APIRef("Service Workers API")}}

**`Cache`** インターフェイスは、 {{domxref("Request")}} / {{domxref("Response")}} オブジェクトのペアを保存するストレージの仕組みを提供します。`Cache` オブジェクトがどのくらい持続するかはブラウザーに依存しますが、単一のオリジンのスクリプトは通常、以前に生成された `Cache` オブジェクトの存在を頼りにすることができます。`Cache` インターフェイスは、ワーカーと同様にウィンドウスコープにも公開されていることに注意してください。サービスワーカーの仕様で定義されているとはいえ、サービスワーカーと共に使用する必要はありません。

ひとつのオリジンが、複数の名前付き `Cache` オブジェクトを保有することができます。スクリプト（例えば {{domxref("ServiceWorker")}}） が `Cache` の更新をどのように処理するかを実装するのは作者の責任です。`Cache` 内のアイテムは、明示的に要求されない限り更新されませんし、削除されない限り有効期限はありません。 {{domxref("CacheStorage.open", "CacheStorage.open()")}} を使用して特定の名前付き `Cache` オブジェクトを開き、それから任意の `Cache` のメソッドを呼び出して `Cache` を管理します。

また、定期的にキャッシュ項目を掃除する必要があります。各ブラウザーは、あるオリジンで使用できるキャッシュストレージの総量に厳しい制限を設けています。 `Cache` 容量の概算の使用量は {{domxref("StorageManager.estimate()")}} API を用いて確認することができます。ブラウザーはディスク容量の管理に最善を尽くしますが、あるオリジンのキャッシュストレージを削除することがあります。ブラウザーはふつう、あるオリジンのデータをすべて削除するか、まったく削除しないかのいずれかです。名前を用いてキャッシュをバージョン管理し、安全に操作できるスクリプトのバージョンからのみキャッシュを使用するようにしてください。詳細は、[古いキャッシュの削除](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers#古いキャッシュの削除)を確認してください。

> **メモ:** キーの照合アルゴリズムは、値の中にある [VARY ヘッダー](https://www.fastly.com/blog/best-practices-using-vary-header)に依存しています。そのため、新しいキーを照合するには、キャッシュ内の項目のキーと値の両方を調べる必要があります。

> **メモ:** キャッシュ API は HTTP のキャッシュヘッダーを尊重しません。

{{AvailableInWorkers}}

{{securecontext_header}}

## インスタンスメソッド

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : `Cache` オブジェクト内で最初に一致したリクエストに関連するレスポンスで解決する {{jsxref("Promise")}} を返します。
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : `Cache` オブジェクト内で一致したすべてのレスポンスの配列で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : URL を受け取り、それを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。機能的には `fetch()` を呼び出してから、 `put()` を使用してキャッシュに結果を追加するのと同等です。
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : URL の配列を受け取り、それらを取得して指定されたキャッシュに結果のレスポンスオブジェクトを追加します。
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : リクエストとそのレスポンスの両方を受け取り、指定されたキャッシュへ追加します。
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : request をキーとした `Cache` 項目を探し、一致する `Cache` 項目が見つかった場合は削除して `true` で解決し、`Cache` 項目が見つからなかった場合は `false` で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : `Cache` キーの配列で解決する {{jsxref("Promise")}} を返します。

## 例

このコードスニペットは、[service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) からのものです（[selective caching をライブで](https://googlechrome.github.io/samples/service-worker/selective-caching/)見る）。このコードでは {{domxref("CacheStorage.open()")}} を使用して、 `font/` で始まる `Content-Type` ヘッダー用の `Cache` オブジェクトを開きます。

そしてこのコードは、 {{domxref("Cache.match()")}} を使用してすでにキャッシュ内に一致するフォントがあるかどうかを確認し、もしあれば、それを返します。一致するフォントがなかった場合は、コードはネットワークからフォントを取得して、 {{domxref("Cache.put()")}} を用いて取得したリソースをキャッシュします。

このコードは {{domxref("fetch()")}} の操作で発生する例外を処理します。なお、 HTTP のエラーレスポンス（404 など）はこの例外を発生させません。適切なエラーコードを持つ通常のレスポンスオブジェクトを返します。

このコードスニペットでは、サービスワーカーで使用されるバージョン付きキャッシュのベストプラクティスも示しています。この例ではキャッシュが 1 つしかありませんが、キャッシュが複数でも同じアプローチが利用できます。これはキャッシュの一括指定識別子を、具体的なバージョン付けされたキャッシュ名に対応させます。このコードはまた、 `CURRENT_CACHES` で名前が指定されていないキャッシュをすべて削除します。

このコード例において、 `caches` は {{domxref("ServiceWorkerGlobalScope")}} のプロパティです。これは `CacheStorage` オブジェクトを保持し、 {{domxref("CacheStorage")}} インターフェイスでアクセスすることができます。

> **メモ:** Chrome では、 `chrome://inspect/#service-workers` にアクセスして、登録されたサービスワーカーの下の "inspect" リンクをクリックすると、 [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) スクリプトが行う様々なアクションのログ状態を見ることができます。

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};

self.addEventListener("activate", (event) => {
  // CURRENT_CACHES で指定されていないすべてのキャッシュを削除します。
  // この例ではキャッシュは 1 つしかありませんが、同じロジックで
  // 複数のバージョン化されたキャッシュがある場合も処理できます。
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // このキャッシュ名が「予期される」キャッシュ名のセットに
            // 存在しない場合は、削除します。
            console.log("期限切れのキャッシュを削除:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.open(CURRENT_CACHES.font).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            // event.request の項目がキャッシュにある場合、レスポンスが定義され、
            // それを返すことができます。
            // この例では、フォントリソースのみがキャッシュされることに注意してください。
            console.log(" キャッシュ内にレスポンスあり:", response);

            return response;
          }

          // それ以外の場合、event.request の項目がキャッシュにない場合、
          // レスポンスは undefined となり、リソースを fetch() する必要があります。
          console.log(
            " キャッシュ内に %s のレスポンスが見つかりません。" +
              "ネットワークから取得します…",
            event.request.url,
          );

          // 後で cache.put() の呼び出しで使用する可能性があるため、
          // リクエストで .clone() を呼び出します。
          // fetch() と cache.put() の両方がリクエストを「消費」するため、
          // コピーを作成する必要があります。
          // （https://developer.mozilla.org/ja/docs/Web/API/Request/clone を参照）
          return fetch(event.request.clone()).then((response) => {
            console.log(
              "  ネットワークからの %s のレスポンス: %O",
              event.request.url,
              response,
            );

            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/^font\//i)
            ) {
              // これにより、エラーであることがわかっているレスポンス（つまり、
              // HTTP ステータスコード 4xx または 5xx）のキャッシュが回避されます。
              // また、フォントに対応するレスポンス、すなわち "font/" で始まる
              // Content-Type レスポンスヘッダーを持つもののみをキャッシュする
              // ようにします。
              // なお、不透明なフィルターされたレスポンス
              // https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
              // の場合はレスポンスヘッダーにアクセスできないので、このチェックは
              // 常に失敗し、フォントはキャッシュされません。
              // すべての Google Web Fonts は CORS をサポートするドメインから
              // 提供されるため、ここでは問題になりません。
              // ただし、CORS をサポートしていない他のオリジンのドメインから他の
              // リソースをキャッシュしようとしている場合は、注意が必要です。
              console.log("  レスポンスをキャッシュ: ", event.request.url);
              // レスポンスに対して .clone() を呼び出して、そのコピーを
              // キャッシュに保存します。そうすることで、制御されたページに戻る
              // 元のレスポンスオブジェクトを保持することができます。
              // https://developer.mozilla.org/ja/docs/Web/API/Request/clone
              cache.put(event.request, response.clone());
            } else {
              console.log(
                "  レスポンスをキャッシュしない: ",
                event.request.url,
              );
            }

            // 元のレスポンスオブジェクトを返します。これは、リソース要求を満たすために使用されます。
            return response;
          });
        })
        .catch((error) => {
          // この catch() は、match() または fetch() 操作から発生する
          // 例外を処理します。
          // HTTP エラーレスポンス（404 など）は例外を起動しないことに
          // 注意してください。
          // 適切なエラーコードが設定された、通常のレスポンスオブジェクトを
          // 返します。
          console.error("  フェッチハンドラーのエラー:", error);

          throw error;
        });
    }),
  );
});
```

### クッキーとキャッシュオブジェクト

[フェッチ API](/ja/docs/Web/API/Fetch_API) では {{httpheader("Set-Cookie")}} ヘッダーを、 {{domxref("Response")}} オブジェクトを {{domxref("fetch()")}} から返す前に削除することを要求しています。したがって、 `Response` は `Cache` へ格納されるとき `Set=Cookie` ヘッダーを含まず、クッキーを格納する操作も行われません。

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
