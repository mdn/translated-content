---
title: function
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

## Resumen

El operador `function` define una función dentro de una expresión.

## Sintaxis

```
function [name]([param1, param2, ..., paramN]) {
   statements
}
```

## Parámetros

- `name`

  - : El nombre de la función. Puede ser omitido, en cuyo caso la función es _anonymous_. El nombre sólo es local para el cuerpo de la función.

- `paramN`

  - : El nombre de un argumento que será pasado a la función. Una función puede tener hasta 255 argumentos.

- `statements`
  - : Las declaraciones que conforman el cuerpo de la función.

## Descripción

La expresión de una función es muy similar y tiene casi la misma sintaxis que la declaración de una función (véase {{jsxref("Sentencias/function", "function")}} para más detalles). Véase [Funciones](/es/docs/Web/JavaScript/Referencia/Funciones) para ver más información sobre las diferencias entre declaraciones de funciones y expresiones de funciones.

## Ejemplos

El siguiente ejemplo define una función sin nombre y se le asigna a la variable x. La función devuelve como resultado el cuadrado de su argumento:

```js
var x = function (y) {
  return y * y;
};
```

### Expresión de función nombrada

Si quiere referirse a la función actual dentro del cuerpo de la función, debe crear una expresión de función nombrada. Luego, este nombre será local solo para el cuerpo de la función (alcance). Esto también evita usar la propiedad no estándar {{jsxref("Funciones/arguments/callee", "arguments.callee")}}.

```js
var math = {
  factorial: function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};
```

## Consulte también

- [Funciones](/es/docs/Web/JavaScript/Referencia/Funciones)
- {{jsxref("Function")}}
- Sentencias {{jsxref("Sentencias/function", "function")}}
