---
title: URL.username
slug: Web/API/URL/username
---

{{ApiRef("URL API")}}

A propriedade **`username`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} contendo o nome de usuário especificado antes do nome do domínio.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/pt-BR/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
