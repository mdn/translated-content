---
title: Request.cache
slug: Web/API/Request/cache
tags:
  - API
  - Cache
  - Experimental
  - Fetch
  - Property
  - Reference
  - requesut
translation_of: Web/API/Request/cache
---
<div>{{APIRef("Fetch")}}</div>

<p>{{domxref("Request")}} インターフェースの <strong><code>cache</code></strong> 読み取り専用プロパティには、リクエストのキャッシュモードが含まれています。リクエストがブラウザの <a href="/ja/docs/Web/HTTP/Caching">HTTP キャッシュ</a> とどのように相互作用するかを制御します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js notranslate">var currentCacheMode = request.cache;</pre>

<h3 id="値">値</h3>

<p><code>RequestCache</code> 使用可能な値は次のとおりです。</p>

<ul>
 <li><code>default</code> — ブラウザは、HTTP キャッシュで一致するリクエストを探します。

  <ul>
   <li>一致するものが<a href="/ja/docs/Web/HTTP/Caching#Freshness">新しい</a>場合、キャッシュから返されます。</li>
   <li>一致するものが古い場合、ブラウザはリモートサーバーに<a href="/ja/docs/Web/HTTP/Conditional_requests">条件付きリクエスト</a>を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。</li>
   <li>一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。</li>
  </ul>
 </li>
 <li><code>no-store</code> — ブラウザは、最初にキャッシュを調べずにリモートサーバーからリソースをフェッチし、ダウンロードしたリソースでキャッシュを<em>更新しません</em>。</li>
 <li><code>reload</code> — ブラウザは、最初にキャッシュを調べずにリモートサーバーからリソースをフェッチし、ダウンロードしたリソースでキャッシュを<em>更新します</em>。</li>
 <li><code>no-cache</code> — ブラウザは、HTTPキャッシュで一致するリクエストを探します。
  <ul>
   <li>一致するものが<em>新しいか古いかを問わず</em>、ブラウザはリモートサーバーに<a href="/ja/docs/Web/HTTP/Conditional_requests">条件付きリクエスト</a>を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。</li>
   <li>一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。</li>
  </ul>
 </li>
 <li><code>force-cache</code> — ブラウザは、HTTPキャッシュで一致するリクエストを探します。
  <ul>
   <li>一致するものが<em>新しいか古いかを問わず</em>、キャッシュから返されます。</li>
   <li>一致するものがない場合、ブラウザは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。</li>
  </ul>
 </li>
 <li><code>only-if-cached</code> — ブラウザは、HTTPキャッシュで一致するリクエストを探します。
  <ul>
   <li>一致するものが<em>新しいか古いかを問わず</em>、キャッシュから返されます。</li>
   <li>一致するものがない場合、ブラウザは <a href="/ja/docs/Web/HTTP/Status/504">504 ゲートウェイタイムアウト</a>ステータスで応答します。</li>
  </ul>
  <code>"only-if-cached"</code> モードは、リクエストの<code><a href="/ja/docs/Web/API/Request/mode">モード</a></code>が <code>"same-origin"</code> の場合にのみ使用できます。リクエストの<code>リダイレクト</code>プロパティが <code>"follow"</code> であり、リダイレクトが <code>"same-origin"</code> モードに違反していない場合、キャッシュされたリダイレクトがフォローされます。</li>
</ul>

<h2 id="例">例</h2>

<pre class="brush: js notranslate">// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", {cache: "no-store"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", {cache: "reload"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", {cache: "no-cache"})
  .then(function(response) { /* consume the response */ });

// Download a resource with economics in mind!  Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", {cache: "force-cache"})
  .then(function(response) { /* consume the response */ });

// Naive stale-while-revalidate client-level implementation.
// Prefer a cached albeit stale response; but update if it's too old.
// AbortController and signal to allow better memory cleaning.
// In reality; this would be a function that takes a path and a
// reference to the controller since it would need to change the value
let controller = new AbortController();
fetch("some.json", {cache: "only-if-cached", mode: "same-origin", signal: controller.signal})
  .catch(e =&gt; e instanceof TypeError &amp;&amp; e.message === "Failed to fetch" ?
    ({status: 504}) : // Workaround for chrome; which simply fails with a typeerror
    Promise.reject(e))
  .then(res =&gt; {
    if (res.status === 504) {
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "force-cache", mode: "same-origin", signal: controller.signal})
    }
    const date = res.headers.get("date"), dt = date ? new Date(date).getTime() : 0
    if (dt &lt; (Date.now() - 86400000)) {
      // if older than 24 hours
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "reload", mode: "same-origin", signal: controller.signal})
    }

    // Other possible conditions
    if (dt &lt; (Date.now() - 300000)) // If it's older than 5 minutes
      fetch("some.json", {cache: "no-cache", mode: "same-origin"}) // no cancellation or return value.
    return res
  })
  .then(function(response) { /* consume the (possibly stale) response */ })
  .catch(error =&gt; { /* Can be an AbortError/DOMError or a TypeError */ });</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#dom-request-cache','cache')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



<p>{{Compat("api.Request.cache")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
