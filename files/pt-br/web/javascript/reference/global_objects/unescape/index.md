---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
---

{{jsSidebar("Objects")}}{{Deprecated_header}}A função **unescape()** obsolta computa uma nova string na qual as sequencias hexadecimal são esquecidas com o caractere que representa. As sequências de escape podem ser introduzidas como funções {{jsxref("escape")}}. Porque a função 'unescape' está obsoleta, ao invez disso, use {{jsxref("decodeURI")}} ou {{jsxref("decodeURIComponent")}}.

> **Nota:** Não use `unescape` para decodificar URIs, use `decodeURI` ao invez disso.

## Syntax

```
unescape(str)
```

### Parâmetros

- `str`
  - : Uma string a ser decodificada.

### Valor retornado

Uma nova string na qual alguns caracteres tem que ser 'unescaped'.

## Descrição

A função `unescape` é uma propriedade do objeto global.

## Exemplos

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Specifications

| Specification                                               | Status               | Comment                                                                               |
| ----------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------- |
| {{SpecName('ES1', '#sec-15.1.2.5', 'unescape')}}            | {{Spec2('ES1')}}     | Definição Inicial.                                                                    |
| {{SpecName('ES5.1', '#sec-B.2.2', 'unescape')}}             | {{Spec2('ES5.1')}}   | Definido na compatibilidade Annex B                                                   |
| {{SpecName('ES6', '#sec-unescape-string', 'unescape')}}     | {{Spec2('ES6')}}     | Difinito na (normativa) Annex B Para novidades adicionais do ECMAScript para browsers |
| {{SpecName('ESDraft', '#sec-unescape-string', 'unescape')}} | {{Spec2('ESDraft')}} | Difinito na (normativa) Annex B Para novidades adicionais do ECMAScript para browsers |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.unescape")}}

## Veja também

- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
