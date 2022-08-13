---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
translation_of: Web/API/ServiceWorkerContainer/getRegistration
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("ServiceWorkerContainer")}} インターフェイスの <strong><code>getRegistration()</code></strong> メソッドは、スコープ URL が指定されたドキュメント URL と一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または <code>undefined</code> に解決される {{jsxref("Promise")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerContainer</em>.getRegistration(<em>scope</em>).then(function(<em>serviceWorkerRegistration</em>) { ... });</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>scope</code> {{optional_inline}}</dt>
 <dd>サービスワーカー登録の一意の識別子 — 取得する登録オブジェクトのスコープ URL。 これは通常、相対 URL です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("ServiceWorkerRegistration")}} オブジェクトまたは <code>undefined</code> に解決される {{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration が見つかりました。';
  }
});
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkercontainer-getregistration', 'ServiceWorkerContainer: getRegistration')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.getRegistration")}}</p>
</div>
