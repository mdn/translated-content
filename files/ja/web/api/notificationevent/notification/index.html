---
title: NotificationEvent.notification
slug: Web/API/NotificationEvent/notification
tags:
  - API
  - Experimental
  - NotificationEvent
  - Notifications
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - プロパティ
  - 通知
translation_of: Web/API/NotificationEvent/notification
---
<p>{{APIRef("Web Notifications")}}</p>

<p><code>notification</code> は {{domxref("NotificationEvent")}} インターフェイスの読取専用プロパティで、クリックされてイベントを発行した {{domxref("Notification")}} のインスタンスを返します。 {{domxref("Notification")}} は <code>tag</code> や <code>data</code> 属性など、 Notification のインスタンス化時に設定された多くのプロパティへの読み取り専用アクセスを提供しており、あとで <code>notificationclick</code> イベントで使用するための情報を保存することができます。</p>

<h2 id="Returns" name="Returns">返値</h2>

<p>{{domxref("Notification")}} オブジェクト。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click');

  // Data can be attached to the notification so that you
  // can process it in the notificationclick handler.
  console.log('Notification Tag:', event.notification.tag);
  console.log('Notification Data:', event.notification.data);
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

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notificationevent-notification','notification')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.NotificationEvent.notification")}}</p>
