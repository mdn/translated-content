---
title: FetchEvent.preloadResponse
slug: Web/API/FetchEvent/PreloadResponse
tags:
  - API
  - FetchEvent
  - Offline
  - Property
  - Reference
  - Service Workers
  - Web Performance
  - Workers
  - request
translation_of: Web/API/FetchEvent/PreloadResponse
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("FetchEvent")}} インターフェイスの <strong><code>preloadResponse</code></strong> 読み取り専用プロパティは、ナビゲーションプリロードがトリガーされた場合はナビゲーションプリロード {{domxref("Response")}} に解決され、それ以外の場合は <code>undefined</code> に解決される {{jsxref("Promise")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>expectedResponse</em> = <em>fetchEvent</em>.preloadResponse;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("Response")}} に解決されるか、それ以外の場合は <code>undefined</code> に解決される {{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>このコードスニペットは、<a href="https://developers.google.com/web/updates/2017/02/navigation-preload#the-solution">ナビゲーションプリロードのページ</a>（英語）からのものです。 {{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、<code>fetch</code> イベントをリッスンします。 起動したら、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻す Promise を渡します。 この Promise は、{{domxref("Cache")}} オブジェクトで最初に一致した URL リクエストに解決されます。 一致が見つからない場合、コードはプリロード済みのレスポンスをチェックします。 それ以外の場合は、ネットワークからレスポンスをフェッチします。</p>

<pre class="brush: js notranslate">addEventListener('fetch', event =&gt; {
  event.respondWith(async function() {
    // 可能な場合はキャッシュから応答します
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // それ以外の場合は、プリロード済みのレスポンスがあればそれを使用します
    const response = await event.preloadResponse;
    if (response) return response;

    // それ以外の場合は、ネットワークを試します。
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
   <td>{{SpecName('Service Workers', '#fetch-event-preloadresponse', 'preloadResponse')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.FetchEvent.preloadResponse")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
