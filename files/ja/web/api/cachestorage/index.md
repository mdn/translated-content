---
title: CacheStorage
slug: Web/API/CacheStorage
---

{{APIRef("Service Workers API")}}

**`CacheStorage`** インターフェイスは、{{domxref("Cache")}} オブジェクトのストレージを表します。

このインターフェイスは、

- {{domxref("ServiceWorker")}} や他のタイプのワーカーまたは {{domxref("window")}} のスコープからアクセスできるすべての名前付きキャッシュのマスターディレクトリを提供します（{{SpecName('Service Workers')}} の仕様で定義されていても、サービスワーカーでのみの使用に限定されません）。

  > **メモ:** [Chrome と Safari は、HTTPS を介したウィンドウコンテキストにのみ \`CacheStorage\` を公開します](https://bugs.chromium.org/p/chromium/issues/detail?id=1026063)（英語）。 SSL 証明書が設定されていない限り、{{domxref("window.caches")}} は `undefined` になります。

- 対応する {{domxref("Cache")}} オブジェクトへの文字列名のマッピングを維持します。

{{domxref("CacheStorage.open()")}} を使用して、{{domxref("Cache")}} インスタンスを取得します。

{{domxref("CacheStorage.match()")}} を使用して、所与の {{domxref("Request")}} が `CacheStorage` オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認します。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

> **メモ:** CacheStorage は、信頼されていないオリジン（つまり、この定義は将来より複雑になる可能性がありますが、HTTPS を使用しないオリジン）で `SecurityError` で常に拒否します。 テストするときは、 Firefox 開発ツールの設定/歯車印メニューの「HTTP による Service Worker を有効化（ツールボックスを開いた時）」オプションをチェックすることで、この問題を回避できます。

> **メモ:** {{domxref("CacheStorage.match()")}} は便利なメソッドです。 キャッシュエントリと一致する同等の機能を実装するには、{{domxref("CacheStorage.keys()")}} からキャッシュ名の配列を返し、{{domxref("CacheStorage.open()")}} で各キャッシュを開き、{{domxref("Cache.match()")}} で必要なものと一致させます。

## メソッド

- {{domxref("CacheStorage.match()")}}
  - : 所与の {{domxref("Request")}} が、{{domxref("CacheStorage")}} オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認し、その一致で解決する {{jsxref("Promise")}} を返します。
- {{domxref("CacheStorage.has()")}}
  - : `cacheName` に一致する {{domxref("Cache")}} オブジェクトが存在する場合、`true` に解決される {{jsxref("Promise")}} を返します。
- {{domxref("CacheStorage.open()")}}
  - : `cacheName` に一致する {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します（まだ存在しない場合は新しいキャッシュが作成されます）。
- {{domxref("CacheStorage.delete()")}}
  - : `cacheName` に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、`true` に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} オブジェクトが見つからない場合、`false` に解決されます。
- {{domxref("CacheStorage.keys()")}}
  - : {{domxref("CacheStorage")}} によって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列を含む配列で解決される {{jsxref("Promise")}} を返します。 このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。

## 例

このコードスニペットは、MDN の [sw-test の例](https://github.com/mdn/sw-test/)からのものです（[sw-test をライブで](https://mdn.github.io/sw-test/)見る）。 このサービスワーカーのスクリプトは、{{domxref("InstallEvent")}} が発生するのを待ち、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行してアプリのインストールプロセスを処理します。 これは、{{domxref("CacheStorage.open")}} を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll")}} を使用して一連のアセットを追加することで構成されます。

2 番目のコードブロックでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. `CacheStorage` でリクエストに一致するものが見つかったかどうかを確認します。 もしそうなら、それを提供します。
2. そうでない場合は、ネットワークからリクエストを取得し、最初のブロックで作成されたキャッシュも開き、{{domxref("Cache.put")}}（`cache.put(event.request, response.clone())`）を使用してリクエストのクローンを追加します。
3. これが失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。

最後に、{{domxref("FetchEvent.respondWith")}} を使用して、カスタムレスポンスが等しくなったものをすべて返します。

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() は常に解決します
    // ただし、成功の場合はレスポンスに値があります
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // レスポンスは1回のみ使用できます
        // クローンを保存して、1番目のコピーをキャッシュに入れ、
        // 2番目のコピーを提供する必要があります
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
```

このスニペットは、サービスワーカーのコンテキストの外部で API を使用する方法を示しており、\`await\` 演算子を使用してより読みやすいコードにしています。

```js
// キャッシュからデータを取得しようとしますが、フォールバックしてライブで取得します。
async function getData() {
   const cacheVersion = 1;
   const cacheName    = `myapp-${ cacheVersion }`;
   const url          = 'https://jsonplaceholder.typicode.com/todos/1';
   let cachedData     = await getCachedData( cacheName, url );

   if ( cachedData ) {
      console.log( '取得したキャッシュデータ' );
      return cachedData;
   }

   console.log( '最新データの取得' );

   const cacheStorage = await caches.open( cacheName );
   await cacheStorage.add( url );
   cachedData = await getCachedData( cacheName, url );
   await deleteOldCaches( cacheName );

   return cachedData;
}

// キャッシュからデータを取得します。
async function getCachedData( cacheName, url ) {
   const cacheStorage   = await caches.open( cacheName );
   const cachedResponse = await cacheStorage.match( url );

   if ( ! cachedResponse || ! cachedResponse.ok ) {
      return false;
   }

   return await cachedResponse.json();
}

// 古いキャッシュを削除して、ユーザーのディスク容量を尊重します。
async function deleteOldCaches( currentCache ) {
   const keys = await caches.keys();

   for ( const key of keys ) {
      const isOurCache = 'myapp-' === key.substr( 0, 6 );

      if ( currentCache === key || ! isOurCache ) {
         continue;
      }

      caches.delete( key );
   }
}

try {
   const data = await getData();
   console.log( { data } );
} catch ( error ) {
   console.error( { error } );
}
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#cachestorage', 'CacheStorage')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
