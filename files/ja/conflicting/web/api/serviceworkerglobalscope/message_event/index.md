---
title: ServiceWorkerGlobalScope.onmessage
slug: conflicting/Web/API/ServiceWorkerGlobalScope/message_event
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Worker
  - onmessage
translation_of: Web/API/ServiceWorkerGlobalScope/onmessage
original_slug: Web/API/ServiceWorkerGlobalScope/onmessage
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの <strong><code>onmessage</code></strong> プロパティは、（着信メッセージの受信時に）{{domxref("ServiceWorkerGlobalScope.message_event","message")}} イベントが発生するたびに発火するイベントハンドラーです。</span></p>

<div class="note">
<p><strong>注</strong>: サービスワーカーは、延長可能なイベントを定義して、イベントの存続期間を延長できるようにします。 <code>message</code> イベントの場合、サービスワーカーは {{domxref("ExtendableEvent")}} インターフェイスを拡張した {{domxref("ExtendableMessageEvent")}} インターフェイスを使用します。</p>
</div>

<div class="note">
<p><strong>注</strong>: 他のウェブメッセージング機能との整合性を保つため、サービスワーカーのコンテキストから受信されるメッセージ（<code>onmessage</code> のイベントオブジェクトなど）は、最新のブラウザーでは {{domxref("MessageEvent")}} オブジェクトによって表されます。 （これらは、以前は廃止された {{domxref("ServiceWorkerMessageEvent")}} オブジェクトで表されていました。）</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerGlobalScope</em>.onmessage = function(<em>extendableMessageEvent</em>) { ... };</pre>

<h2 id="例">例</h2>

<pre class="brush: js">self.addEventListener('message', function(messageEvent) {
  console.log('Handling message event:', messageEvent);
})
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerGlobalScope.onmessage")}}</p>
</div>
