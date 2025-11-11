---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que significa el error?

Se esperaba un constructor específico de JavaScript pero se recibió algo diferente. Puede ser un simple error de tipeo.

## Ejemplos

### Se espera expresión

Cuando se llama a una función, no se permiten comas al final de los argumentos. JavaScript espera un argumento que puede ser en realidad cualquier tipo de expresión.

```js-nolint example-bad
Math.max(2, 42,);
// SyntaxError: expected expression, got ')'
```

El error se corrije omitiendo la coma o agregando otro argumento:

```js example-good
Math.max(2, 42);
Math.max(2, 42, 13 + 37);
```

## See also

- {{jsxref("Math.max()")}}
