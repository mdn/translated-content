---
title: Cache
slug: Web/API/Cache
---

{{APIRef("Service Workers API")}}

**`Cache`** インターフェイスは、[`Request`](http://fetch.spec.whatwg.org/#request) / [`Response`](http://fetch.spec.whatwg.org/#response) オブジェクトのペアのためのストレージの仕組みを提供します。例えば、 {{domxref("ServiceWorker")}} のライフサイクルの一部としてこれらをキャッシュします。なお、 `Cache` インターフェイスは、ワーカーだけでなくウィンドウスコープにも公開されています。サービスワーカーの仕様書で定義されているものですが、必ずしもサービスワーカーとの組み合わせで使用する必要はありません。

単一のオリジンが、複数の名前付き `Cache` オブジェクトを持つことができます。 (例えば {{domxref("ServiceWorker")}} の中などで) スクリプトがどのように `Cache` を更新するかを実装する必要があります。 `Cache` 内のアイテムは、明示的に要求しない限り更新されませんし、削除しない限り有効期限はありません。 {{domxref("CacheStorage.open", "CacheStorage.open()")}} を使用して特定の名前付き `Cache` オブジェクトを開き、それから任意の `Cache` のメソッドを呼び出して `Cache` を管理します。

また、定期的にキャッシュエントリを一掃する必要があります。各ブラウザーは、指定されたオリジンが使用できるキャッシュストレージの総量に厳しい制限を設けています。キャッシュ容量の概算の使用量は {{domxref("StorageEstimate")}} API を用いて確認することができます。ブラウザーはディスク容量の管理に最善を尽くしますが、あるオリジンのキャッシュストレージを削除することがあります。ブラウザーはふつう、あるオリジンのデータをすべて削除するか、まったく削除しないかのいずれかです。名前を用いてキャッシュをバージョン管理し、安全に操作できるスクリプトのバージョンからのみキャッシュを使用するようにしてください。詳細は、[古いキャッシュの削除](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches)を確認してください。

> **メモ:** キーの照合アルゴリズムは、値の中にある [VARY ヘッダー](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)に依存しています。そのため、新しいキーを照合するには、キャッシュ内のエントリのキーと値の両方を調べる必要があります。

> **メモ:** キャッシュ API は HTTP のキャッシュヘッダーを尊重しません。

## メソッド

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : `Cache` オブジェクトで最初に一致したリクエストに関連するレスポンスで解決する {{jsxref("Promise")}} を返します。
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : `Cache` オブジェクトで一致するすべてのリクエストの配列で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : URL を受け取り、それを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。機能的には `fetch()` を呼び出してから、 `put()` を使用してキャッシュに結果を追加するのと同等です。
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : URL の配列を受け取り、それらを取得して指定されたキャッシュに結果のレスポンスオブジェクトを追加します。
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : リクエストとそのレスポンスの両方を受け取り、指定されたキャッシュへ追加します。
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : キーがリクエストである `Cache` エントリを探し、見つかった場合は {{domxref("Cache")}} エントリを削除して、 `true` で解決する {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} エントリが見つからない場合、Promise は `false` で解決します。
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : `Cache` キーの配列で解決する {{jsxref("Promise")}} を返します。

## 例

このコードスニペットは、[service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) からのものです ([selective caching をライブで](https://googlechrome.github.io/samples/service-worker/selective-caching/)見る)。このコードでは {{domxref("CacheStorage.open()")}} を使用して、 `font/` で始まる `Content-Type` ヘッダー用の `Cache` オブジェクトを開きます。

そしてこのコードは、 {{domxref("Cache.match()")}} を使用してすでにキャッシュ内に一致するフォントがあるかどうかを確認し、もしあれば、それを返します。一致するフォントがなかった場合は、コードはネットワークからフォントを取得して、 {{domxref("Cache.put()")}} を用いて取得したリソースをキャッシュします。

このコードは {{domxref("Globalfetch.fetch","fetch()")}} の操作で発生する例外を処理します。なお、 HTTP のエラーレスポンス (404 など) はこの例外を発生させません。適切なエラーコードを持つ通常のレスポンスオブジェクトを返します。

このコードスニペットでは、サービスワーカーで使用されるバージョン付きキャッシュのベストプラクティスも示しています。この例ではキャッシュが 1 つしかありませんが、キャッシュが複数でも同じアプローチが利用できます。これはキャッシュの一括指定識別子を、具体的なバージョン付けされたキャッシュ名に対応させます。このコードはまた、 `CURRENT_CACHES` で名前が指定されていないキャッシュをすべて削除します。

このコード例において、 `caches` は {{domxref("ServiceWorkerGlobalScope")}} のプロパティです。これは `CacheStorage` オブジェクトを保持し、 {{domxref("CacheStorage")}} インターフェイスでアクセスすることができます。これは {{domxref("WindowOrWorkerGlobalScope")}} ミックスインを実装したものです。

> **メモ:** Chrome では、 `chrome://inspect/#service-workers` にアクセスして、登録されたサービスワーカーの下の "inspect" リンクをクリックすると、 [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) スクリプトが行う様々なアクションのログ状態を見ることができます。

```js
var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  // CURRENT_CACHES で指定されていないすべてのキャッシュを削除します。
  // この例ではキャッシュは1つしかありませんが、同じロジックが
  // 複数のバージョン化されたキャッシュがある場合を処理します。
  var expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // このキャッシュ名が「予期される」キャッシュ名のセットに存在しない場合は、削除します。
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.open(CURRENT_CACHES.font).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          // event.request のエントリがキャッシュにある場合、レスポンスが定義され、それを返すことができます。
          // この例では、フォントリソースのみがキャッシュされることに注意してください。
          console.log(' Found response in cache:', response);

          return response;
        }

        // それ以外の場合、event.request のエントリがキャッシュにない場合、
        // レスポンスは undefined となり、リソースを fetch() する必要があります。
        console.log(' No response for %s found in cache. About to fetch ' +
          'from network...', event.request.url);

        // 後で cache.put() の呼び出しで使用する可能性があるため、リクエストで .clone() を呼び出します。
        // fetch() とcache.put() の両方がリクエストを「消費」するため、コピーを作成する必要があります。
        // （https://fetch.spec.whatwg.org/#dom-request-clone を参照）
        return fetch(event.request.clone()).then(function(response) {
          console.log('  Response for %s from network is: %O',
            event.request.url, response);

          if (response.status < 400 &&
              response.headers.has('content-type') &&
              response.headers.get('content-type').match(/^font\//i)) {
            // これにより、エラーであることがわかっているレスポンス（つまり、HTTP ステータスコード 4xx または 5xx）のキャッシュが回避されます。
            // また、フォントに対応するレスポンスのみをキャッシュする必要があります。
            // つまり、"font/" で始まる Content-Type レスポンスヘッダーを持ちます。
            // 不透明なフィルタされたレスポンス（https://fetch.spec.whatwg.org/#concept-filtered-response-opaque）の場合、
            // レスポンスヘッダーにアクセスできないので、このチェックは常に失敗し、フォントはキャッシュされないことに注意してください。
            // すべての Google Web Fonts は CORS をサポートするドメインから提供されるため、ここでは問題になりません。
            // ただし、CORS をサポートしていないクロスオリジンドメインから他のリソースをキャッシュしようとしている場合は、注意が必要です。
            // レスポンスで .clone() を呼び出して、そのコピーをキャッシュに保存します。
            // そうすることで、制御されたページに戻る元のレスポンスオブジェクトを保持できます。
            // （https://fetch.spec.whatwg.org/#dom-response-clone を参照）
            console.log('  Caching the response to', event.request.url);
            cache.put(event.request, response.clone());
          } else {
            console.log('  Not caching the response to', event.request.url);
          }

          // 元のレスポンスオブジェクトを返します。これは、リソース要求を満たすために使用されます。
          return response;
        });
      }).catch(function(error) {
        // この catch() は、match() または fetch() 操作から発生する例外を処理します。
        // HTTP エラーレスポンス（404 など）は例外をトリガーしないことに注意してください。
        // 適切なエラーコードが設定された通常のレスポンスオブジェクトを返します。
        console.error('  Error in fetch handler:', error);

        throw error;
      });
    })
  );
});
```

### クッキーのキャッシュへの格納

[Fetch API](/ja/docs/Web/API/Fetch_API) では {{httpheader("Set-Cookie")}} ヘッダーを、 {{domxref("Response")}} オブジェクトを {{domxref("WindowOrWorkerGlobalScope", "fetch()")}} から返す前に削除する必要があります。したがって、キャッシュに含まれる `Response` はヘッダーを含みません。

## 仕様書

| 仕様書                                                               | 状態                                 | 備考     |
| -------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#cache', 'Cache')}} | {{Spec2('Service Workers')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Cache")}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
