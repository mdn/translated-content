---
title: 'ServiceWorkerContainer: message イベント'
slug: Web/API/ServiceWorkerContainer/message_event
tags:
  - API
  - Event
  - Reference
  - Service Workers
  - ServiceWorkerContainer
translation_of: Web/API/ServiceWorkerContainer/message_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>message</code></strong> イベントは、サービスワーカーからメッセージを受信するために、サービスワーカーによって制御されるページで使用します。</span></p>

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
   <td>{{domxref("MessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td><code><a href="/ja/docs/Web/API/ServiceWorkerContainer/onmessage">onmessage</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、サービスワーカーは <a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/onfetch"><code>fetch</code></a> イベントからクライアントの ID を取得し、<a href="/ja/docs/Web/API/Client/postMessage"><code>Client.postMessage</code></a> を使用してメッセージを送信します。</p>

<pre class="brush: js">// サービスワーカー内
async function messageClient(clientId) {
    const client = await clients.get(clientId);
    client.postMessage('こんにちはクライアント！');
}

addEventListener('fetch', (event) =&gt; {
    messageClient(event.clientId);
    event.respondWith(() =&gt; {
      // ...
    });
});</pre>

<p>クライアントは <code>message</code> イベントをリッスンしてメッセージを受信できます。</p>

<pre class="brush: js">// 制御されているページ
navigator.serviceWorker.addEventListener('message', (message) =&gt; {
    console.log(message);
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-serviceworkercontainer-onmessage', 'message')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer.message_event")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
