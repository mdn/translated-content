---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---

{{jsSidebar("Objects")}}

O método **`decodeURIComponent()`** decodifica um componente Identificador Uniforme de Recursos (URI) criado anteriormente por um {{jsxref("encodeURIComponent")}} ou por uma rotina semelhante.

## Sintaxe

```
decodeURIComponent(encodedURI)
```

### Parâmetros

- `encodedURI`
  - : Um componente codificado de um Identificador Uniforme de Recursos.

## Descrição

Substitui cada sequência escapada no componente URI codificado com o caractere que a representa.

## Exemplos

### Decodificando um componente URL Cirílico

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Especificações

| Especificação                                                                            | Status             | Comentário        |
| ---------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| {{SpecName('ES3')}}                                                                      | {{Spec2('ES3')}}   | Definição inicial |
| {{SpecName('ES5.1', '#sec-15.1.3.2', 'decodeURIComponent')}}                             | {{Spec2('ES5.1')}} |                   |
| {{SpecName('ES6', '#sec-decodeuricomponent-encodeduricomponent', 'decodeURIComponent')}} | {{Spec2('ES6')}}   |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.decodeURIComponent")}}

## Veja também

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
