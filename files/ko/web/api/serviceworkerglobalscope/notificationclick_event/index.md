---
title: 'ServiceWorkerGlobalScope: notificationclick event'
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
translation_of: Web/API/ServiceWorkerGlobalScope/notificationclick_event
---
<div>{{APIRef}}</div>

<p><code>notificationclick</code> 이벤트는 <span style="line-height: 19.0909080505371px;">{{domxref("ServiceWorkerRegistration.showNotification()")}} 에 의해 발생한 시스템 notification 이 클릭되었음을 나타내기 위해 </span>발생된다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"></th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("NotificationEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler</th>
   <td><code><a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick">onnotificationclick</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p><code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> 메소드 내에서 <code>notificationclick</code> 이벤트를 사용할 수 있다:</p>

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

<p>또는 <code><a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick">onnotificationclick</a></code> 이벤트 핸들러 속성을 사용할 수 있다:</p>

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

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.notificationclick_event")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
 <li><a href="/en-US/docs/Web/API/Notifications_API">Notifications API</a></li>
</ul>
