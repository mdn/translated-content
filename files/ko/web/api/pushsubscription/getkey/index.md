---
title: "PushSubscription: getKey() 메서드"
short-title: getKey()
slug: Web/API/PushSubscription/getKey
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("PushSubscription")}} 인터페이스의 `getKey()` 메서드는
클라이언트 공개 키를 나타내는 {{jsxref("ArrayBuffer")}}를 반환하며,
이는 서버로 전송되어 푸시 메시지 데이터를 암호화하는 데 사용할 수 있습니다.

## 구문

```js-nolint
getKey(name)
```

### 매개변수

- `name`
  - : 클라이언트 키를 생성하는 데 사용되는 암호화 방식을 나타내는 문자열.
    값은 다음과 같습니다.
    - `p256dh`
      - : P-256 곡선(즉, NIST secp256r1 타원 곡선) 상의
        [타원 곡선 디피-헬만](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman) 공개 키.
        그 결과 키는 ANSI X9.62 형식의 압축되지 않은 점입니다.
    - `auth`
      - : [웹 푸시 메시지 암호화](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08)에서 인증 비밀.

### 반환 값

{{jsxref("ArrayBuffer")}} 또는 공개 키를 찾을 수 없는 경우 `null`.

## 예제

```js
reg.pushManager.getSubscription().then((subscription) => {
  // 푸시 메시지를 구독/구독 취소하는
  // 모든 UI를 사용할 수 있게 합니다.

  subBtn.disabled = false;

  if (!subscription) {
    console.log("Not yet subscribed to Push");
    // 푸시를 구독하지 않았으므로,
    // 사용자가 푸시를 활성화할 수 있도록 UI를 설정합니다
    return;
  }

  // 사용자가 푸시 메시지 구독한 것을 보여주기 위해
  // UI를 설정합니다
  subBtn.textContent = "Unsubscribe from Push Messaging";
  isPushEnabled = true;

  // 구독 상태에 대한 UI 요소 설정 및
  // 푸시를 통한 구독자 목록 갱신이 포함된 상태 초기화
  const endpoint = subscription.endpoint;
  const key = subscription.getKey("p256dh");
  const auth = subscription.getKey("auth");

  // ...
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
