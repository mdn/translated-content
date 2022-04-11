---
title: ServiceWorkerRegistration.onupdatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - onupdatefound
translation_of: Web/API/ServiceWorkerRegistration/onupdatefound
original_slug: Web/API/ServiceWorkerRegistration/onupdatefound
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>onupdatefound</code></strong> プロパティは、<code>statechange</code> 型のイベントが発生するたびに呼び出される {{domxref("EventListener")}} プロパティです。 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。</span></p>

<div class="note">
<p><strong>注</strong>: この機能は <a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a> で使用できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerRegistration</em>.onupdatefound = function() { ... };</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkerregistration-onupdatefound', 'ServiceWorkerRegistration.onupdatefound')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.onupdatefound")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
