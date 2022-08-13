---
title: Clients.claim()
slug: Web/API/Clients/claim
tags:
  - API
  - Clients
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - claim
translation_of: Web/API/Clients/claim
---
<p>{{APIRef("Service Worker Clients")}}</p>

<p><span class="seoSummary">{{domxref("Clients")}} インターフェイスの <strong><code>claim()</code></strong> メソッドを使用すると、アクティブなサービスワーカーが自身のスコープ（{{domxref("ServiceWorkerRegistration.scope", "scope")}}）内のすべてのクライアントのコントローラー（{{domxref("ServiceWorkerContainer.controller", "controller")}}）として自分自身を設定できます。 これにより、このサービスワーカーによって制御されるようになるクライアントの {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} で <code>"controllerchange"</code> イベントがトリガーされます。</span></p>

<p>サービスワーカーが最初に登録されると、ページは次に読み込まれるまでそれを使用しません。 <code>claim()</code> メソッドを使用すると、これらのページがすぐに制御されます。 これにより、サービスワーカーがネットワークを介して、または別のサービスワーカーを介して定期的に読み込まれるページを制御することに注意してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">await clients.claim();
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code> に解決される {{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>次の例では、サービスワーカーの <code>"activate"</code> イベントリスナー内で <code>claim()</code> を使用しているため、同じスコープに読み込まれたクライアントは、フェッチがこのサービスワーカーを通過する前に再読み込みする必要がありません。</p>

<pre class="brush: js">self.addEventListener('activate', event =&gt; {
  event.waitUntil(clients.claim());
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
   <td>{{SpecName('Service Workers', '#clients-claim', 'claim()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Clients.claim")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle">Service Worker のライフサイクル</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise", "Promises")}}</li>
 <li>{{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - サービスワーカーの待機フェーズをスキップする</li>
</ul>
