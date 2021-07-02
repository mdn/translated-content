---
title: 'ServiceWorkerGlobalScope: notificationclick イベント'
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
tags:
  - Event
  - Notifications
  - Service Worker
  - ServiceWorkerGloablScope
  - events
  - notificationclick
  - イベント
translation_of: Web/API/ServiceWorkerGlobalScope/notificationclick_event
---
<div>{{APIRef}}</div>

<p><strong><code>notificationclick</code></strong> イベントは、 {{domxref("ServiceWorkerRegistration.showNotification()")}} によって生み出されたシステム通知がクリックされたことを示すために発生します。</p>

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
   <td>{{domxref("NotificationEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>notificationclick</code> イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッド内で使用することができます。</p>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
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
});
</pre>

<p>または、 {{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}} イベントハンドラープロパティを使用してください。</p>

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
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Push API', '#extensions-to-the-serviceworkerglobalscope-interface', 'push')}}</td>
   <td>{{Spec2('Push API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.push_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
 <li><a href="/ja/docs/Web/API/Notifications_API">Notifications API</a></li>
</ul>
