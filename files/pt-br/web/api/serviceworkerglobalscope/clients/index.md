---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using Service Workers](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)
