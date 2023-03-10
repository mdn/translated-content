---
title: URL.host
slug: Web/API/URL/host
---

{{ApiRef("URL API")}}

A propriedade **`host`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} contendo o host, que é o {{domxref("URL.hostname", "hostname")}}, e também, se o {{glossary("port")}} da URL não for vazia, o ':'`, seguido pelo {{domxref("URL.port", "port")}} da URL.

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplos

```js
let url = new URL("https://developer.mozilla.org/pt-BR/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/pt-BR/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// O número da porta não está incluso porque 443 é o esquema padrão de porta

url = new URL("https://developer.mozilla.org:4097/pt-BR/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
