---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
tags:
  - API
  - Cache
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - matchAll
translation_of: Web/API/Cache/matchAll
---
<p>{{APIRef("Service Workers API")}}</p>

<p>{{domxref("Cache")}} インターフェイスの <strong><code>matchAll()</code></strong> メソッドは、{{domxref("Cache")}} オブジェクト内の一致するすべてのレスポンスの配列に解決される {{jsxref("Promise")}} を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cache</em>.matchAll(<em>request</em>, {<em>options</em>}).then(function(<em>response</em>) {
  // レスポンスの配列で何かをする
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>request {{optional_inline}}</dt>
 <dd>{{domxref("Cache")}} 内でレスポンスを見つけようとしている {{domxref("Request")}}。 これは、<code>Request</code> オブジェクトまたは URL です。 この引数を省略すると、このキャッシュ内のすべてのレスポンスのコピーが取得されます。</dd>
 <dt>options {{optional_inline}}</dt>
 <dd>実行する照合の特定の制御オプションを設定できるオプションオブジェクト。 使用可能なオプションは次のとおりです。
 <ul>
  <li><code>ignoreSearch</code>: 照合操作で URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 <code>true</code> に設定すると、<code>http://foo.com/?value=bar</code> の <code>?value=bar</code> 部分を、照合の実行時に無視します。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreMethod</code>: <code>true</code> に設定すると、照合操作が {{domxref("Request")}} <code>HTTP</code> メソッドを検証しないようにする {{jsxref("Boolean")}}（通常、<code>GET</code> および <code>HEAD</code> のみが許可されます）。 デフォルトは <code>false</code> です。</li>
  <li><code>ignoreVary</code>: <code>true</code> に設定すると、<code>VARY</code> ヘッダーの照合を実行しないように照合操作に指示する {{jsxref("Boolean")}}。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに <code>VARY</code> ヘッダーがあるかどうかに関係なく一致します。 デフォルトは <code>false</code> です。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("Cache")}} オブジェクト内のすべての一致するレスポンスの配列に解決される {{jsxref("Promise")}}。</p>

<div class="note">
<p><strong>注</strong>: {{domxref("Cache.match()")}} は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致するレスポンスのみ（つまり、<code><em>response</em>[0]</code>）で解決することを除いて、基本的に <code>Cache.matchAll()</code> と同じです。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">caches.open('v1').then(function(cache) {
  cache.matchAll('/images/').then(function(response) {
    response.forEach(function(element, index, array) {
      cache.delete(element);
    });
  });
})</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cache-matchall', 'Cache: matchAll')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Cache.matchAll")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
