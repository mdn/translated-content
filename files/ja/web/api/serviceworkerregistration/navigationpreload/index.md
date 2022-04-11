---
title: ServiceWorkerRegistration.navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
tags:
  - API
  - NavigationPreloadManager
  - Offline
  - Property
  - Service Workers
  - ServiceWorkerRegistration
  - Workers
  - navigationPreload
translation_of: Web/API/ServiceWorkerRegistration/navigationPreload
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>navigationPreload</code></strong> 読み取り専用プロパティは、現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>navigationPreloadManager</em> = <em>serviceWorkerRegistration</em>.navigationPreload;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("NavigationPreloadManager")}} のインスタンス。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers','#service-worker-registration-navigationpreload','navigationPreload')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.navigationPreload")}}</p>
