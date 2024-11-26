---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

[Push API](/ko/docs/Web/API/Push_API)의 **`PushManager`** 인터페이스는 타사 서버로부터 알림을 받는 방법과 푸시 알림을 위한 URL을 요청하는 방법을 제공합니다.

이 인터페이스는 {{domxref("ServiceWorkerRegistration.pushManager")}} 속성을 통해 접근할 수 있습니다.

## 정적 속성

- [`PushManager.supportedContentEncodings`](/ko/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : 푸시 메시지의 페이로드를 암호화하는 데 사용 가능한 지원되는 콘텐츠 인코딩 배열을 반환합니다.

## 인스턴스 메서드

- {{domxref("PushManager.getSubscription()")}}
  - : 기존 푸시 구독을 검색합니다. 기존 구독의 세부 정보가 포함된 {{domxref("PushSubscription")}} 객체로 이행되는 {{jsxref("Promise")}}를 반환합니다. 기존 구독이 존재하지 않으면 `null` 값으로 이행됩니다.
- {{domxref("PushManager.permissionState()")}}
  - : 현재 {{domxref("PushManager")}}의 권한 상태인 `'granted'`, `'denied'`, `'prompt'` 중 하나로 이행되는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("PushManager.subscribe()")}}
  - : 푸시 서비스를 구독합니다. 푸시 구독의 세부 정보가 포함된 {{domxref("PushSubscription")}} 객체로 이행되는 {{jsxref("Promise")}}를 반환합니다. 현재 서비스 워커에 기존 구독이 없는 경우 새로운 푸시 구독이 생성됩니다.

### 사용 중단된 메서드

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 요청하는 웹앱의 `PushPermissionStatus`인 `granted`, `denied`, `default` 중 하나로 이행되는 {{jsxref("Promise")}}를 반환합니다. {{domxref("PushManager.permissionState()")}}로 대체되었습니다.
- {{domxref("PushManager.register()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 푸시 구독을 구독합니다. {{domxref("PushManager.subscribe()")}}로 대체되었습니다.
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 기존 푸시 구독을 검색합니다. {{domxref("PushManager.getSubscription()")}}으로 대체되었습니다.
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 지정된 구독 엔드포인트를 등록 취소하고 삭제합니다. 갱신된 API에서 구독은 {{domxref("PushSubscription.unsubscribe()")}} 메서드 호출에 의해 등록 취소됩니다.

## 예제

```js
this.onpush = (event) => {
  console.log(event.data);
  // 여기서 우리는 데이터를 IndexedDB에 쓸 수 있고, 열린 창으로 전송하고,
  // 알림을 표시하는 등의 작업을 할 수 있습니다.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // 이제 애플리케이션 서버에 필요한 푸시 구독
        // 세부 정보를 사용할 수 있습니다.
        // 예를 들어 fetch() API를 사용하여 서버로 전송할 수 있습니다.
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Push API](/ko/docs/Web/API/Push_API)
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
