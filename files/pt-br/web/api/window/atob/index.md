---
title: WindowBase64.atob()
slug: Web/API/Window/atob
original_slug: Web/API/atob
---

{{APIRef("HTML DOM")}}

A função **`WindowBase64.atob()`** decodifica uma string de dados que foi codificada através da codificação base-64. Você pode usar o método {{domxref("WindowBase64.btoa","window.btoa()")}} para codificar e transmitir dados que, se não codificados, podem causar problemas de comunicação. Após transmití-los pode-se usar o método `window.atob()` para decodificar os dados novamente. Por exemplo, você pode codificar, transmitir, e decodificar caracteres de controle como valores ASCII de 0 a 31.

Para utilizar com strings Unicode ou UTF-8, veja [esta nota em _Base64 encoding and decoding_](/pt-BR/docs/Glossary/Base64#the_.22unicode_problem.22) e [essa nota em `window.btoa()`](/pt-BR/docs/Web/API/Window/btoa#unicode_strings).

## Sintaxe

```
var dadoDecodificado = window.atob(dadoCodificado);
```

## Exemplo

```js
var dadoCodificado = window.btoa("Olá, mundo"); // codifica a string
var dadoDecodificado = window.atob(dadoCodificado); // decodifica a string
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Base64 encoding and decoding](/pt-BR/docs/Glossary/Base64)
- [`data` URIs](/pt-BR/docs/Web/URI/Schemes/data)
- {{domxref("WindowBase64.btoa","window.btoa()")}}
- [Components.utils.importGlobalProperties](/pt-BR/docs/Components.utils.importGlobalProperties)
