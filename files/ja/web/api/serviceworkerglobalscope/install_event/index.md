---
title: 'ServiceWorkerGlobalScope: install event'
slug: Web/API/ServiceWorkerGlobalScope/install_event
tags:
  - API
  - Reference
  - Service Worker
  - ServiceWorkerGlobalScope
  - events
  - install
translation_of: Web/API/ServiceWorkerGlobalScope/install_event
---
<p>{{DefaultAPISidebar("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの <strong><code>install</code></strong> イベントは、{{domxref("ServiceWorkerRegistration")}} が新しいインストール中のワーカー（{{domxref("ServiceWorkerRegistration.installing")}} worker）を取得すると発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("ExtendableEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("ServiceWorkerGlobalScope.oninstall")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>次のスニペットは、<code>install</code> イベントハンドラーを使用してキャッシュに多数のレスポンスを設定する方法を示しています。 サービスワーカーはこれを使用して、資産をオフラインで提供できます。</p>

<pre class="brush: js">this.addEventListener('install', function(event) {
  event.waitUntil(
   caches.open('v1').then(function(cache) {
         return cache.add(
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
     );
   })
   );
});</pre>

<p>次のように {{domxref("ServiceWorkerGlobalScope.oninstall")}} プロパティを使用してイベントハンドラーを設定することもできます。</p>

<pre class="brush: js">globalScope.oninstall = function(event) {
  ...
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-global-scope-install-event', 'install')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerGlobalScope.install_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/activate">activate</a></code> イベント</li>
 <li>{{domxref("ServiceWorkerGlobalScope")}}</li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
