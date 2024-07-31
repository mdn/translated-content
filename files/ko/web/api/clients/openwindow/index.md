---
title: "Clients: openWindow() 메서드"
short-title: openWindow()
slug: Web/API/Clients/openWindow
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("Clients")}} 인터페이스의 **`openWindow()`** 메서드는
새로운 최상위 브라우징 맥락을 생성하고 주어진 URL을 로드합니다.
호출하는 스크립트에 팝업 표시 권한이 없는 경우, `openWindow()`는 `InvalidAccessError`를 발생시킵니다.

Firefox에서는 알림 클릭 이벤트의 결과로 호출된 경우에만 메서드가 팝업을 표시할 수 있습니다.

Android용 Chrome에서, 이 메서드는 사용자의 홈 화면에 이전에 추가된 [독립형 웹 앱](/ko/docs/Web/Progressive_web_apps)에서 제공하는 기존 브라우징 맥락에서 URL을 대신 열 수 있습니다.
최근부터 Windows용 Chrome에서도 이렇게 작동합니다.

## 구문

```js-nolint
openWindow(url)
```

### 매개변수

- `url`
  - : 창에서 열려는 클라이언트의 URL을 나타내는 문자열.
    일반적으로 이 값은 호출하는 스크립트와 동일한 출처의 URL이어야 합니다.

### 반환 값

서비스 워커와 동일한 출처의 URL이면 {{domxref("WindowClient")}} 객체로,
그렇지 않은 경우 {{Glossary("null", "null 값")}}으로 이행된 {{jsxref("Promise")}}.

### 예외

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 앱의 출처에 [임시 활성화](/ko/docs/Web/Security/User_activation)된 창이 없는 경우 이 예외로 프로미스가 거부됩니다.

## 보안 요구 사항

- 앱의 출처에 적어도 하나의 창은 [임시 활성화](/ko/docs/Web/Security/User_activation)되어 있어야 합니다.

## 예제

```js
// 해당되는 경우 OS에 알림 보내기
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Click here to view your messages.",
    data: { url: `${self.location.origin}/some/path` },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "You've got messages!",
    notificationObject,
  );
}

// 알림 클릭 이벤트 수신기
self.addEventListener("notificationclick", (e) => {
  // 알림 팝업 닫기
  e.notification.close();
  // 모든 Window 클라이언트 가져오기
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      // 타겟 URL과 일치하는 창이 이미 존재하는 경우, 해당 탭에 포커스
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // 그렇지 않은 경우, 해당 URL로 새로운 탭을 열고 포커스.
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    }),
  );
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
