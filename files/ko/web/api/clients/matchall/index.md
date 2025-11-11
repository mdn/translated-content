---
title: "Clients: matchAll() 메서드"
short-title: matchAll()
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("Clients")}} 인터페이스의 **`matchAll()`** 메서드는
서비스 워커 {{domxref("Client")}} 객체의 목록을 {{jsxref("Promise")}}로 반환합니다.
`options` 매개변수를 포함하면 서비스 워커와 출처가 동일한 모든 서비스 워커 클라이언트를 반환할 수 있습니다.
옵션을 포함하지 않으면, 메서드는 서비스 워커가 제어하는 서비스 워커 클라이언트만 반환합니다.

## 구문

```js-nolint
matchAll()
matchAll(options)
```

### 매개변수

- `options` {{optional_inline}}
  - : 매칭 작업에 대한 옵션을 설정할 수 있는 옵션 객체. 사용 가능한 옵션은 다음과 같습니다.
    - `includeUncontrolled`
      - : 불리언 값.
        `true`로 설정하면, 현재 서비스 워커와 동일한 출처를 공유하는 모든 서비스 워커 클라이언트를 반환합니다.
        그렇지 않으면, 현재 서비스 워커가 제어하는 서비스 워커 클라이언트만 반환합니다.
        기본 값은 `false`입니다.
    - `type`
      - : 매칭하고자 하는 클라이언트 유형을 설정합니다. 사용 가능한 값은
        `"window"`, `"worker"`, `"sharedworker"`, `"all"`입니다.
        기본 값은 `"window"`입니다.

### 반환 값

{{domxref("Client")}} 객체 배열로 이행된 {{jsxref("Promise")}}.
Chrome 46/Firefox 54와 이후 버전에서, 이 메서드는 사양에 따라 가장 최근에 포커스된 순서대로 클라이언트를 반환합니다.

## 예제

```js
clients.matchAll(options).then((clientList) => {
  for (const client of clientList) {
    if (client.url === "index.html") {
      clients.openWindow(client);
      // 또는 일치하는 클라이언트와 관련된 다른 작업을 수행합니다.
    }
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
