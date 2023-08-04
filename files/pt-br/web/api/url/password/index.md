---
title: URL.password
slug: Web/API/URL/password
---

{{ApiRef("URL API")}}

A propriedade **`password`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} que contém a senha especificada antes do nome do domínio.

Se for definido primeiramente sem a propriedade {{domxref("URL.username", "username")}}, ele irá falhar silenciosamente.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/pt-BR/docs/Web/API/URL/password",
);
console.log(url.password); // Logs "flabada"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
