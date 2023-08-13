---
title: 'SyntaxError: "x" is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
---

{{jsSidebar("Errors")}}

## Mensaje

```
Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
```

## Tipo de Error

{{jsxref("SyntaxError")}} warning in [strict mode](/es/docs/Web/JavaScript/Reference/Strict_mode) only.

## Que salio mal ?

Los literales decimales pueden comenzar con un cero (0) seguido de otro dígito decimal, pero Si todos los dígitos después del 0 inicial son más pequeños que 8, el número se interpreta como un número octal. Pero este no es el caso con 08 y 09, JavaScript advierte sobre ello.

Tenga en cuenta que las literales octales y las secuencias de escape octal están obsoletas y presentarán una advertencia de depreciación adicional. Con ECMAScript 6 y posteriores, la sintaxis utiliza un cero a la izquierda seguido de una letra latina en minúscula o mayúscula "O" (0o o 0O). Consulte la página sobre gramática léxica para obtener más información.

## Ejemplos

### Numeros octales invalidos

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated
```

### Números octales válidos

Utilice el cero inicialmente seguido de la letra "o";

```js-nolint example-good
0O755;
0o644;
```

## Ver Tambien

- [Gramatica lexica](/es/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
