---
title: URL.pathname
slug: Web/API/URL/pathname
---

{{ApiRef("URL API")}}

A propriedade **`pathname`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} qeu contém uma inicial `'/'` seguido pelo caminho da URL não incluindo a query string ou fragmento (ou a string vazia se não houver caminho).

O caminho da URL é uma sequência de segmentos delimitada por `/`, que pode ser um de `.`, `..` ou uma string com zero ou mais caracteres excluindo `/`, `?` e `#` .

Alguns sistemas definem o termo _slug_ para significar o segmento final de um caminho não vazio se ele identificar uma página em palavras-chave legíveis. Por exemplo, o URL `https://example.org/articles/this-that-other-outre-collection` tem `this-that-other-outre-collection` como seu slug.

Alguns sistemas usam os caracteres `;` e `=` para delimitar parâmetros e valores de parâmetros aplicáveis a um segmento de caminho. Por exemplo, com a URL `https://example.org/users;id=42/tasks;state=open?sort=modified`, um sistema pode extrair e usar os parâmetros de segmento de caminho `id=42` e `state=open` dos segmentos de caminho `users;id=42` e `tasks;state=open`.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/pt-BR/docs/Web/API/URL/pathname"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
