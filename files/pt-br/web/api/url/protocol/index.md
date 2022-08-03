---
title: URL.protocol
slug: Web/API/URL/protocol
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.protocol
---

{{ApiRef("URL API")}}

A propriedade **`protocol`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} representando o esquema de protocolo da URL, incluindo o final `':'`.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol"
);
console.log(url.protocol); // Logs "https:"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
