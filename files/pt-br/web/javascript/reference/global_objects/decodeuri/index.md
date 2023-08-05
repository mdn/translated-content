---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

A função **`decodeURI()`** decodifica um Uniform Resource Identifier (URI) criado anteriormente por {{jsxref("encodeURI", "encodeURI()")}} ou por uma rotina semelhante.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Sintaxe

```
decodeURI(encodedURI)
```

### Parâmetros

- `encodedURI`
  - : Um identificador de recurso uniforme codificado completo.

### Valor retornado

Uma nova string representando a versão não codificada do URI (Uniform Resource Identifier) codificado fornecido.

### Exceções

Lança uma exceção {{jsxref("URIError")}} ("sequência de URI malformada") quando o `encodedURI` contém sequências de caracteres inválidos.

## Descrição

Substitui cada sequência de escape no URI codificado pelo caractere que ele representa, mas não decodifica sequências de escape que não poderiam ter sido introduzidas por {{jsxref("encodeURI")}}. O caractere "`#`" não é decodificado a partir de sequência de escape.

## Exemplos

### Decodificando uma URL Cyrillic

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### Captura de erros

```
try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: sequência de URI malformada
```

## Especificações

| Specification                                                     | Status               | Comment            |
| ----------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES3')}}                                               | {{Spec2('ES3')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.1.3.1', 'decodeURI')}}               | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-decodeuri-encodeduri', 'decodeURI')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-decodeuri-encodeduri', 'decodeURI')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.decodeURI")}}

## Ver também

- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
