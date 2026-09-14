---
title: URL.hostname
slug: Web/API/URL/hostname
---

{{ApiRef("URL API")}}

A propriedade **`hostname`** da interface {{domxref("URL")}} é uma {{jsxref("String")}} contendo o {{glossary("domain name")}} da URL.

{{AvailableInWorkers}}

## Valor

Uma {{jsxref("String")}}.

## Exemplo

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
