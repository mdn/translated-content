---
title: Cache
slug: Web/API/Cache
tags:
  - API
  - Cache
  - Experimental
  - Fraft
  - Interface
  - Offline
  - Reference
  - Service Worker
  - ServiceWorker
  - Storage
  - インターフェイス
  - オフライン
  - サービスワーカー
translation_of: Web/API/Cache
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary"><strong><code>Cache</code></strong> インターフェイスは、<code><a href="http://fetch.spec.whatwg.org/#request">Request</a></code> / <code><a href="http://fetch.spec.whatwg.org/#response">Response</a></code> オブジェクトのペアのためのストレージの仕組みを提供します。例えば、 {{domxref("ServiceWorker")}} のライフサイクルの一部としてこれらをキャッシュします。なお、 <code>Cache</code> インターフェイスは、ワーカーだけでなくウィンドウスコープにも公開されています。サービスワーカーの仕様書で定義されているものですが、必ずしもサービスワーカーとの組み合わせで使用する必要はありません。</span></p>

<p>単一のオリジンが、複数の名前付き <code>Cache</code> オブジェクトを持つことができます。 (例えば {{domxref("ServiceWorker")}} の中などで) スクリプトがどのように <code>Cache</code> を更新するかを実装する必要があります。 <code>Cache</code> 内のアイテムは、明示的に要求しない限り更新されませんし、削除しない限り有効期限はありません。 {{domxref("CacheStorage.open", "CacheStorage.open()")}} を使用して特定の名前付き <code>Cache</code> オブジェクトを開き、それから任意の <code>Cache</code> のメソッドを呼び出して <code>Cache</code> を管理します。</p>

<p>また、定期的にキャッシュエントリを一掃する必要があります。各ブラウザーは、指定されたオリジンが使用できるキャッシュストレージの総量に厳しい制限を設けています。キャッシュ容量の概算の使用量は {{domxref("StorageEstimate")}} API を用いて確認することができます。ブラウザーはディスク容量の管理に最善を尽くしますが、あるオリジンのキャッシュストレージを削除することがあります。ブラウザーはふつう、あるオリジンのデータをすべて削除するか、まったく削除しないかのいずれかです。名前を用いてキャッシュをバージョン管理し、安全に操作できるスクリプトのバージョンからのみキャッシュを使用するようにしてください。詳細は、<a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches">古いキャッシュの削除</a>を確認してください。</p>

<div class="note">
<p><strong>メモ</strong>: キーの照合アルゴリズムは、値の中にある <a href="https://www.fastly.com/blog/best-practices-for-using-the-vary-header">VARY ヘッダー</a>に依存しています。そのため、新しいキーを照合するには、キャッシュ内のエントリのキーと値の両方を調べる必要があります。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: キャッシュ API は HTTP のキャッシュヘッダーを尊重しません。</p>
</div>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("Cache.match", "Cache.match(request, options)")}}</dt>
 <dd><code>Cache</code> オブジェクトで最初に一致したリクエストに関連するレスポンスで解決する {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}</dt>
 <dd><code>Cache</code> オブジェクトで一致するすべてのリクエストの配列で解決する {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("Cache.add", "Cache.add(request)")}}</dt>
 <dd>URL を受け取り、それを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。機能的には <code>fetch()</code> を呼び出してから、 <code>put()</code> を使用してキャッシュに結果を追加するのと同等です。</dd>
 <dt>{{domxref("Cache.addAll", "Cache.addAll(requests)")}}</dt>
 <dd>URL の配列を受け取り、それらを取得して指定されたキャッシュに結果のレスポンスオブジェクトを追加します。</dd>
 <dt>{{domxref("Cache.put", "Cache.put(request, response)")}}</dt>
 <dd>リクエストとそのレスポンスの両方を受け取り、指定されたキャッシュへ追加します。</dd>
 <dt>{{domxref("Cache.delete", "Cache.delete(request, options)")}}</dt>
 <dd>キーがリクエストである <code>Cache</code> エントリを探し、見つかった場合は {{domxref("Cache")}} エントリを削除して、 <code>true</code> で解決する {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} エントリが見つからない場合、Promise は <code>false</code> で解決します。</dd>
 <dt>{{domxref("Cache.keys", "Cache.keys(request, options)")}}</dt>
 <dd><code>Cache</code> キーの配列で解決する {{jsxref("Promise")}} を返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js">service worker selective caching sample</a> からのものです (<a href="https://googlechrome.github.io/samples/service-worker/selective-caching/">selective caching をライブで</a>見る)。このコードでは {{domxref("CacheStorage.open()")}} を使用して、 <code>font/</code> で始まる <code>Content-Type</code> ヘッダー用の <code>Cache</code> オブジェクトを開きます。</p>

<p>そしてこのコードは、 {{domxref("Cache.match()")}} を使用してすでにキャッシュ内に一致するフォントがあるかどうかを確認し、もしあれば、それを返します。一致するフォントがなかった場合は、コードはネットワークからフォントを取得して、 {{domxref("Cache.put()")}} を用いて取得したリソースをキャッシュします。</p>

<p>このコードは {{domxref("Globalfetch.fetch","fetch()")}} の操作で発生する例外を処理します。なお、 HTTP のエラーレスポンス (404 など) はこの例外を発生させません。適切なエラーコードを持つ通常のレスポンスオブジェクトを返します。</p>

<p>このコードスニペットでは、サービスワーカーで使用されるバージョン付きキャッシュのベストプラクティスも示しています。この例ではキャッシュが1つしかありませんが、キャッシュが複数でも同じアプローチが利用できます。これはキャッシュの一括指定識別子を、具体的なバージョン付けされたキャッシュ名に対応させます。このコードはまた、 <code>CURRENT_CACHES</code> で名前が指定されていないキャッシュをすべて削除します。</p>

<p>このコード例において、 <code>caches</code> は {{domxref("ServiceWorkerGlobalScope")}} のプロパティです。これは <code>CacheStorage</code> オブジェクトを保持し、 {{domxref("CacheStorage")}} インターフェイスでアクセスすることができます。これは {{domxref("WindowOrWorkerGlobalScope")}} ミックスインを実装したものです。</p>

<div class="note"><strong>メモ</strong>: Chrome では、 <code>chrome://inspect/#service-workers</code> にアクセスして、登録されたサービスワーカーの下の "inspect" リンクをクリックすると、 <code><a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js">service-worker.js</a></code> スクリプトが行う様々なアクションのログ状態を見ることができます。</div>

<pre class="brush: js">var CACHE_VERSION = 1;
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

          if (response.status &lt; 400 &amp;&amp;
              response.headers.has('content-type') &amp;&amp;
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
});</pre>

<h3 id="Storing_cookies_in_Caches" name="Storing_cookies_in_Caches">クッキーのキャッシュへの格納</h3>

<p><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> では {{httpheader("Set-Cookie")}} ヘッダーを、 {{domxref("Response")}} オブジェクトを {{domxref("WindowOrWorkerGlobalScope", "fetch()")}} から返す前に削除する必要があります。したがって、キャッシュに含まれる <code>Response</code> はヘッダーを含みません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Service Workers', '#cache', 'Cache')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.Cache")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">サービスワーカーの使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">ウェブワーカーの使用</a></li>
</ul>
