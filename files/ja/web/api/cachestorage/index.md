---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Service Workers API")}}

**`CacheStorage`** インターフェイスは、{{domxref("Cache")}} オブジェクトのストレージを表します。

このインターフェイスは、

- {{domxref("ServiceWorker")}} や他の種類のワーカーまたは {{domxref("window")}} のスコープからアクセスできる、すべての名前付きキャッシュのマスターディレクトリーを提供します（サービスワーカーでの使用には限定されません）。
- 対応する {{domxref("Cache")}} オブジェクトへの文字列名のマッピングを維持します。

{{domxref("CacheStorage.open()")}} を使用して、{{domxref("Cache")}} インスタンスを取得します。

{{domxref("CacheStorage.match()")}} を使用して、所与の {{domxref("Request")}} が `CacheStorage` オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認します。

グローバルな {{domxref("caches")}} プロパティを介して `CacheStorage` にアクセスできます。

> **メモ:** `CacheStorage` は、信頼されていないオリジン（つまり、 HTTPS を使用しないオリジンですが、この定義は将来より複雑になる可能性があります）では常に拒否し、 `SecurityError` となります。 Firefox でテストする場合は、 Firefox 開発者ツールのオプション/ギアメニューの **HTTP による Service Worker を有効化 (ツールボックスを開いたとき)** オプションをチェックすることで回避することが可能です。さらに、 `CacheStorage` はファイルシステムへのアクセスを必要とするため、Firefoxのプライベートモードでは利用できない場合があります。

> **メモ:** {{domxref("CacheStorage.match()")}} は便利なメソッドです。 キャッシュエントリと一致する同等の機能を実装するには、{{domxref("CacheStorage.keys()")}} からキャッシュ名の配列を返し、{{domxref("CacheStorage.open()")}} で各キャッシュを開き、{{domxref("Cache.match()")}} で必要なものと一致させます。

{{AvailableInWorkers}}

{{securecontext_header}}

## インスタンスメソッド

- {{domxref("CacheStorage.match()")}}
  - : 所与の {{domxref("Request")}} が、{{domxref("CacheStorage")}} オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認し、その一致で解決する {{jsxref("Promise")}} を返します。
- {{domxref("CacheStorage.has()")}}
  - : {{jsxref("Promise")}} を返します。これは、 `cacheName` に一致する {{domxref("Cache")}} オブジェクトが存在する場合、`true` に解決されます。
- {{domxref("CacheStorage.open()")}}
  - : {{jsxref("Promise")}} を返します。これは、 `cacheName` に一致する {{domxref("Cache")}} オブジェクトに解決されます（まだ存在しない場合は新しいキャッシュが作成されます）。
- {{domxref("CacheStorage.delete()")}}
  - : `cacheName` に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、 `true` に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} オブジェクトが見つからない場合、`false` に解決されます。
- {{domxref("CacheStorage.keys()")}}
  - : {{jsxref("Promise")}} を返します。これは、 {{domxref("CacheStorage")}} によって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列を含む配列で解決されます。このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。

## 例

このコードスニペットは、MDN の[単純なサービスワーカーの例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)からのものです（[単純なサービスワーカーがライブで実行する](https://bncb2v.csb.app/)のを見る）。 このサービスワーカーのスクリプトは、 {{domxref("InstallEvent")}} が発生するのを待ち、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行してアプリのインストールプロセスを処理します。 これは、{{domxref("CacheStorage.open")}} を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll")}} を使用して一連のアセットを追加することで構成されます。

2 番目のコードブロックでは、 {{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. `CacheStorage` でリクエストに一致するものが見つかったかどうかを確認します。 もしそうなら、それを提供します。
2. そうでない場合は、ネットワークからリクエストを取得し、最初のブロックで作成されたキャッシュも開き、{{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`) を使用してリクエストのクローンを追加します。
3. これが失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。

最後に、{{domxref("FetchEvent.respondWith")}} を使用して、カスタムレスポンスが等しくなったものをすべて返します。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() は常に解決します
      // ただし、成功の場合はレスポンスに値があります
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // レスポンスは1回のみ使用できます
            // クローンを保存して、1番目のコピーをキャッシュに入れ、
            // 2番目のコピーを提供する必要があります
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
  );
});
```

このスニペットは、サービスワーカーのコンテキストの外部で API を使用する方法を示しており、`await` 演算子を使用してより読みやすいコードにしています。

```js
// キャッシュからデータを取得しようとしますが、フォールバックしてライブで取得します。
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("取得したキャッシュデータ");
    return cachedData;
  }

  console.log("最新データの取得");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// キャッシュからデータを取得します。
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// 古いキャッシュを削除して、ユーザーのディスク容量を尊重します。
async function deleteOldCaches(currentCache) {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (currentCache === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
}

try {
  const data = await getData();
  console.log({ data });
} catch (error) {
  console.error({ error });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
- [プライベートブラウジング \/ シークレットモード](/ja/docs/Web/API/Web_Storage_API#プライベートブラウジング_シークレットモード)
