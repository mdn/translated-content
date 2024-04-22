---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{jsSidebar("Objects")}}A função obsoleta `escape() retorna uma nova string com` certos caracteres substituídos por sua sequência hexadecial. Use {{jsxref("encodeURI")}} ou {{jsxref("encodeURIComponent")}} em seu lugar.

## Sintaxe

```
escape(str)
```

### Parâmetros

- `str`
  - : Uma string para ser codificada.

## Descrição

A função **`escape`** é uma propriedade do _global object_. Caracteres especiais são codificados, com a exceção de: `@*_+-./`

O formato hexadecimal de caracteres, que o valor unitário do código é **0xFF or less,** é uma sequência de escape de 2 digitos: %xx. Para caracteres com um código unitário maior, uma sequência de 4 digitos %**u**xxxx é usada.

## Exemplos

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// Caracteres Especiais
escape("@*_+-./"); // "@*_+-./"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
