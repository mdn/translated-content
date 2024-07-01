---
title: "Location: search"
slug: Web/API/Location/search
---

{{ApiRef("Location")}}

A propriedade **`search`** da interface {{domxref("Location")}} é um texto de busca, também chamado de _query string_ ou _querystring_; isso é, uma {{domxref("USVString")}} contendo um `'?'` seguido pelos parâmetros da URL.

Os navegadores modernos fornecem o [`URLSearchParams`](/pt-BR/docs/Web/API/URLSearchParams/get#Examples) e o [`URL.searchParams`](/pt-BR/docs/Web/API/URL/searchParams#Examples) para facilitar a análise dos parâmetros da querystring.

## Sintaxe

```
string = object.search;
object.search = string;
```

## Exemplos

```js
// Seleciona o elemento <a id="myAnchor" href="https://developer.mozilla.org/pt-BR/docs/Location.search?q=123">
var anchor = document.getElementById("myAnchor");
var queryString = anchor.search; // Retorna:'?q=123'

// Análise adicional:
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // é o número 123
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
