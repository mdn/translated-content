---
title: URL.port
slug: Web/API/URL/port
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
  - port
browser-compat: api.URL.port
---

{{ApiRef("URL API")}}

A propriedade **`port`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} contendo o número da porta da URL. Se na URL não contém explicitamente o número da porta, ela será setada como `''`

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL("https://mydomain.com:80/svn/Repos/");
console.log(url.port); // Logs '80'
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
