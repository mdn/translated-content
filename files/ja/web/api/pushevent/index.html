---
title: PushEvent
slug: Web/API/PushEvent
tags:
  - API
  - ExtendableEvent
  - Interface
  - Offline
  - Push
  - Push API
  - Reference
  - Service Workers
  - Workers
translation_of: Web/API/PushEvent
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p><a href="/ja/docs/Web/API/Push_API">Push API</a> の <strong><code>PushEvent</code></strong> インターフェースは、受け取ったプッシュメッセージを表します。このイベントは、{{domxref("ServiceWorker")}} の <a href="/ja/docs/Web/API/ServiceWorkerGlobalScope">グローバルスコープ</a>に送信されます。これは、アプリケーションサーバーから {{domxref("PushSubscription")}} に送信された情報を含みます。</p>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("PushEvent.PushEvent()")}}</dt>
 <dd>新しい <code>PushEvent</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親である {{domxref("ExtendableEvent")}} からプロパティを継承しています。追加プロパティ：</em></p>

<dl>
 <dt>{{domxref("PushEvent.data")}} {{readonlyinline}}</dt>
 <dd><span>{{domxref("PushSubscription")}}</span> に送信されたデータを含む {{domxref("PushMessageData")}} オブジェクトへの参照を返します。</dd>
</dl>

<p><strong style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">メソッド</strong></p>

<p><em>親である {{domxref("ExtendableEvent")}} からメソッドを継承しています。</em></p>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、<code>PushEvent</code> からデータを取得して、すべての service worker クライアントで表示しています。</p>

<pre class="brush: js">self.addEventListener('push', function(event) {
  if (!(self.Notification &amp;&amp; self.notification.permission === 'granted')) {
   return;
 }

 var data = {};
 if (event.data) {
   data = event.data.json();
 }
 var title = data.title || "Something Has Happened";
 var message = data.message || "Here's something you might want to check out.";
 var icon = "images/new-notification.png";

 var notification = new self.Notification(title, {
   body: message,
   tag: 'simple-push-demo-notification',
   icon: icon
 });

 notification.addEventListener('click', function() {
   if (clients.openWindow) {
     clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
   }
 });
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
   <td>{{SpecName('Push API','#the-push-event','PushEvent')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザー実装状況</h2>

<div>
<p>{{Compat("api.PushEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
