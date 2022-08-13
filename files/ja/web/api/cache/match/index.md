---
title: Cache.match()
slug: Web/API/Cache/match
tags:
  - API
  - Cache
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - match
translation_of: Web/API/Cache/match
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("Cache")}} インターフェイスの <strong><code>match()</code></strong> メソッドは、{{domxref("Cache")}} オブジェクトで最初に一致したリクエストに関連付けられた {{domxref("Response")}} に解決される {{jsxref("Promise")}} を返します。 一致が見つからない場合、{{jsxref("Promise")}} は {{jsxref("undefined")}} に解決されます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cache</em>.match(<em>request</em>, {<em>options</em>}).then(function(<em>response</em>) {
  // レスポンスで何かをします
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>request</dt>
 <dd>{{domxref("Cache")}} 内でレスポンスを見つけようとしている {{domxref("Request")}}。 これは、{{domxref("Request")}} オブジェクトまたは URL です。</dd>
 <dt>options {{optional_inline}}</dt>
 <dd><code>match</code> 操作のオプションを設定するオブジェクト。 使用可能なオプションは次のとおりです。
 <ul>
  <li><code>ignoreSearch</code>: URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 例えば、<code>true</code> に設定すると、<code>http://foo.com/?value=bar</code> の <code>?value=bar</code> の部分は、照合の実行時に無視されます。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreMethod</code>: <code>true</code> に設定すると、照合操作が {{domxref("Request")}} <code>HTTP</code> メソッドを検証しないようにする {{jsxref("Boolean")}}（通常、<code>GET</code> および <code>HEAD</code> のみが許可されます）。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreVary</code>: <code>true</code> に設定すると、<code>VARY</code> ヘッダーの照合を実行しないように照合操作に指示する {{jsxref("Boolean")}}。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに <code>VARY</code> ヘッダーがあるかどうかに関係なく一致します。 デフォルトは <code>false</code> です。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>リクエストに一致する最初の {{domxref("Response")}} に解決する、または一致が見つからない場合は {{jsxref("undefined")}} に解決する {{jsxref("Promise")}}。</p>

<div class="note">
<p><code>注</code>: <code>Cache.match()</code> は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致するレスポンスのみ（つまり、<code><em>response</em>[0]</code>）で解決することを除いて、基本的に {{domxref("Cache.matchAll()")}} と同じです。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js">カスタムオフラインページ</a>の例（<a href="https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html">ライブデモ</a>）からの引用です。 リクエストが失敗した場合、キャッシュを使用して選択したデータを提供します。 <code>catch()</code> 句は、<code>fetch()</code> の呼び出しが例外をスローしたときにトリガーされます。 <code>catch()</code> 句の内部では、 <code>match()</code> を使用して正しいレスポンスを返します。</p>

<p>この例では、GET HTTP 動詞で取得された HTML 文書のみがキャッシュされます。 <code>if()</code> 条件が false の場合、このフェッチハンドラーはリクエストをインターセプトしません。 他のフェッチハンドラーが登録されている場合、それらは <code>event.respondWith()</code> を呼び出す機会を得ます。 フェッチハンドラーが <code>event.respondWith()</code> を呼び出さない場合、リクエストはブラウザーによって処理され、サービスワーカーが関与していないかのように処理されます。 <code>fetch()</code> が 4xx または 5xx の範囲のレスポンスコードで有効な HTTP レスポンスを返す場合、<code>catch()</code> は呼び出されません。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  // これが HTML 文書に対する GET リクエストである場合のみ、event.respondWith() を呼び出します。
  if (event.request.method === 'GET' &amp;&amp;
      event.request.headers.get('accept').indexOf('text/html') !== -1) {
    console.log('フェッチイベントの処理: ', event.request.url);
    event.respondWith(
      fetch(event.request).catch(function(e) {
        console.error('フェッチ失敗、代わりにオフラインページに戻ります。', e);
        return caches.open(OFFLINE_CACHE).then(function(cache) {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  }
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
   <td>{{SpecName('Service Workers', '#dom-cache-match', 'Cache match')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Cache.match")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
