---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
---

{{jsSidebar("Functions")}}

La propiedad **`arguments.length`** contiene el número de argumentos pasados a una función.

## Sintaxis

```
arguments.length
```

## Descripción

La propiedad arguments.length devuelve el número total de argumentos pasados a una función. Esto puede ser más o menos que el número de parametros definidos. (Véase {{jsxref("Function.length")}}).

## Ejemplos

### Usando `arguments.length`

En este ejemplo definimos una función que puede sumar dos o más números.

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

> **Nota:** Tenga en cuenta la diferencia entre {{jsxref("Function.length")}} y arguments.length

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
