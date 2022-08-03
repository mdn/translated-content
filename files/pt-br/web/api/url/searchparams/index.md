---
title: URLSearchParams
slug: Web/API/URLSearchParams
page-type: web-api-interface
tags:
  - API
  - Interface
  - Landing
  - Reference
  - URL API
  - URLSearchParams
  - Polyfill
browser-compat: api.URLSearchParams
---
{{ApiRef("URL API")}}

A interface *`URLSearchParams`** define métodos utilitários para trabalhar com os parâmetros de uma URL.

Um objeto que implementa `URLSearchParams` pode ser usado diretamente em uma estrutura {{jsxref("Statements/for...of", "for...of")}} para iterar sobre pares chave/valor na mesma ordem em que elas aparecem nos parâmetros, por exemplo as linhas a seguir são equivalentes:

```js
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
