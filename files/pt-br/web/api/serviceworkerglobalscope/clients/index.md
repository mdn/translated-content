---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
tags:
  - API
  - Clients
  - Service Worker
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - ServiceWorkers
translation_of: Web/API/ServiceWorkerGlobalScope/clients
---
{{APIRef("Service Workers API")}}

A propriedade somente-leitura **`clients`** da interface {{domxref("ServiceWorkerGlobalScope")}} retorna os objetos dos [`Clients`](/pt-BR/docs/Web/API/Clients) associatos ao _service worker_.

## Sintaxe

```
swClients = self.clients
```

### Valor

O objeto {{domxref("Clients")}} associado ao _service worker_ específico.

## Especificações

| Specification                                                                                                                                    | Status                               | Comment             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-clients', 'ServiceWorkerRegistration.clients')}} | {{Spec2('Service Workers')}} | Initial definition. |

## Compatibilidade

{{Compat("api.ServiceWorkerGlobalScope.clients")}}

## Veja também

- [Using Service Workers](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)
