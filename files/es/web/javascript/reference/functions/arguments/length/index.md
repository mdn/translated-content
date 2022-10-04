---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - Funciones
  - JavaScript
  - Propiedades
  - argumentos
translation_of: Web/JavaScript/Reference/Functions/arguments/length
original_slug: Web/JavaScript/Referencia/Funciones/arguments/length
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

| Especificación                                                                                                   | Estado                       | Comentario                                         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}     | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidad con los navegadores

{{Compat("javascript.functions.arguments.length")}}

## Véase también

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
