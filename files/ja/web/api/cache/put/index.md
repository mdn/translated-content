---
title: Cache.put()
slug: Web/API/Cache/put
tags:
  - API
  - Cache
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - put
translation_of: Web/API/Cache/put
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("Cache")}} インターフェイスの <strong><code>put()</code></strong> メソッドを使用すると、キーと値のペアを現在の {{domxref("Cache")}} オブジェクトに追加できます。</span></p>

<p>多くの場合、1つ以上のリクエストを {{domxref("WindowOrWorkerGlobalScope.fetch","fetch()")}} して、その結果を直接キャッシュに追加したいだけです。 そのような場合、{{domxref("Cache.add","Cache.add()")}} や {{domxref("Cache.addAll","Cache.addAll()")}} を使用する方がよいでしょう。 これらは、1つ以上のそれらの操作の一括指定関数であるためです。</p>

<pre class="brush: js">fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('Bad response status');
  }
  return cache.put(url, response);
})

</pre>

<div class="note">
<p><strong>注</strong>: <code>put()</code> は、リクエストに一致する、以前にキャッシュに保存されたキーと値のペアを上書きします。</p>
</div>

<div class="note">
<p><strong>注</strong>: {{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は、200 の範囲にない <code>Response.status</code> 値を持つレスポンスをキャッシュしませんが、{{domxref("Cache.put")}} では、リクエストとレスポンスのペアを格納できます。 その結果、{{domxref("Cache.put")}} では可能ですが、{{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は不透明なレスポンスを格納するために使用できません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cache</em>.put(<em>request</em>, <em>response</em>).then(function() {
  // リクエストとレスポンスのペアがキャッシュに追加されました
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>request</dt>
 <dd>キャッシュに追加する {{domxref("Request")}} オブジェクトまたは URL。</dd>
 <dt>response</dt>
 <dd>リクエストと合う {{domxref("Response")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code> で解決する {{jsxref("Promise")}}。</p>

<div class="note">
<p>注: URL スキームが <code>http</code> または <code>https</code> でない場合、Promise は <code>TypeError</code> で拒否します。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は、MDN の <a href="https://github.com/mdn/sw-test/">sw-test の例</a>からのものです（<a href="https://mdn.github.io/sw-test/">sw-test をライブで</a>見る）。 ここでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。</p>

<ol>
 <li>{{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、リクエストの一致が {{domxref("CacheStorage")}} にあるかどうかを確認します。 もしそうなら、それを提供します。</li>
 <li>そうでない場合は、<code>open()</code> を使用して <code>v1</code> キャッシュを開き、{{domxref("Cache.put","Cache.put()")}} を使用してデフォルトのネットワークリクエストをキャッシュに入れ、 <code>return response.clone()</code> を使用してデフォルトのネットワークリクエストのクローンを返します。 <code>put()</code> がレスポンスのボディを消費するため、クローンが必要です。</li>
 <li>これが失敗した場合（ネットワークがダウンしているなど）、フォールバックレスポンスを返します。</li>
</ol>

<pre class="brush: js">var response;
var cachedResponse = caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });
  return response.clone();
}).catch(function() {
  return caches.match('/sw-test/gallery/myLittleVader.jpg');
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
   <td>{{SpecName('Service Workers', '#dom-cache-put', 'Cache: put')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.Cache.put")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
