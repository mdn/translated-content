---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
tags:
  - API
  - Interface
  - Navigation
  - NavigationPreloadManager
  - Offline
  - Reference
  - Service Workers
translation_of: Web/API/NavigationPreloadManager
---
<p>{{APIRef("Service Workers API")}}</p>

<p><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の <strong><code>NavigationPreloadManager</code></strong> インターフェイスは、サービスワーカーによるリソースのプリロード（事前読み込み）を管理するためのメソッドを提供します。</p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("NavigationPreloadManager.enable()")}}</dt>
 <dd>ナビゲーションのプリロードを有効にし、解決する {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("NavigationPreloadManager.disable()")}}</dt>
 <dd>ナビゲーションのプリロードを無効にし、解決する {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("NavigationPreloadManager.setHeaderValue()")}}</dt>
 <dd><code>Service-Worker-Navigation-Preload</code> ヘッダーの値を設定し、空の {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("NavigationPreloadManager.getState()")}}</dt>
 <dd>プリロードが有効かどうかと、<code>Service-Worker-Navigation-Preload</code> の内容を示すプロパティを持つオブジェクトに解決する {{jsxref("Promise")}} を返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h4 id="Feature_Detecting_and_Enabling_Navigation_Preloading" name="Feature_Detecting_and_Enabling_Navigation_Preloading">ナビゲーションのプリロードの機能を検出して有効化</h4>

<pre class="brush: js notranslate">addEventListener('activate', event =&gt; {
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) {
      // ナビゲーションのプリロードを有効にします！
      await self.registration.navigationPreload.enable();
    }
  }());
});
</pre>

<h4 id="Using_a_Preloaded_Response" name="Using_a_Preloaded_Response">プリロードされたレスポンスの使用</h4>

<p>次の例は、プリロードされたレスポンスを使用する fetch イベントの実装を示しています。</p>

<pre class="brush: js notranslate">addEventListener('fetch', event =&gt; {
  event.respondWith(async function() {
    // 可能なら、キャッシュから応答します
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // それがなく、プリロードされたレスポンスがあれば、それを使用します
    const response = await event.preloadResponse;
    if (response) return response;

    // それもなければ、ネットワークを試します。
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
   <td>{{SpecName('Service Workers','#navigation-preload-manager','NavigationPreloadManager')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.NavigationPreloadManager")}}</p>
