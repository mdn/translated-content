---
title: URL.searchParams
slug: Web/API/URL/searchParams
---

{{ApiRef("URL API")}}

A propriedade **`searchParams`** da interface {{domxref("URL")}} retorna um objeto {{domxref("URLSearchParams")}} permitindo acesso ao {{httpmethod("GET")}} decodificando os argumentos que contém na URL.

{{AvailableInWorkers}}

## Valor

Um objeto {{domxref("URLSearchParams")}}.

## Exemplos

Se a URl da sua página é
`https://example.com/?name=Jonathan%20Smith&age=18` você pode analisar os parâmetros `name` e `age` utilizando:

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // é a string "Jonathan Smith".
let age = parseInt(params.get("age")); // é o número 18
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}
