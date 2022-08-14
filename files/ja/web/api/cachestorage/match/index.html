---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
tags:
  - API
  - CacheStorage
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - match
translation_of: Web/API/CacheStorage/match
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("CacheStorage")}} インターフェイスの <strong><code>match()</code></strong> メソッドは、所与の {{domxref("Request")}} または URL 文字列が保存された {{domxref("Response")}} のキーであるかどうかをチェックします。 このメソッドは、{{domxref("Response")}} の {{jsxref("Promise")}}、または一致が見つからない場合に <code>undefined</code> に解決される {{jsxref("Promise")}} を返します。</span></p>

<p>グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して <code>CacheStorage</code> にアクセスできます。</p>

<p><code>Cache</code> オブジェクトは作成順に検索されます。</p>

<div class="note"><strong>注</strong>: {{domxref("CacheStorage.match()", "caches.match()")}} は便利なメソッドです。 同等の機能は、{{domxref("Response")}} が返されるまで、（{{domxref("CacheStorage.keys()", "caches.keys()")}} によって返される順序で）各キャッシュで {{domxref("cache.match()")}} を呼び出すことです。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">caches.match(<em>request</em>, <em>options</em>).then(function(<em>response</em>) {
  // response で何かをする
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>request</dt>
 <dd>一致させたい {{domxref("Request")}}。 これは、{{domxref("Request")}} オブジェクトまたは URL 文字列にすることができます。</dd>
 <dt>options {{optional_inline}}</dt>
 <dd><code>match</code> 操作での照合方法を制御するプロパティを持つオブジェクト。 利用可能なオプションは次のとおりです。
 <ul>
  <li><code>ignoreSearch</code>: 照合方法が URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 例えば、<code>true</code> に設定すると、<code>http://foo.com/?value=bar</code> の <code>?value=bar</code> 部分は、照合するときに無視されます。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreMethod</code>: <code>true</code> に設定すると、照合方法が {{domxref("Request")}}  <code>http</code> メソッドを検証できないようにする {{jsxref("Boolean")}}（通常は <code>GET</code> と <code>HEAD</code> のみが許可されます）。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreVary</code>: <code>true</code> に設定された場合、<code>VARY</code> ヘッダーの照合をしないように照合方法に指示する {{jsxref("Boolean")}}。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに <code>VARY</code> ヘッダーがあるかどうかに関係なく一致します。 デフォルトは <code>false</code> です。</li>
  <li><code>cacheName</code>: 検索する特定のキャッシュを表す {{domxref("DOMString")}}。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>一致する {{domxref("Response")}} に解決される {{jsxref("Promise")}}。 指定されたリクエストに対する一致するレスポンスが見つからない場合、<code>Promise</code> は <code>undefined</code> に解決されます。<br>
  </p>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は MDN の <a href="https://github.com/mdn/sw-test/">sw-test の例</a>からのものです（<a href="https://mdn.github.io/sw-test/">sw-test をライブで</a>見る）。 ここでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。</p>

<ol>
 <li>{{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、{{domxref("CacheStorage")}} でリクエストの一致が見つかったかどうかを確認します。 もしそうなら、それを提供します。</li>
 <li>そうでない場合は、<code>open()</code> を使用して <code>v1</code> キャッシュを開き、{{domxref("Cache.put","Cache.put()")}} を使用してデフォルトのネットワークリクエストをキャッシュに入れ、<code>return response.clone()</code> を使用してデフォルトのネットワークリクエストのクローンを返します。 <code>put()</code> がレスポンスのボディを消費するため、最後が必要です。</li>
 <li>これが失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。</li>
</ol>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
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

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cachestorage-match', 'CacheStorage: match')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CacheStorage.match")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
