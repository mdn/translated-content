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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
