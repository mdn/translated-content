---
title: URL.hostname
slug: Web/API/URL/hostname
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.hostname
---

{{ApiRef("URL API")}}

A propriedade **`hostname`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} contendo o {{glossary("domain name")}} da URL.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplo

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname"
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
