---
title: URL.protocol
slug: Web/API/URL/protocol
---

{{ApiRef("URL API")}}

A propriedade **`protocol`** da interface {{domxref("URL")}} é uma {{jsxref("String")}} representando o esquema de protocolo da URL, incluindo o final `':'`.

{{AvailableInWorkers}}

## Valor

Uma {{jsxref("String")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
