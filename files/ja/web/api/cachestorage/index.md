---
title: CacheStorage
slug: Web/API/CacheStorage
tags:
  - API
  - CacheStorage
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/CacheStorage
---
<p>{{APIRef("Service Workers API")}}</p>

<p><strong><code>CacheStorage</code></strong> インターフェイスは、{{domxref("Cache")}} オブジェクトのストレージを表します。</p>

<p>このインターフェイスは、</p>

<ul>
 <li>{{domxref("ServiceWorker")}} や他のタイプのワーカーまたは {{domxref("window")}} のスコープからアクセスできるすべての名前付きキャッシュのマスターディレクトリを提供します（{{SpecName('Service Workers')}} の仕様で定義されていても、サービスワーカーでのみの使用に限定されません）。
  <div class="note"><strong>注</strong>: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1026063">Chrome と Safari は、HTTPS を介したウィンドウコンテキストにのみ `CacheStorage` を公開します</a>（英語）。 SSL 証明書が設定されていない限り、{{domxref("window.caches")}} は <code>undefined</code> になります。</div>
 </li>
 <li>対応する {{domxref("Cache")}} オブジェクトへの文字列名のマッピングを維持します。</li>
</ul>

<p>{{domxref("CacheStorage.open()")}} を使用して、{{domxref("Cache")}} インスタンスを取得します。</p>

<p>{{domxref("CacheStorage.match()")}} を使用して、所与の {{domxref("Request")}} が <code>CacheStorage</code> オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認します。</p>

<p>グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して <code>CacheStorage</code> にアクセスできます。</p>

<div class="note"><strong>注</strong>: CacheStorage は、信頼されていないオリジン（つまり、この定義は将来より複雑になる可能性がありますが、HTTPS を使用しないオリジン）で <code>SecurityError</code> で常に拒否します。 テストするときは、 Firefox 開発ツールの設定/歯車印メニューの「HTTP による Service Worker を有効化（ツールボックスを開いた時）」オプションをチェックすることで、この問題を回避できます。</div>

<div class="note"><strong>注</strong>: {{domxref("CacheStorage.match()")}} は便利なメソッドです。 キャッシュエントリと一致する同等の機能を実装するには、{{domxref("CacheStorage.keys()")}} からキャッシュ名の配列を返し、{{domxref("CacheStorage.open()")}} で各キャッシュを開き、{{domxref("Cache.match()")}} で必要なものと一致させます。</div>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("CacheStorage.match()")}}</dt>
 <dd>所与の {{domxref("Request")}} が、{{domxref("CacheStorage")}} オブジェクトが追跡する {{domxref("Cache")}} オブジェクトのキーであるかどうかを確認し、その一致で解決する {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("CacheStorage.has()")}}</dt>
 <dd><code>cacheName</code> に一致する {{domxref("Cache")}} オブジェクトが存在する場合、<code>true</code> に解決される {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("CacheStorage.open()")}}</dt>
 <dd><code>cacheName</code> に一致する {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します（まだ存在しない場合は新しいキャッシュが作成されます）。</dd>
 <dt>{{domxref("CacheStorage.delete()")}}</dt>
 <dd><code>cacheName</code> に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、<code>true</code> に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} オブジェクトが見つからない場合、<code>false</code> に解決されます。</dd>
 <dt>{{domxref("CacheStorage.keys()")}}</dt>
 <dd>{{domxref("CacheStorage")}} によって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列を含む配列で解決される {{jsxref("Promise")}} を返します。 このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットは、MDN の <a href="https://github.com/mdn/sw-test/">sw-test の例</a>からのものです（<a href="https://mdn.github.io/sw-test/">sw-test をライブで</a>見る）。 このサービスワーカーのスクリプトは、{{domxref("InstallEvent")}} が発生するのを待ち、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行してアプリのインストールプロセスを処理します。 これは、{{domxref("CacheStorage.open")}} を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll")}} を使用して一連のアセットを追加することで構成されます。</p>

<p>2番目のコードブロックでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。</p>

<ol>
 <li><code>CacheStorage</code> でリクエストに一致するものが見つかったかどうかを確認します。 もしそうなら、それを提供します。</li>
 <li>そうでない場合は、ネットワークからリクエストを取得し、最初のブロックで作成されたキャッシュも開き、{{domxref("Cache.put")}}（<code>cache.put(event.request, response.clone())</code>）を使用してリクエストのクローンを追加します。</li>
 <li>これが失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。</li>
</ol>

<p>最後に、{{domxref("FetchEvent.respondWith")}} を使用して、カスタムレスポンスが等しくなったものをすべて返します。</p>

<pre class="brush: js">self.addEventListener('install', function(event) {
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
</pre>

<p>このスニペットは、サービスワーカーのコンテキストの外部で API を使用する方法を示しており、`await` 演算子を使用してより読みやすいコードにしています。</p>

<pre class="brush: js">// キャッシュからデータを取得しようとしますが、フォールバックしてライブで取得します。
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
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#cachestorage', 'CacheStorage')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CacheStorage")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
