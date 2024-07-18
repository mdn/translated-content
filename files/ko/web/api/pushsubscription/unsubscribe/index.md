---
title: "PushSubscription: unsubscribe() 메서드"
short-title: unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("PushSubscription")}} 인터페이스의 `unsubscribe()` 메서드는
현재 구독이 성공적으로 구독 취소될 때 불리언 값으로 이행되는
{{jsxref("Promise")}}를 반환합니다.

## 구문

```js-nolint
unsubscribe()
```

### 매개변수

없음.

### 반환 값

현재 구독이 성공적으로 구독 취소될 때
불리언 값으로 이행되는 {{jsxref("Promise")}}.

## 예제

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // 성공적으로 구독을 취소했습니다
      })
      .catch((e) => {
        // 구독 취소에 실패했습니다
      });
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("PushManager.getSubscription")}}
