---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

The **`active`** property of the {{domxref("ServiceWorkerRegistration")}} interface returns a service worker whose {{domxref("ServiceWorker.state")}} is `activating` or `activated`. This property is initially set to `null`.

An active worker controls a {{domxref("ServiceWorkerClient")}} if the client's URL falls within the scope of the registration (the `scope` option set when {{domxref("ServiceWorkerContainer.register")}} is first called.)

> **备注：** This feature is available in [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## Syntax

```
sw = ServiceWorker.active
```

### Value

A {{domxref("ServiceWorker")}} object, if it is currently in an `activating` or `activated` state.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
