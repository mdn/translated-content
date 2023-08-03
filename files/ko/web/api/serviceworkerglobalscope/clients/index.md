---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} 인터페이스의 **`clients`** 읽기 전용 속성은 서비스 워커와 관련된 [`Clients`](/ko/docs/Web/API/Clients) 객체를 반환한다.

## Syntax

```js
swClients = self.clients;
```

### Value

특정한 워커와 관련된 {{domxref("Clients")}} 객체.

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
