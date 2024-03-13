---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 인터페이스의 **`active`** 속성은 {{domxref("ServiceWorker.state")}} 가 `activating` 또는 `activated` 상태인 서비스 워커를 반환한다. 이 속성은 `null` 로 초기 설정되어 있다.

클라이언트들의 URL이 등록 scope 내에 있을 경우 active 워커는 {{domxref("ServiceWorkerClient")}} 를 제어한다. ({{domxref("ServiceWorkerContainer.register")}} 가 처음으로 호출될 때 그 `scope` 옵션은 정의된다.)

> **참고:** 이 기능은 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 에서 사용 가능하다.

## Syntax

```js
sw = ServiceWorker.active;
```

### Value

현재 `activating` 또는 `activated` 상태에 있다면, {{domxref("ServiceWorker")}} 객체.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ko/docs/Web/Guide/Performance/Using_web_workers)
