---
title: 'ServiceWorkerGlobalScope: message event'
slug: Web/API/ServiceWorkerGlobalScope/message_event
tags:
  - Event
  - Reference
  - Service worker API
  - ServiceWorkerGlobalScope
  - message
translation_of: Web/API/ServiceWorkerGlobalScope/message_event
---
<div>{{APIRef}}</div>

<div>
<p>{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの <strong><code>message</code></strong> イベントは、着信メッセージを受信したときに発生します。 制御されたページは、{{domxref("ServiceWorker.postMessage()")}} メソッドを使用して、サービスワーカーにメッセージを送信できます。<br>
 サービスワーカーは、任意で、制御されたページに対応する {{domxref("Client.postMessage()")}} を介して返信することができます。</p>
</div>

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
   <td>{{domxref("ExtendableMessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td><code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/onmessage">onmessage</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その <code>postMessage()</code> 関数を呼び出します。</p>

<pre class="brush: js">// 制御されているページ内
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event =&gt; {
    // event は MessageEvent オブジェクトです
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration =&gt; {
    registration.active.postMessage("Hi service worker");
  });

}</pre>

<p>次のように、サービスワーカーは、<code>message</code> イベントをリッスンしてメッセージを受信できます。</p>

<pre class="brush: js">// サービスワーカー内
addEventListener('message', event =&gt; {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#eventdef-serviceworkerglobalscope-message', 'message')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerGlobalScope.message_event")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
