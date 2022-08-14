---
title: PushManager
slug: Web/API/PushManager
tags:
  - API
  - Experimental
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
  - 푸시
  - 푸시 알림
translation_of: Web/API/PushManager
---
<p>{{ApiRef("Push API")}}</p>

<p><a href="/ko/docs/Web/API/Push_API">Push API</a>의 <strong><code>PushManager</code></strong> 인터페이스는 서드파티 서버에서 알림을 수신하거나, URL에 푸시 알림을 요청하는 방법을 제공합니다.</p>

<p><code>PushManager</code>는 {{domxref("ServiceWorkerRegistration.pushManager")}} 속성으로 접근할 수 있습니다.</p>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{domxref("PushManager.supportedContentEncodings")}}</dt>
 <dd>푸시 메시지의 페이로드를 암호화할 때 지원하는 콘텐츠 인코딩의 목록을 반환합니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{domxref("PushManager.getSubscription()")}}</dt>
 <dd>기존의 푸시 구독을 가져옵니다. 해당 구독에 대한 상세 정보를 담은 {{domxref("PushSubscription")}} 객체를 {{jsxref("Promise")}}로 반환합니다. 구독이 존재하지 않으면 프로미스는 <code>null</code>로 이행합니다.</dd>
 <dt>{{domxref("PushManager.permissionState()")}}</dt>
 <dd>PushManager의 허가 상태로 이행하는 {{jsxref("Promise")}}를 반환합니다. 상태는 <code>'granted'</code>, <code>'denied'</code>, <code>'prompt'</code> 중 하나입니다.</dd>
 <dt>{{domxref("PushManager.subscribe()")}}</dt>
 <dd>푸시 서비스에 구독합니다. 해당 구독에 대한 상세 정보를 담은 {{domxref("PushSubscription")}} 객체를 {{jsxref("Promise")}}로 반환합니다. 현재 서비스 워커에 이전 구독이 존재하지 않으면 새로운 푸시 구독을 생성합니다.</dd>
</dl>

<div class="hidden">
<h3 id="Deprecated_methods">Deprecated methods</h3>

<dl>
 <dt>{{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves to the <code>PushPermissionStatus</code> of the requesting webapp, which will be one of <code>granted</code>, <code>denied</code>, or <code>default</code>. Replaced by {{domxref("PushManager.permissionState()")}}.</dd>
 <dt>{{domxref("PushManager.register()")}} {{deprecated_inline}}</dt>
 <dd>Subscribes to a push subscription. Replaced by {{domxref("PushManager.subscribe()")}}.</dd>
 <dt>{{domxref("PushManager.registrations()")}} {{deprecated_inline}}</dt>
 <dd>Retrieves existing push subscriptions. Replaced by {{domxref("PushManager.getSubscription()")}}.</dd>
 <dt>{{domxref("PushManager.unregister()")}} {{deprecated_inline}}</dt>
 <dd>Unregisters and deletes a specified subscription endpoint. In the updated API, a subscription is unregistered by calling the {{domxref("PushSubscription.unsubscribe()")}} method.</dd>
</dl>
</div>

<h2 id="예제">예제</h2>

<pre class="brush: js notranslate">this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.PushManager")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/ko/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
