---
title: PushSubscriptionOptions
slug: Web/API/PushSubscriptionOptions
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{DefaultAPISidebar("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref('Push API','','',' ')}}의 **`PushSubscriptionOptions`** 인터페이스는 푸시 구독과 관련된 옵션을 나타냅니다.

읽기 전용 `PushSubscriptionOptions` 객체는 {{domxref("PushSubscription")}}의 {{domxref("PushSubscription.options")}}를 호출하면 반환됩니다.
이 인터페이스는 자체 생성자가 없습니다.

## 인스턴스 속성

- {{domxref("PushSubscriptionOptions.userVisibleOnly")}} {{ReadOnlyInline}}
  - : 반환된 푸시 구독이 사용자에게 보이는 메시지에만 사용됨을 나타내는 불리언 값.
- {{domxref("PushSubscriptionOptions.applicationServerKey")}} {{ReadOnlyInline}}
  - : 푸시 서버가 클라이언트 앱에 메시지를 보내는 데 사용할 공개키.

## 예제

{{domxref("PushSubscription")}}의 {{domxref("PushSubscription.options")}}를 호출하면 `PushSubscriptionOptions` 객체를 반환합니다. 아래 예제에서는 이 객체를 콘솔에 출력합니다.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const options = subscription.options;
    console.log(options); // PushSubscriptionOptions 객체
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
