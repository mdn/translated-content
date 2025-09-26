---
title: URL.port
slug: Web/API/URL/port
---

{{ApiRef("URL API")}}

A propriedade **`port`** da interface {{domxref("URL")}} é uma {{domxref("USVString")}} contendo o número da porta da URL.

> [!CALLOUT]
> se uma string de entrada passada para o construtor [`URL()`](/pt-BR/docs/Web/API/URL/URL) não contiver um número de porta explicitamente (por exemplo, `https://localhost`) ou contiver um número de porta que é o número de porta padrão correspondente à parte do protocolo da string de entrada (por exemplo, `https://localhost:443`), então no [`URL`](/pt-BR/docs/Web/API/URL) que o construtor retornar, o valor da propriedade port será a string vazia: `''`.

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
