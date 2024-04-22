---
title: performance.now()
slug: Web/API/Performance/now
---

{{APIRef("High Resolution Timing")}}

O método **`performance.now()`** retorna {{domxref("DOMHighResTimeStamp")}}, medido em milisegundos, com precisão de cinco milésimos de milissegundo (5 microsegundos).

O valor retornado representa o tempo decorrido desde o **time origin** (the {{domxref("PerformanceTiming.navigationStart")}} property). Em um web worker, o tempo inicial é o momento em que o contexto da execução(e.g. thread ou processo) é criado. Em uma janela, é o tempo em que o usuário iniciou a navegação neste documento. Tenha em mente que:

- Em workers dedicados criados do {{domxref("Window")}}, o valor neste worker será inferior a `performance.now()` na window que gerou este worker. Normalmente é o mesmo que `t0` no contexto principal, mas esse valor foi alterado.
- Em shared workers ou service workers, o valor do worker pode ser maior em relação ao contexto principal poir estas janelas podem ser criadas depois destes workers.

## Sintaxe

```
t = performance.now();
```

## Exemplo

```js
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
```

Unlike other timing data available to JavaScript (for example [`Date.now`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Date/now)), the timestamps returned by `Performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also unlike `Date.now()`, the values returned by `Performance.now()` always increase at a constant rate, independent of the system clock (which might be adjusted manually or skewed by software like NTP). Otherwise, `performance.timing.navigationStart + performance.now()` will be approximately equal to `Date.now()`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) from HTML5 Rocks.
