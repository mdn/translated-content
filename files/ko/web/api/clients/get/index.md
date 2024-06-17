---
title: "Clients: get() 메서드"
short-title: get()
slug: Web/API/Clients/get
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("Clients")}} 인터페이스의 **`get()`** 메서드는 주어진 `id`와 일치하는 서비스 워커 클라이언트를 가져와 {{jsxref("Promise")}}로 반환합니다.

## 구문

```js-nolint
get(id)
```

### 매개변수

- `id`
  - : 가져오려고 하는 클라이언트의 아이디를 나타내는 문자열.

### 반환 값

{{domxref("Client")}} 객체나 `undefined`로 이행된 {{jsxref("Promise")}}.

## 예제

```js
self.clients.get(id).then((client) => {
  self.clients.openWindow(client.url);
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
