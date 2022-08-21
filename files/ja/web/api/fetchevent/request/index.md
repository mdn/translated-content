---
title: FetchEvent.request
slug: Web/API/FetchEvent/request
tags:
  - API
  - FetchEvent
  - Offline
  - Property
  - Reference
  - Service Workers
  - Workers
  - request
translation_of: Web/API/FetchEvent/request
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("FetchEvent")}} インターフェイスの <strong><code>request</code></strong> 読み取り専用プロパティは、イベントハンドラーをトリガーした {{domxref("Request")}} を返します。</span></p>

<p>このプロパティは null 不可です（Firefox の場合、バージョン 46 以降）。 他の方法でリクエストが提供されない場合、コンストラクターの <code>init</code> オブジェクトに request を含める必要があります（{{domxref("FetchEvent.FetchEvent()")}} を参照）。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>recentRequest</em> = <em>fetchEvent</em>.request;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("Request")}} オブジェクト。</p>

<h2 id="Example" name="Example">例</h2>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js">サービスワーカーのフェッチの例</a>からのものです（<a href="https://googlechrome.github.io/samples/service-worker/prefetch/">フェッチの例をライブで実行</a>）。 {{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、<code>fetch</code> イベントをリッスンします。 起動したら、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻す Promise を渡します。 この Promise は、{{domxref("Cache")}} オブジェクトで最初に一致した URL リクエストに解決されます。 一致が見つからない場合、コードはネットワークからレスポンスをフェッチします。</p>

<p>このコードは、{{domxref("ServiceWorkerGlobalScope.fetch")}} 操作からスローされた例外も処理します。 HTTP エラーレスポンス（404 など）は例外をトリガーしないことに注意してください。 適切なエラーコードが設定された通常のレスポンスオブジェクトを返します。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  console.log('フェッチイベントの処理:', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('キャッシュで見つかったレスポンス:', response);

        return response;
      }
      console.log('キャッシュにレスポンスが見つかりません。 ネットワークからフェッチします...');

      return fetch(event.request).then(function(response) {
        console.log('ネットワークからのレスポンス:', response);

        return response;
      }).catch(function(error) {
        console.error('フェッチ失敗:', error);

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
   <td>{{SpecName('Service Workers', '#fetch-event-request', 'request')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.FetchEvent.request")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
