---
title: ServiceWorkerContainer.controller
slug: Web/API/ServiceWorkerContainer/controller
tags:
  - API
  - Controller
  - Property
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - ServiceWorkerController
translation_of: Web/API/ServiceWorkerContainer/controller
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerContainer")}} インターフェイスの <strong><code>controller</code></strong> 読み取り専用プロパティは、{{domxref("ServiceWorker")}} オブジェクトの状態が <code>activating</code> または <code>activated</code> ならそれ ({{domxref("ServiceWorkerRegistration.active")}} で返されるのと同じオブジェクト) を返します。このプロパティはリクエストが強制リフレッシュ(<em>Shift</em> + リフレッシュ)やアクティブワーカーがない場合は <code>null</code> を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>myController</em> = navigator.serviceWorker.controller;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("ServiceWorker")}} オブジェクト。.</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">if ('serviceWorker' in navigator) {
  // 1回限りのチェックを行って、サービスワーカーが制御しているかどうかを確認します。
  if (navigator.serviceWorker.controller) {
    console.log(`このページは現在サービスワーカーによって制御されています: ${navigator.serviceWorker.controller}`);
  } else {
    console.log('このページは現在サービスワーカーによって制御されていません。');
  }
} else {
  console.log('サービスワーカーをサポートしていません。');
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#navigator-service-worker-controller', 'ServiceWorkerRegistration.controller')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.controller")}}</p>
</div>
