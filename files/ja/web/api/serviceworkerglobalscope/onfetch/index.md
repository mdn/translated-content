---
title: ServiceWorkerGlobalScope.onfetch
slug: Web/API/ServiceWorkerGlobalScope/onfetch
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - onfetch
translation_of: Web/API/ServiceWorkerGlobalScope/onfetch
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの <strong><code>onfetch</code></strong> プロパティは、{{Event("fetch")}} イベントが発生するたびに（通常、{{domxref("WindowOrWorkerGlobalScope.fetch()")}} メソッドが呼び出されたときに）発火するイベントハンドラーです。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerGlobalScope</em>.onfetch = function(<em>fetchEvent</em>) { ... };</pre>

<h2 id="Example" name="Example">例</h2>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js">サービスワーカーのプリフェッチの例</a>からのものです（<a href="https://googlechrome.github.io/samples/service-worker/prefetch/">プリフェッチの例をライブで</a>見る）。{{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、<code>fetch</code> イベントをリッスンします。 コードが実行されると、コードは、{{domxref("Cache")}} オブジェクト内の最初に一致するリクエストに解決するプロミスを返します。 一致が見つからない場合、コードはネットワークからレスポンスをフェッチします。</p>

<p>このコードは、{{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} 操作からスローされた例外も処理します。 HTTP エラーレスポンス（404 など）は例外をトリガーしないことに注意してください。 適切なエラーコードが設定された通常のレスポンスオブジェクトを返します。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
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
   <td>{{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerGlobalScope.onfetch")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
