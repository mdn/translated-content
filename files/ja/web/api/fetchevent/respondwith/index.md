---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
tags:
  - API
  - Experimental
  - FetchEvent
  - Method
  - Offline
  - Reference
  - Service Worker
  - Worker
  - respondWith
translation_of: Web/API/FetchEvent/respondWith
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("FetchEvent")}} インターフェイスの <strong><code>respondWith()</code></strong> メソッドは、ブラウザー既定の fetch ハンドリングを抑止して、あなたが {{domxref("Response")}} 用の Promise を提供できるようにします。</span></p>

<p>たいていの場合、あなたは受け手が理解できるどんなレスポンスでも提供できます。例えば、{{HTMLElement('img')}} がリクエストを開始する場合、レスポンスボディには画像データが必要です。セキュリティの理由から、少しのグローバルルールがあります:</p>

<ul>
 <li>{{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "<code>no-cors</code>" の場合にだけ、"<code>opaque</code>" {{domxref("Response.type", "type")}} (不透明型) の {{domxref("Response")}} オブジェクトを返すことができます。これはプライベートなデータの漏えいを防ぎます。</li>
 <li>{{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "<code>manual</code>" の場合にだけ "<code>opaqueredirect</code>" {{domxref("Response.type", "type")}} (不透明なリダイレクト型) の {{domxref("Response")}} オブジェクトを返すことができます。</li>
 <li>{{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "<code>same-origin</code>" の場合、"<code>cors</code>" {{domxref("Response.type", "type")}} の {{domxref("Response")}} オブジェクトを返すことはできません。</li>
</ul>

<h3 id="Specifying_the_final_URL_of_a_resource" name="Specifying_the_final_URL_of_a_resource">リソースの最終 URL を指定する</h3>

<p>Firefox 59 以降では、サービスワーカーが {{domxref("FetchEvent.respondWith()")}} に {{domxref("Response")}} を渡すとき、その {{domxref("Response.url")}} の値がインターセプトされたネットワークリクエストの最終 URL として伝搬します。{{domxref("Response.url")}} の値が空文字の場合は、{{domxref("Request.url","FetchEvent.request.url")}} が最終 URL として利用されます。</p>

<p>かつては {{domxref("Request.url","FetchEvent.request.url")}} がすべての場合に最終 URL として使われていました。与えられた {{domxref("Response.url")}} は実際には無視されていました。</p>

<p>つまり、例えば、サービスワーカーがスタイルシートや Worker スクリプトをインターセプトすると、与えられた {{domxref("Response.url")}} が、サブリソースが読み込む相対的な {{cssxref("@import")}} や {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} の代わりに使われます ({{bug(1222008)}})。</p>

<p>たいていのネットワークリクエストに対して、最終 URL を観測できないためこの変更は影響ありません。しかし、少しだけ関係する場合があります:</p>

<ul>
 <li>{{domxref("WindowOrWorkerGlobalScope.fetch()", "fetch()")}} がインターセプトされた場合、結果の {{domxref("Response.url")}}で最終 URL を観測できます。</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API">Worker</a> スクリプトがインターセプトされた場合、最終 URL は <code><a href="/ja/docs/Web/API/WorkerGlobalScope/location">self.location</a></code> をセットするのに使われ、Worker スクリプトの相対 URL の代わりのベース URL として使われます。</li>
 <li>スタイルシートがインターセプトされた場合、最終 URL は相対的な {{cssxref("@import")}} 読み込みの代わりのベース URL として使われます。</li>
</ul>

<p>{{domxref("Window","Window")}} と {{domxref("HTMLIFrameElement","iframe")}} のナビゲーションリクエストはこの最終 URL を使わ「ない」ことに注意してください。HTML 仕様のナビゲーションのリダイレクトの処理方法では、{{domxref("Window.location")}} のためにリクエスト URL を使います。これは、オフラインの時に、ユーザーに見える URL を変更することなくサイトが「代替の」ウェブページを提供できるということを意味します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js"><em>fetchEvent</em>.respondWith(
  // Response に解決される Promise。
​);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>{{domxref("Response")}} または <code>Response</code> に解決される {{jsxref("Promise")}}。それ以外の場合は、ネットワークエラーが Fetch に返されます。</p>

<h3 id="Return_value" name="Return_value">返り値</h3>

<p><code>undefined</code>。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">注記</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>NetworkError</code></td>
   <td>上記の "グローバルルール" にヒントがあるように、ネットワークエラーは {{domxref("Request.mode","FetchEvent.request.mode")}} と {{domxref("Response.type")}}  の値の組み合わせでトリガーされます。</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>イベントがディスパッチされていないか、<code>respondWith()</code> が既に呼び出されています。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この fetch イベントはキャッシュ API からのレスポンスを返そうとし、ない場合にはネットワークにフォールバックします。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="function token">addEventListener</span><span class="punctuation token">(</span><span class="string token">'fetch'</span><span class="punctuation token">,</span> event <span class="operator token">=</span><span class="operator token">&gt;</span> <span class="punctuation token">{</span>
  <span class="comment token">// デフォルトを抑止し、リクエストを自分で処理します。</span>
  event<span class="punctuation token">.</span><span class="function token">respondWith</span><span class="punctuation token">(</span><span class="keyword token">async</span> <span class="keyword token">function</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// キャッシュからレスポンスを取得しようとします。</span>
    <span class="keyword token">const</span> cachedResponse <span class="operator token">=</span> <span class="keyword token">await</span> caches<span class="punctuation token">.</span><span class="function token">match</span><span class="punctuation token">(</span>event<span class="punctuation token">.</span>request<span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="comment token">// 見つかったらそれを返します。</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>cachedResponse<span class="punctuation token">)</span> <span class="keyword token">return</span> cachedResponse<span class="punctuation token">;</span>
    <span class="comment token">// キャッシュ内に一致するものが見つからなかった場合は、ネットワークを使用します。</span>
    <span class="keyword token">return</span> <span class="function token">fetch</span><span class="punctuation token">(</span>event<span class="punctuation token">.</span>request<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code>
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
   <td>{{SpecName('Service Workers', '#fetch-event-respondwith-method', 'respondWith()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.FetchEvent.respondWith")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service Worker の使用</a></li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
