---
title: PushEvent.data
slug: Web/API/PushEvent/data
tags:
  - API
  - Experimental
  - Property
  - Push
  - PushEvent
  - Reference
  - data
translation_of: Web/API/PushEvent/data
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p><strong><code>PushEvent</code></strong> インターフェースの <code>data</code> 読み取り専用プロパティは、<span style="line-height: 19.0909080505371px;">{{domxref("PushSubscription")}}</span> に送信されてたデータを含む {{domxref("PushMessageData")}} オブジェクトへの参照を返します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">var myPushData = PushEvent.data;</pre>

<h3 id="値">値</h3>

<p>{{domxref("PushMessageData")}} オブジェクト</p>

<p><strong style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">例</strong></p>

<p>次の例は、 <code>PushEvent</code> からデータを取得して、すべての service worker クライアントで表示しています。</p>

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

  var notification = new Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  };
});
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
   <td>{{SpecName('Push API','#widl-PushEvent-data','data')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushEvent.data")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
