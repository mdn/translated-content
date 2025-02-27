---
title: PushEvent
slug: Web/API/PushEvent
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

[Push API](/ko/docs/Web/API/Push_API)의 **`PushEvent`** 인터페이스는 수신된 푸시 메시지를 나타냅니다. 이 이벤트는 {{domxref("ServiceWorker")}}의 [전역 범위](/ko/docs/Web/API/ServiceWorkerGlobalScope)로 전송됩니다. 애플리케이션 서버에서 {{domxref("PushSubscription")}}로 전송된 정보를 포함합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("PushEvent.PushEvent", "PushEvent()")}}
  - : 새로운 `PushEvent` 객체를 생성합니다.

## 인스턴스 속성

부모인 {{domxref("ExtendableEvent")}}에서 속성을 상속받습니다. 다음은 추가 속성입니다.

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : {{domxref("PushSubscription")}}으로 전송된 데이터를 포함하는 {{domxref("PushMessageData")}} 객체에 대한 참조를 반환합니다.

## 인스턴스 메서드

부모인 {{domxref("ExtendableEvent")}}에서 메서드를 상속받습니다.

## 예제

다음 예제는 `PushEvent`에서 데이터를 가져와 서비스 워커의 모든 클라이언트에 표시합니다.

```js
self.addEventListener("push", (event) => {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }

  const data = event.data?.json() ?? {};
  const title = data.title || "Something Has Happened";
  const message =
    data.message || "Here's something you might want to check out.";
  const icon = "images/new-notification.png";

  const notification = new self.Notification(title, {
    body: message,
    tag: "simple-push-demo-notification",
    icon,
  });

  notification.addEventListener("click", () => {
    clients.openWindow(
      "https://example.blog.com/2015/03/04/something-new.html",
    );
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
