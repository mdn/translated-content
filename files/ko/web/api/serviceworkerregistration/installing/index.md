---
title: ServiceWorkerRegistration.installing
slug: Web/API/ServiceWorkerRegistration/installing
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 인터페이스의 **`installing`** 속성은 {{domxref("ServiceWorker.state")}} 가 `installing` 인 서비스 워커를 반환한다. 이 속성은 `null` 로 초기 설정되어 있다.

> **참고:** 이 기능은 [Web Workers](/ko/docs/Web/API/Web_Workers_API) 에서 사용 가능하다.

## Syntax

```js
sw = ServiceWorker.installing;
```

### Value

현재 `installing` 상태에 있다면, {{domxref("ServiceWorker")}} 객체

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
