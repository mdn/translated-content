---
title: Resto (%)
slug: Web/JavaScript/Reference/Operators/Remainder
---

{{jsSidebar("Operators")}}

El operador resto (`%`) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

El código fuente para este ejemplo interactivo se encuentra en un repositorio de GitHub. Si quieres contribuir al proyecto de ejemplos interactivas, por favor clona <https://github.com/mdn/interactive-examples> y realiza un pull request.

Tener en cuenta que en la mayoría de los lenguajes de programación, el operador de resto es '%', pero en otros (como [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) es el operador módulo. Ambos son iguales para valores positivos, pero cuando el divisor y el dividendo son de signos distintos, se obtienen distintos resultados. Para obtener el módulo en JavaScript, en lugar de `a % n`, usa `((a % n ) + n ) % n`.

## Sintaxis

```
Operador: var1 % var2
```

## Ejemplos

### Resto con dividendo positivo

```js
12 % 5; //  2
1 % -2; //  1
1 % 2; //  1
2 % 3; //  2
5.5 % 2; // 1.5
```

### Resto con dividendo negativo

```js-nolint
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### Resto con NaN

```js
NaN % 2; // NaN
```

### Resto con Infinity

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Addition operator](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
