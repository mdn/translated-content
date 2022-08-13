---
title: ServiceWorker
slug: Web/API/ServiceWorker
tags:
  - API
  - Draft
  - Interface
  - Offline
  - Service Workers
  - ServiceWorker
  - Workers
translation_of: Web/API/ServiceWorker
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<p><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a> のインターフェイスである <code>ServiceWorker</code> は service worker に関するレファレンスを提供しています。様々なブラウザー環境（例えばページ、worker など）が同一の service worker に関連付けることができて、一意な <code>ServiceWorker</code> オブジェクト​からアクセスできます。 </p>

<p><code>ServiceWorker</code> オブジェクトはプロバティ{{domxref("ServiceWorkerRegistration.active")}}と{{domxref("ServiceWorkerContainer.controller")}}プロパティ — これは起動された service worker でページを管理しています (そのservice workerが正常に登録されて管理されるページがリロードされています) — の中で利用可能です。</p>

<p><code>ServiceWorker</code> インターフェイスへは、 <code>install</code> や <code>activate</code> 、そして <code>fetch</code> を含む機能的なイベントといったライフサイクルイベントのセットが送られます。<code>ServiceWorker</code> オブジェクトは、ライフサイクルに関係する {{domxref("ServiceWorker.state")}} (状態) を持っています。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>ServiceWorker</code></em> インターフェイスは親となる{{domxref("Worker")}}からプロパティを継承します。</p>

<dl>
 <dt>{{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}</dt>
 <dd>
 <p>{{domxref("ServiceWorkerRegistration")}}の一部と定義されたスクリプト URL にシリアライズされた <code>ServiceWorker</code> を返します。この URL はその <code>ServiceWorker</code> を登録している document と同一オリジン上でなければなりません。</p>
 </dd>
 <dt>{{domxref("ServiceWorker.state")}} {{readonlyinline}}</dt>
 <dd>service worker の状態を返します。<code>installing</code>, <code>installed</code>, <code>activating</code>, <code>activated</code>, <code>redundant</code> のいずれかの値を返します。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラ</h3>

<dl>
 <dt>{{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}</dt>
 <dd><code>statechange</code> イベントが発火した際に呼び出される{{domxref("EventListener")}} プロパティです。このイベントは {{domxref("ServiceWorker.state")}} が変更された際に発火されます。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>ServiceWorker</code> インターフェイスは親である{{domxref("Worker")}}インターフェイスからメソッドを継承していますが、{{domxref("Worker.terminate")}} は例外です。このメソッドは service worker からアクセスされるべきではありません。</em></p>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットは <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html">service worker registration-events sample</a> (<a href="https://googlechrome.github.io/samples/service-worker/registration-events/">live demo</a>)の一部です。{{domxref("ServiceWorker.state")}} のあらゆる変更をリッスンし、その値を返します。</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
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
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
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
   <td>{{SpecName('Service Workers', '#service-worker-obj', 'ServiceWorker')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.ServiceWorker")}}</p>
</div>

<h2 id="See_also" name="See_also">関連</h2>

<ul>
 <li><a href="https://serviceworke.rs">ServiceWorker Cookbook</a></li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service Workers を使用する</a></li>
 <li><a href="https://github.com/mdn/sw-test">Service workers basic code example</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li>{{jsxref("Promise", "Promises")}}</li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">web workers を使用する</a></li>
</ul>
