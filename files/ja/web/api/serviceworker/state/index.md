---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
tags:
  - API
  - Property
  - Reference
  - Référence(2)
  - Service Workers
  - ServiceWorker
  - state
translation_of: Web/API/ServiceWorker/state
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<p><code>ServiceWorker</code> インターフェイスの読み込みプロパティである <strong><code>state</code></strong> は service workerの現在の状態を表す文字列を返します。それは次のいずれかです: <code>installing</code>, <code>installed,</code> <code>activating</code>, <code>activated</code>, <code>redundant</code>。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">someURL = ServiceWorker.state
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("ServiceWorkerState")}} 定義 (<a href="http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#service-worker-state-enum">仕様を見てください</a>)</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットは<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html">service worker registration-events sample</a> (<a href="https://googlechrome.github.io/samples/service-worker/registration-events/">live demo</a>)から持ってきています。コードは {{domxref("ServiceWorker.state")}} のあらゆる変更をリッスンしてその値を返します。</p>

<pre class="brush: js">var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installing';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'waiting';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'active';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
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
   <td>{{SpecName('Service Workers', '#service-worker-state-attribute', 'state')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.ServiceWorker.state")}}</p>
</div>
