---
title: FetchEvent
slug: Web/API/FetchEvent
tags:
  - API
  - FetchEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Workers
translation_of: Web/API/FetchEvent
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">これは、{{domxref("ServiceWorkerGlobalScope", "サービスワーカーのグローバルスコープ", "", 1)}}にディスパッチされる <code>fetch</code> イベント用のイベント型です。 これには、リクエストや、受け手がどうレスポンスを扱うのかといった、フェッチに関する情報が含まれています。 これは、このフェッチへのレスポンスを提供できるようにする {{domxref("FetchEvent.respondWith", "event.respondWith()")}} メソッドを提供します。</span></p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}</dt>
 <dd>新しい <code>FetchEvent</code> オブジェクトを作成します。 このコンストラクターは通常は使用しません。 ブラウザーはこのオブジェクト自体を作成して <code>fetch</code> イベントのコールバックのために提供します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>先祖の {{domxref("Event")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("FetchEvent.clientId")}} {{readonlyInline}}</dt>
 <dd>フェッチを開始した同一オリジンの {{domxref("Client")}} の {{domxref("Client.id", "id")}}。</dd>
 <dt>{{domxref("FetchEvent.preloadResponse")}} {{readonlyinline}}</dt>
 <dd>{{domxref("Response")}} への {{jsxref("Promise")}}、またはこのフェッチがナビゲーションでない場合や、<a href="/ja/docs/Web/API/NavigationPreloadManager">ナビゲーションのプリロード</a>が有効になっていない場合は <code>undefined</code>。</dd>
 <dt>{{domxref("FetchEvent.replacesClientId")}} {{readonlyInline}}</dt>
 <dd>ページのナビゲーション中に置き換えられる {{domxref("Client")}} の {{domxref("Client.id", "id")}}。</dd>
 <dt>{{domxref("FetchEvent.resultingClientId")}} {{readonlyInline}}</dt>
 <dd>ページのナビゲーション中に前のクライアントを置き換える {{domxref("Client")}} の {{domxref("Client.id", "id")}}。</dd>
 <dt>{{domxref("FetchEvent.request")}} {{readonlyInline}}</dt>
 <dd>ブラウザーが行うつもりの {{domxref("Request")}}。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親である {{domxref("ExtendableEvent")}} からメソッドを継承します。</em></p>

<dl>
 <dt>{{domxref("FetchEvent.respondWith()")}}</dt>
 <dd>ブラウザー既定のフェッチ処理を抑止し、自身のレスポンス (の promise を) 提供します。</dd>
 <dt>{{domxref("ExtendableEvent.waitUntil()")}}</dt>
 <dd>
 <p>イベントの存続期間を延長します。 ストリーミングやキャッシングなど、レスポンスの返却を超えて延長するタスクをブラウザーに通知するために使用します。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>この fetch イベントは、非 GET リクエストに対してブラウザー既定のものを使用します。 GET リクエストに対してはキャッシュからマッチするものを返そうとし、ネットワークにフォールバックします。 キャッシュにマッチするものが見つかった場合、次回ためにキャッシュを非同期に更新します。</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', event =&gt; {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method != 'GET') return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      // If we found a match in the cache, return it, but also
      // update the entry in the cache in the background.
      event.waitUntil(cache.add(event.request));
      return cachedResponse;
    }

    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-fetchevent-fetchevent', 'FetchEvent()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.FetchEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
