---
title: Push API
slug: Web/API/Push_API
---

{{DefaultAPISidebar("Push API")}}

**Push API**는 웹 애플리케이션이 현재 로딩이 되어 있지 않더라도 서버로부터 메시지를 받을 수 있도록 하는 기능이다. 이는 개발자들이 비동기적으로 사용자에게 새로운 내용을 시기적절하게 전달할 수 있도록 만들어 준다.

## Push 콘셉트와 사용처

> **경고:** PushManager를 수행할 때, 해당 애플리케이션에 CSRF/XSRF 이슈에 대한 대응책을 마련해놓아야 한다:\* [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
>
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

애플리케이션이 push 메시지를 받기 위해서, [service worker](/ko/docs/Web/API/ServiceWorker_API)를 활성화한다.

{{domxref("PushManager.subscribe()")}}.

{{domxref("PushSubscription")}}에 애플리케이션이 보내야 하는 push메시지를 담고, (엔드포인트와 암호화키가 필요)

service worker는{{domxref("ServiceWorkerGlobalScope.onpush")}} 라는 이벤트 핸들러로부터 전달되는 push 메시지를 처리하기 시작한다.

각 요청은 [capability URL](http://www.w3.org/TR/capability-urls/):(당신의 애플리케이션)을 특정하여 엔드포인트를 구성하기 때문에 엔드포인트 URL은 보안에 신경을 써야 하며, 그렇지 않을 경우 다른 애플리케이션에서 당신의 애플리케이션에 push 메시지를 보낼 가능성도 있다.

push 메시지를 전달하기 위해 service worker를 활성화하는 건, 리소스 사용이 늘어나는 결과를 가져오기 때문에, 특히 배터리 사용에 영향을 미친다. 한편 push메시지 처리를 위해 브라우저 간 다른 스키마를 가지기 때문에, 표준화된 메커니즘이 없다. Firefox는 한정된 숫자(quota)만을 push 메시지로 보내도록 해 놓았다. 이러한 제한은 사이트에 방문할 때마다 초기화되며, Chrome은 제한이 없으며 모든 push 메시지가 보이도록 한다.

> **참고:** Gecko 44에 따르면, 각 애플리케이션에 할당된 quota는 3초 정도 다른 알림이 보이는 상태일 때, 새로운 알림이 발생해도 중가하지 않는다.

> **참고:** Chrome 52 이전 버전은 push메시지 활용을 위해선 [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)에 프로젝트를 세팅해야 하며 한편 push 메시지를 보낼 때 프로젝트 번호 및 API 키를 활용하도록 권장한다. app manifest에 서비스 활용에 필요한 특정 패러미터를 정의해야 한다.

## Interfaces

- {{domxref("PushEvent")}}
  - : Represents a push action, sent to the [global scope](/ko/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains information sent from an application to a {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Provides a way to receive notifications from third-party servers, as well as request URLs for push notifications. This interface has replaced the functionality offered by the obsolete {{domxref("PushRegistrationManager")}} interface.
- {{domxref("PushMessageData")}}
  - : Provides access to push data sent by a server, and includes methods to manipulate the received data.
- {{domxref("PushSubscription")}}
  - : Provides a subcription's URL endpoint, and allows unsubscription from a push service.

## Service worker additions

The following additions to the [Service Worker API](/ko/docs/Web/API/Service_Worker_API) have been specified in the Push API spec to provide an entry point for using Push messages. They also monitor and respond to push and subscription change events.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status. This is the entry point into using Push messaging.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : An event handler fired whenever a {{Event("push")}} event occurs; that is, whenever a server push message is received.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : An event handler fired whenever a {{Event("pushsubscriptionchange")}} event occurs; for example, when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time.)

## Examples

Mozilla's [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook/) contains many useful Push examples.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/), Joseph Medley
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)

{{DefaultAPISidebar("Push API")}}
