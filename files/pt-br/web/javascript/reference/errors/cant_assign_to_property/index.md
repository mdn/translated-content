---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

A exceção do modo strict do Javascript "can't assign to property" ocorre quando é feita
a tentativa de criar uma propriedade em um valor [primitivo](/pt-BR/docs/Glossary/Primitive)
como um [symbol](/pt-BR/docs/Glossary/Symbol), uma [string](/pt-BR/docs/Glossary/String), um [number](/pt-BR/docs/Glossary/Number) ou um [boolean](/pt-BR/docs/Glossary/Boolean). 
Valores [primitivos](/pt-BR/docs/Glossary/Primitive) nâo podem ter nenhuma [propriedade](/pt-BR/docs/Glossary/property/JavaScript).

## Mensagem

```js
TypeError: can't assign to property "x" on {y}: not an object (Firefox)
TypeError: Cannot create property 'x' on {y} (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}}.

## O que deu errado?

No {{jsxref("Strict_mode")}}, um {{jsxref("TypeError")}} é gerado quando é feita a tentativa de
criar uma propriedade em um valor [primitivo](/pt-BR/docs/Glossary/Primitive) como
um [symbol](/pt-BR/docs/Glossary/Symbol), uma [string](/pt-BR/docs/Glossary/String), um [number](/pt-BR/docs/Glossary/Number) ou um [boolean](/pt-BR/docs/Glossary/Boolean).
Valores [primitivos](/pt-BR/docs/Glossary/Primitive) não podem ter nenhuma [propriedade](/pt-BR/docs/Glossary/property/JavaScript).

O problema pode ser que um valor inesperado está em um lugar inesperado, ou
que uma variante de objeto de uma {{jsxref("String")}} ou um {{jsxref("Number")}} é esperado.

## Exemplos

### Casos inválidos

```js example-bad
'use strict';

var foo = "minha string";
// A linha a seguir não faz nada se não estiver em modo strict.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Corrigindo o problema

Corrija o código para evitar que um [primitivo](/pt-BR/docs/Glossary/Primitive) seja usado em tais lugares, ou corrija o problema criando o objeto homólogo {{jsxref("Object")}}.

```js example-good
'use strict';

var foo = new String("minha string");
foo.bar = {};
```

## Veja também

- {{jsxref("Strict_mode")}}
- [Primitivo](/pt-BR/docs/Glossary/Primitive)
