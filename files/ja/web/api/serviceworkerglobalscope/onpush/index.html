---
title: ServiceWorkerGlobalScope.onpush
slug: Web/API/ServiceWorkerGlobalScope/onpush
tags:
  - API
  - Property
  - Push
  - Reference
  - Service Worker
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - onpush
translation_of: Web/API/ServiceWorkerGlobalScope/onpush
---
<div>{{APIRef("Service Workers API")}}</div>

<p>{{domxref("ServiceWorkerGlobalScope")}} インターフェースの <code><strong>ServiceWorkerGlobalScope.onpush</strong></code> イベントは、Service Worker がプッシュサーバー経由でメッセージを受け取るたびに発火します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
self.addEventListener('push', function(PushEvent) { ... })
</pre>

<h2 id="Example" name="Example">例</h2>

<p>次の例では、{{domxref("PushEvent")}} からデータを取得して、すべての Service Worker のクライアント上で表示しています。プッシュメッセージのデータペイロードは、イベントオブジェクトの <code>data</code> プロパティ（{{domxref("PushEvent.data")}} は {{domxref("PushMessageData")}} オブジェクトを含みます。）で利用できます。</p>

<pre class="brush: js">self.addEventListener('push', function(event) {
 if (!(self.Notification &amp;&amp; self.Notification.permission === 'granted')) {
   return;
 }

 var data = {};
 if (event.data) {
   data = event.data.json();
 }
 var title = data.title || "Something Has Happened";
 var message = data.message || "Here's something you might want to check out.";
 var icon = "images/new-notification.png";

 var notification = new Notification(title, {
   body: message,
   tag: 'simple-push-demo-notification',
   icon: icon
 });

 notification.addEventListener('click', function() {
   if (clients.openWindow) {
     clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
   }
 });
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API', '#widl-ServiceWorkerGlobalScope-onpush', 'onpush')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。このイベントは {{domxref("ServiceWorkerGlobalScope")}} からアクセスしますが、Push API で定義されています。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>
<p>{{Compat("api.ServiceWorkerGlobalScope.onpush")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a></li>
</ul>
