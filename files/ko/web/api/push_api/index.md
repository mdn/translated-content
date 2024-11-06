---
title: Push API
slug: Web/API/Push_API
l10n:
  sourceCommit: 3de6b951c2d3b03c7c4a8d8e92e35ebcb4639af2
---

{{DefaultAPISidebar("Push API")}}

**Push API**는 웹 애플리케이션이 사용자 에이전트에서 웹 앱이 활성 상태에 있는지 또는 현재 로드 중인지 여부와 관계없이 서버로부터 푸시 메시지를 수신할 수 있는 기능을 제공합니다. 이를 통해 개발자는 미리 동의한 사용자에게 비동기식 알림 및 업데이트를 전달할 수 있으므로 적시에 새로운 콘텐츠에 대한 참여도를 높일 수 있습니다.

## Push 개념 및 사용법

> [!WARNING]
> PushManager 구독을 구현할 때는 앱에서 CSRF/XSRF 문제를 방지하는 것이 매우 중요합니다. 자세한 내용은 다음 문서를 참조하세요.
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

앱이 푸시 메시지를 수신하려면 활성 [서비스 워커](/ko/docs/Web/API/Service_Worker_API)가 있어야 합니다. 서비스 워커가 활성화되면 {{domxref("PushManager.subscribe()")}}를 사용하여 푸시 알림을 구독할 수 있습니다.

결과 {{domxref("PushSubscription")}}에는 애플리케이션이 푸시 메시지를 보내는 데 필요한 모든 정보(엔드포인트 및 데이터 전송에 필요한 암호화 키)가 포함됩니다.

서비스 워커는 수신 푸시 메시지를 처리하기 위해 필요에 따라 시작되어 {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}} 이벤트 핸들러로 전달됩니다. 이를 통해 앱은 알림을 표시하는 등의 방식으로 수신되는 푸시 메시지에 반응할 수 있습니다(예: {{domxref("ServiceWorkerRegistration.showNotification()")}} 사용).

각 구독은 서비스 워커마다 고유합니다. 구독의 엔드포인트는 고유한 [기능(capability) URL](https://www.w3.org/TR/capability-urls/)입니다. 엔드포인트에 대한 지식만 있으면 애플리케이션에 메시지를 보낼 수 있습니다. 따라서 엔드포인트 URL은 비밀로 유지해야 하며, 그렇지 않으면 다른 애플리케이션이 애플리케이션에 푸시 메시지를 보낼 수 있습니다.

푸시 메시지를 전달하기 위해 서비스 워커를 활성화하면 리소스 사용량, 특히 배터리 사용량이 증가할 수 있습니다. 브라우저마다 이를 처리하는 방식이 다르며, 현재 표준 메커니즘은 없습니다. Firefox에서는 애플리케이션에 전송할 수 있는 푸시 메시지의 개수(할당량)가 제한되어 있지만 알림을 생성하는 푸시 메시지는 이 제한에서 제외됩니다. 이 제한은 사이트를 방문할 때마다 새로 고쳐집니다. Chrome에서는 제한이 없습니다.

## 인터페이스

- {{domxref("PushEvent")}}
  - : {{domxref("ServiceWorker")}}의 [전역 범위(global scope)](/ko/docs/Web/API/ServiceWorkerGlobalScope)로 전송되는 푸시 작업을 나타냅니다. 여기에는 애플리케이션에서 {{domxref("PushSubscription")}}으로 전송된 정보가 포함됩니다.
- {{domxref("PushManager")}}
  - : 타사 서버로부터 알림을 수신하고 푸시 알림을 위한 URL을 요청하는 방법을 제공합니다.
- {{domxref("PushMessageData")}}
  - : 서버에서 전송한 푸시 데이터에 대한 접근을 제공하고 수신된 데이터를 조작하는 메서드를 포함합니다.
- {{domxref("PushSubscription")}}
  - : 구독의 URL 엔드포인트를 제공하고 푸시 서비스에서 구독을 취소할 수 있습니다.
- {{domxref("PushSubscriptionOptions")}}
  - : 푸시 구독과 관련된 옵션을 나타냅니다.

## 서비스 워커 추가 기능

푸시 API 사양에는 푸시 메시지를 사용하는 진입점을 제공하고, 푸시 및 구독 변경 이벤트를 모니터하고 응답하기 위해 [Service Worker API](/ko/docs/Web/API/Service_Worker_API)에 대한 다음과 같은 추가 사항들이 명시되어 있습니다.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : 구독, 활성 구독 가져오기, 푸시 권한 상태 접근 등 푸시 구독을 관리하기 위한 {{domxref("PushManager")}} 인터페이스에 대한 참조를 반환합니다. 푸시 메시징을 사용하기 위한 진입점입니다.
- {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}}
  - : {{domxref("ServiceWorkerGlobalScope/push_event", "push")}} 이벤트가 발생할 때마다, 즉 서버 푸시 메시지가 수신될 때마다 이벤트 핸들러가 실행됩니다.
- {{domxref("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "onpushsubscriptionchange")}}
  - : 푸시 구독이 무효화되었거나 곧 무효화될 때(예: 푸시 서비스가 만료 시간을 설정한 경우) 등 {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} 이벤트가 발생할 때마다 이벤트 핸들러가 실행됩니다.

## 예제

Mozilla의 [서비스 워커 쿡북](https://github.com/mdn/serviceworker-cookbook)에는 유용한 푸시 예제가 많이 포함되어 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Mozilla의 푸시 서비스를 통해 VAPID 식별 웹푸시 알림 보내기](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [푸시 알림 개요](https://web.dev/push-notifications-overview/)
- [서비스 워커 API](/ko/docs/Web/API/Service_Worker_API)

{{DefaultAPISidebar("Push API")}}
