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

| Especificação                                           | Status               | Comentário                                                                                     |
| ------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                     | {{Spec2('ES1')}}     | Definição inicial.                                                                             |
| {{SpecName('ES5.1', '#sec-B.2.1', 'escape')}}           | {{Spec2('ES5.1')}}   | Definido no (informativo) de compatibilidade Anexo B                                           |
| {{SpecName('ES6', '#sec-escape-string', 'escape')}}     | {{Spec2('ES6')}}     | Definido no (normativo) Anexo B para recursos adicionais do ECMAScript para navegadores da web |
| {{SpecName('ESDraft', '#sec-escape-string', 'escape')}} | {{Spec2('ESDraft')}} | Definido no (normativa) Anexo B para recursos adicionais do ECMAScript para navegadores da web |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.escape")}}

## Veja Também

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
