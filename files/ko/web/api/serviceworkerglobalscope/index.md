---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

[Service Worker API](/ko/docs/Web/API/Service_Worker_API)의 **`ServiceWorkerGlobalScope`** 인터페이스는 서비스 워커의 전역 실행 맥락을 나타냅니다.

개발자는 ServiceWorker 상태가 종료/재시작 주기 동안 유지되지 않는다는 것을 명심해야 하며, 따라서 각 이벤트 처리기는 초기화된 기본 전역 상태로 호출되고 있다고 가정해야 합니다.

서비스 워커가 성공적으로 등록되면, 메모리와 프로세서 전력을 절약하기 위해 유휴 상태에서 종료될 수 있고 종료될 것입니다. 활성화된 서비스 워커는 {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}}나 {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} 같은 이벤트에 응답하기 위해 자동으로 재시작됩니다.

또한 서비스 워커 내의 동기 요청은 허용되지 않으며, {{domxref("WorkerGlobalScope/fetch", "fetch()")}} 메서드를 통해 시작된 것과 같은 비동기 요청만 사용할 수 있습니다.

이 인터페이스는 {{domxref("WorkerGlobalScope")}} 인터페이스와, 그 부모 {{domxref("EventTarget")}}에서 상속받습니다.

{{InheritanceDiagram}}

## 인스턴스 속성

이 인터페이스는 {{domxref("WorkerGlobalScope")}} 인터페이스와 그 부모 {{domxref("EventTarget")}}에서 속성을 상속받습니다.

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{ReadOnlyInline}}
  - : 서비스 워커와 관련된 {{domxref("Clients")}} 객체를 포함합니다.
- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 서비스 워커와 관련된 {{domxref("CookieStore")}} 객체에 대한 참조를 반환합니다.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{ReadOnlyInline}}
  - : 서비스 워커의 등록을 나타내는 {{domxref("ServiceWorkerRegistration")}} 객체를 포함합니다.
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}} {{ReadOnlyInline}}
  - : 서비스 워커를 나타내는 {{domxref("ServiceWorker")}} 객체를 포함합니다.

## 인스턴스 메서드

이 인터페이스는 {{domxref("WorkerGlobalScope")}} 인터페이스와 그 부모 {{domxref("EventTarget")}}으로부터 메서드를 상속받습니다.

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : 서비스 워커 클라이언트가 현재 서비스 워커를 사용하고 있는 동안 대기 상태에 있는 서비스 워커 등록이 활성 상태가 되도록 허용합니다.

## 이벤트

{{domxref("EventTarget/addEventListener()", "addEventListener()")}}를 사용하거나 인터페이스의 `oneventname` 속성에 이벤트 수신기를 할당하여 이 이벤트를 수신합니다.

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : {{domxref("ServiceWorkerRegistration")}}이 새로운 {{domxref("ServiceWorkerRegistration.active")}} 워커를 획득할 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} {{Experimental_Inline}}
  - : 사용자나 앱에 의해 [백그라운드 페치](/ko/docs/Web/API/Background_Fetch_API) 작업이 취소되었을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} {{Experimental_Inline}}
  - : 사용자가 [백그라운드 페치](/ko/docs/Web/API/Background_Fetch_API) 작업을 클릭했을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchfail_event", "backgroundfetchfail")}} {{Experimental_Inline}}
  - : [백그라운드 페치](/ko/docs/Web/API/Background_Fetch_API) 작업 요청 중 하나 이상이 실패했을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchsuccess_event", "backgroundfetchsuccess")}} {{Experimental_Inline}}
  - : [백그라운드 페치](/ko/docs/Web/API/Background_Fetch_API) 작업의 모든 요청이 성공했을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/canmakepayment_event", "canmakepayment")}} {{Experimental_Inline}}
  - : 결제 앱의 서비스 워커에서 결제를 처리할 준비가 되었는지 확인하기 위해 발생합니다. 특히, 상점 웹사이트에서 {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} 생성자를 호출할 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : {{domxref("ContentIndex")}}에서 항목이 제거되었을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} {{Experimental_Inline}}
  - : 서비스 워커의 쿠키 변경 구독 목록과 일치하는 쿠키 변경이 발생했을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : {{domxref("WorkerGlobalScope/fetch", "fetch()")}}가 호출될 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : {{domxref("ServiceWorkerRegistration")}}이 새로운 {{domxref("ServiceWorkerRegistration.installing")}} 워커를 획득할 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : 메시지를 받을 때 발생합니다. 제어된 페이지는 {{domxref("MessagePort.postMessage()")}} 메서드를 사용해 서비스 워커에 메시지를 보낼 수 있습니다.
- {{domxref("ServiceWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : 수신 메시지를 역직렬화 할 수 없을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : 사용자가 표시된 알림을 클릭할 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : 사용자가 표시된 알림을 닫을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/paymentrequest_event", "paymentrequest")}} {{Experimental_Inline}}
  - : {{domxref("PaymentRequest.show()")}} 메서드를 통해 상점 웹사이트에서 결제 흐름이 시작되었을 때 결제 앱에서 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : 서비스 워커 클라이언트 페이지에서 {{domxref("SyncManager.register")}}를 호출하면 트리거됩니다. 네트워크가 사용 가능하면, 또는 네트워크가 사용할 수 있게 되는 즉시 동기화를 시도합니다.
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} {{Experimental_Inline}}
  - : {{domxref("PeriodicSyncManager")}}를 등록할 때 지정한 주기적인 간격으로 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : 서버 푸시 알림을 받을 때 발생합니다.
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : 푸시 구독이 무효화되었거나 무효화되려고 할 때 발생합니다 (예: 푸시 서비스가 만료 시간을 설정할 때).

## 예제

이 코드 조각은 [서비스 워커 prefetch 샘플](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)에서 가져온 것입니다 ([라이브 prefetch 예제](https://googlechrome.github.io/samples/service-worker/prefetch/) 참조.) {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} 이벤트 처리기는 `fetch` 이벤트를 수신합니다. 이벤트가 발생하면, 코드는 {{domxref("Cache")}} 객체에서 첫 번째로 일치하는 요청이 이행된 프로미스를 반환합니다. 일치하는 요청이 없으면, 코드는 네트워크에서 응답을 가져옵니다.

이 코드는 {{domxref("WorkerGlobalScope/fetch", "fetch()")}} 작업에서 발생하는 예외도 처리합니다. HTTP 오류 응답(예: 404)은 예외를 트리거하지 않는다는 점을 주의하세요. 적절한 오류 코드가 설정된 일반 응답 객체를 반환합니다.

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request).then(
        (response) => {
          console.log("Response from network is:", response);

          return response;
        },
        (error) => {
          console.error("Fetching failed:", error);

          throw error;
        },
      );
    }),
  );
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [서비스 워커 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [서비스 워커 기본 코드 예제](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
