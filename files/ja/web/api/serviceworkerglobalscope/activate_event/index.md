---
title: 'ServiceWorkerGlobalScope: activate イベント'
slug: Web/API/ServiceWorkerGlobalScope/activate_event
tags:
  - API
  - Reference
  - Service Workers
  - ServiceWorkerGlobalScope
  - activate
  - events
translation_of: Web/API/ServiceWorkerGlobalScope/activate_event
---
<p>{{DefaultAPISidebar("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの <strong><code>activate</code></strong> イベントは、{{domxref("ServiceWorkerRegistration")}} が新しいアクティブワーカー（{{domxref("ServiceWorkerRegistration.active")}} worker）を取得すると発生します。</span></p>

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
   <td>{{domxref("ServiceWorkerGlobalScope.onactivate")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>次のスニペットは、<code>activate</code> イベントハンドラーを使用してキャッシュをアップグレードする方法を示しています。</p>

<pre class="brush: js">globalScope.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.forEach(function(cache, cacheName) {
      if (cacheWhitelist.indexOf(cacheName) == -1) {
        return caches.delete(cacheName);
      }
    })
  );
});</pre>

<p>次のように {{domxref("ServiceWorkerGlobalScope.onactivate")}} プロパティを使用してイベントハンドラーを設定することもできます。</p>

<pre class="brush: js">globalScope.onactivate = function(event) {
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
   <td>{{SpecName('Service Workers', '#service-worker-global-scope-activate-event', 'activate')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerGlobalScope.activate_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/install">install</a></code> イベント</li>
 <li>{{domxref("ServiceWorkerGlobalScope")}}</li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
