---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

O método **`window.requestIdleCallback()`** enfileira uma função para ser executado durante períodos onde o navegador está ocioso. Isso permite que desenvolvedores realizem tarefas de baixa prioridade em relação a o event loop em segundo plano. As funções são geralmente chamadas na ordem first-in-first-out (primeiro-a-entrar-primeiro-a-sair); Contudo, callbacks nos quais tem um timeout especificado, podem ser chamados na ordem out-of-order (fora-de-ordem) se necessário, afim de executar antes do tempo limite.

Você pode chamar `requestIdleCallback()` com uma função callback ociosa para agendar outro callback para ter lugar não antes da próxima passagem pelo event loop.

> **Nota:** Um `timeout` é altamento recomendado, caso contrário, é possível que vários segundos passem antes que a função callback seja chamada.

## Syntax

```
var handle = window.requestIdleCallback(callback[, options])
```

### Return value

An ID which can be used to cancel the callback by passing it into the {{domxref("window.cancelIdleCallback()")}} method.

### Parameters

- `callback`
  - : A reference to a function that should be called in the near future, when the event loop is idle. The callback function is passed an {{domxref("IdleDeadline")}} object describing the amount of time available and whether or not the callback has been run because the timeout period expired.
- `options` {{optional_inline}}

  - : Contains optional configuration parameters. Currently only one property is defined:

    - `timeout`: If `timeout` is specified and has a positive value, and the callback has not already been called by the time _timeout_ milliseconds have passed, the callback will be called during the next idle period, even if doing so risks causing a negative performance impact.

## Example

See our [complete example](/pt-BR/docs/Web/API/Background_Tasks_API#Example) in the article [Cooperative Scheduling of Background Tasks API](/pt-BR/docs/Web/API/Background_Tasks_API).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
