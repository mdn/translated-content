---
title: WindowBase64.atob()
slug: Web/API/atob
---

{{APIRef("HTML DOM")}}

A função **`WindowBase64.atob()`** decodifica uma string de dados que foi codificada através da codificação base-64. Você pode usar o método {{domxref("WindowBase64.btoa","window.btoa()")}} para codificar e transmitir dados que, se não codificados, podem causar problemas de comunicação. Após transmití-los pode-se usar o método `window.atob()` para decodificar os dados novamente. Por exemplo, você pode codificar, transmitir, e decodificar caracteres de controle como valores ASCII de 0 a 31.

Para utilizar com strings Unicode ou UTF-8, veja [esta nota em _Base64 encoding and decoding_](/pt-BR/docs/Web/JavaScript/Base64_encoding_and_decoding#The_.22Unicode_Problem.22) e [essa nota em `window.btoa()`](/pt-BR/docs/Web/API/window.btoa#Unicode_Strings).

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

- [Base64 encoding and decoding](/pt-BR/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/pt-BR/docs/data_URIs)
- {{domxref("WindowBase64.btoa","window.btoa()")}}
- [Components.utils.importGlobalProperties](/pt-BR/docs/Components.utils.importGlobalProperties)
