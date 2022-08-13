---
title: ServiceWorkerGlobalScope.onnotificationclick
slug: Web/API/ServiceWorkerGlobalScope/onnotificationclick
tags:
  - API
  - Experimental
  - Interface
  - Property
  - Reference
  - ServiceWorkerGlobalScope
  - onnotificationclick
translation_of: Web/API/ServiceWorkerGlobalScope/onnotificationclick
---
<p style="line-height: 19.0909080505371px;"><span style="line-height: 19.0909080505371px;">{{SeeCompatTable}}{{APIRef("Service Workers API")}}</span></p>

<p style="line-height: 19.0909080505371px;"><strong>ServiceWorkerGlobalScope.onnotificationclick</strong> プロパティは、{{domxref("ServiceWorkerGlobalScope")}} オブジェクトで {{Event("notificationclick")}} イベントが送り出されるたびに呼び出されるイベントハンドラーです。つまり、<span style="line-height: 19.0909080505371px;">ユーザーが {{domxref("ServiceWorkerRegistration.showNotification()")}} で生成された通知をクリックしたときです。</span></p>

<p>メインスレッド、または {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して Service Worker ではない Worker で生成された通知は、<code>Notification</code> オブジェクト自体で {{Event("click")}} イベントを代わりに受け取ります。</p>

<div class="note">
<p><strong>ノート</strong>: {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して {{domxref("ServiceWorkerGlobalScope")}} 内で通知を生成しようとすると、エラーがスローされます。</p>
</div>

<h2 id="構文" style="line-height: 30px; font-size: 2.14285714285714rem;">構文</h2>

<pre class="brush: js" style="font-size: 14px;">ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };
</pre>

<h2 id="例">例</h2>

<pre class="brush: js">self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
};
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">仕様</span></font></th>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">ステータス</span></font></th>
   <th scope="col"><font face="Open Sans, sans-serif"><span style="font-weight: normal;">コメント</span></font></th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclick','onnotificationclick')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>初期定義。このプロパティは、{{domxref('ServiceWorkerGlobalScope')}} の一部だが {{domxref('Notifications_API')}} で定義されている。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.onnotificationclick")}}</p>
