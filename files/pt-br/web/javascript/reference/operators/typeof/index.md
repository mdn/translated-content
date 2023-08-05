---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

{{jsSidebar("Operators")}}

## Sumário

O operador `typeof` retorna uma string indicando o tipo de um operando.

## Sintaxe

O operador `typeof` pode ser utilizado das seguintes maneiras:

```
typeof operando
```

### Parâmetros

`operand`o é a string, variável, keyword, ou objeto para que o tipo do mesmo seja retornado. O uso de parênteses é opcional.

## Descrição

Esta tabela resume os possíveis valores que são retornados pelo `typeof`:

| Tipo                                                      | Resultado                  |
| --------------------------------------------------------- | -------------------------- |
| Undefined                                                 | `"undefined"`              |
| Null                                                      | `"object"`                 |
| Boolean                                                   | `"boolean"`                |
| Number                                                    | `"number"`                 |
| String                                                    | `"string"`                 |
| Host object (provided by the JS environment)              | _Implementation-dependent_ |
| Function object (implements \[\[Call]] in ECMA-262 terms) | `"function"`               |
| E4X XML object                                            | "xml"                      |
| E4X XMLList object                                        | "xml"                      |
| Qualquer outro objeto                                     | `"object"`                 |

## Exemplos

### Casos comuns

```js
// Números - Numéricos
typeof 37 === "number";
typeof 3.14 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Apesar de ser "Não-Numérico"
typeof Number(1) === "number"; // mas nunca utilize desta forma!

// Strings - Seqüências de caracteres
typeof "" === "string";
typeof "bla" === "string";
typeof typeof 1 === "string"; // typeof sempre retorna uma string
typeof String("abc") === "string"; // mas nunca utilize desta forma!

// Booleans - Lógicos booleanos
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(true) === "boolean"; // mas nunca utilize desta forma!

// Undefined - Indefinidos
typeof undefined === "undefined";
typeof blabla === "undefined"; // uma variável indefinida

// Objetos
typeof { a: 1 } === "object";
typeof [1, 2, 4] === "object"; // use Array.isArray ou Object.prototype.toString.call para diferenciar os objetos das arrays
typeof new Date() === "object";

typeof new Boolean(true) === "object"; // isto é confuso, portanto não use desta forma!
typeof new Number(1) === "object"; // isto é confuso, portanto não use desta forma!
typeof new String("abc") === "object"; // isso também é confuso, assim evite usar esta construção!

// Funções
typeof function () {} === "function";
typeof Math.sin === "function";
```

### `null`

```js
// Desde os primóridos do JavaScript
typeof null === "object";
```

Na primeira implementação do JavaScript, valores em JavaScript foram representados com uma tag (etiqueta) de tipo e um valor. A tag de tipo para objetos foi 0. `null` foi representada com o ponteiro NULL (0x00 na maioria das plataformas). Consequentemente, null teve 0 como sua tag de tipo, portanto o `typeof` retorna esse valor. (necessário referência)

Está previsto [para ser corrigido na próxima versão do ECMAScript](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null) (que estará disponível através de um opt-in). Isso resultará em um `typeof null === 'null'`.

### Expressões regulares

Expressões regulares que podem ser chamadas foram uma adição não-padrão em alguns browsers (necessidade de referência para dizer qual).

```js
typeof /s/ === "function"; // Chrome 1-12 ... // Não-conforme no ECMAScript 5.1
typeof /s/ === "object"; // Firefox 5+ ...    // Conforme no ECMAScript 5.1
```

### Outras peculiaridades

#### `alert` versões antigas do Internet Explorer

No IE 6, 7 e 8, `typeof alert === 'object'`

## Especificação

[ECMA-262 section 11.4.3](http://ecma-international.org/ecma-262/5.1/#sec-11.4.3)

## Veja também

- [instanceof](/pt-BR/docs/JavaScript/Reference/Operators/instanceof)
