---
title: "PushSubscription: toJSON() 메서드"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("PushSubscription")}} 인터페이스의 `toJSON()` 메서드는
표준 직렬 변환기입니다. 구독 속성의 JSON 표현을 반환하여
유용한 단축 방법을 제공합니다.

## 구문

```js-nolint
toJSON()
```

### 매개변수

없음.

### 반환 값

JSON 객체. 이 객체는 구독 엔드포인트, `expirationTime` 그리고 공개 키를 포함하며,
각각은 `endpoint` 멤버, `expirationTime` 멤버, `keys` 멤버입니다.

## 예제

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const mySubscription = subscription.toJSON();
    // 구독 세부 정보로 무언가 하기
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
