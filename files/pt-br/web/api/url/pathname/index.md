---
title: URL.pathname
slug: Web/API/URL/pathname
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.pathname
---

{{ApiRef("URL API")}}

A propriedade **`pathname`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} qeu contém uma inicial `'/'` seguido pelo caminho da URL não incluindo a query string ou fragmento (ou a string vazia se não houver caminho).

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/pathname?q=value"
);
console.log(url.pathname); // Logs "/pt-BR/docs/Web/API/URL/pathname"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
