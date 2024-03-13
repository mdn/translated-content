---
title: URL.search
slug: Web/API/URL/search
---

{{ApiRef("URL API")}}

A propriedade **`search`** da interface {{domxref("URL")}} é uma string de pesquisa, também chamada de _query string_, ela é uma {{domxref("USVString")}} contendo uma `'?'` seguido pelos parâmetros da URL.

Navegadores modernos fornecem a propriedade {{domxref("URL.searchParams")}} para facilitar a análise de parâmetros da query string.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
