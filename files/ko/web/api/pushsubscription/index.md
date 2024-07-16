---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

[Push API](/ko/docs/Web/API/Push_API)의 `PushSubscription` 인터페이스는 구독의 URL 엔드포인트를 제공하고 푸시 서비스에서 구독을 취소할 수 있게 합니다.

이 인터페이스의 인스턴스는 직렬화할 수 있습니다.

## 인스턴스 속성

- {{domxref("PushSubscription.endpoint")}} {{ReadOnlyInline}}
  - : 푸시 구독과 관련된 엔드포인트가 포함된 문자열.
- {{domxref("PushSubscription.expirationTime")}} {{ReadOnlyInline}}
  - : 푸시 구독과 관련된 구독 만료 시간이 있는 경우 {{domxref("DOMHighResTimeStamp")}}, 없는 경우 null입니다.
- {{domxref("PushSubscription.options")}} {{ReadOnlyInline}}
  - : 구독을 생성하는 데 사용된 옵션이 포함된 객체.
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : 푸시 구독과 관련된 구독 ID가 포함된 문자열.

## 인스턴스 메서드

- {{domxref("PushSubscription.getKey()")}}
  - : 클라이언트의 공개 키가 포함된 {{jsxref("ArrayBuffer")}}를 반환하며, 이 키는 서버에 전송되어 푸시 메시지 데이터를 암호화하는 데 사용할 수 있습니다.
- {{domxref("PushSubscription.toJSON()")}}
  - : 표준 직렬 변환기. 구독 속성의 JSON 표현을 반환합니다.
- {{domxref("PushSubscription.unsubscribe()")}}
  - : 푸시 서비스에서 구독을 취소하는 비동기 절차를 시작하고, 현재 구독이 성공적으로 등록 취소되면 불리언 값을 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 예제

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // 구독 취소 성공
      })
      .catch((e) => {
        // 구독 취소 실패
      });
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Push API](/ko/docs/Web/API/Push_API)
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
