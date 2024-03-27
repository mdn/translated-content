---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
---

{{JSRef}}

## Resumo

O método **`Date.now()`** retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.

## Sintaxe

```
var timeInMs = Date.now();
```

### Parâmetros

Nenhum.

## Descrição

O método **`now()`** retorna os milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC até agora como um {{jsxref("Global_Objects/Number", "Number")}}.

Por que **`now`** é um método estático de **`Date`**, você sempre o usará como **`Date.now()`**.

## Polyfill

Este método foi padronizado no ECMA-262 5th edition. Em ambientes que não estão atualizados para suportar este método você pode suprir esta carência utilizando o seguinte:

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("window.performance.now")}} - fornece timestamps com sub-millisegundo precisão para uso em medir o desempenho da página
- {{domxref("console.time")}} / {{domxref("console.timeEnd")}}
