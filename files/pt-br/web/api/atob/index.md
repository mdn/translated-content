---
title: WindowBase64.atob()
slug: Web/API/atob
original_slug: Web/API/WindowOrWorkerGlobalScope/atob
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

| Especificação                                                                                        | Status                           | Comentário                                                                                                           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-windowbase64-atob', 'WindowBase64.atob()')}} | {{Spec2('HTML WHATWG')}} | Nenhuma mudança desde a última versão, {{SpecName("HTML5.1")}}.                                             |
| {{SpecName('HTML5.1', '#dom-windowbase64-atob', 'WindowBase64.atob()')}}     | {{Spec2('HTML5.1')}}     | Versão de {{SpecName("HTML WHATWG")}}. Nenhuma mudança.                                                     |
| {{SpecName("HTML5 W3C", "#dom-windowbase64-atob", "WindowBase64.atob()")}} | {{Spec2('HTML5 W3C')}}     | Versão de {{SpecName("HTML WHATWG")}}. Criação do `WindowBase64` (antes as propriedades ficavam no target). |

## Compatibilidade com navegadores

{{Compat}}

\[1] `atob()` também está disponível para os componentes do XPCOM implementado em JavaScript, porém o objeto [`window`](/pt-BR/docs/Web/API/Window) não é global nos componentes.

\[2] A partir do [Firefox 27](/pt-BR/Firefox/Releases/27/Site_Compatibility), `atob()` ignora todos os caracteres de espaço no argumento para seguir as últimas especificações do HTML5. ([Erro do Firefox 711180](https://bugzil.la/711180))

## Veja também

- [Base64 encoding and decoding](/pt-BR/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/pt-BR/docs/data_URIs)
- {{domxref("WindowBase64.btoa","window.btoa()")}}
- [Components.utils.importGlobalProperties](/pt-BR/docs/Components.utils.importGlobalProperties)
