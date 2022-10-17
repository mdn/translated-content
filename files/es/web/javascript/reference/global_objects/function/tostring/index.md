---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Function/toString
---
{{JSRef}}

El método **`toString()`** retorna una cadena representando el código fuente de la función.

## Sintaxis

```
function.toString(indentation)
```

### Parámetros

- `indentation` {{non-standard_inline}} {{obsolete_inline(17)}}
  - : La cantidad de espacios a indentar en la representación de cadena del código fuente. Si `indentation` es menor o igual a `-1`, la mayoría de los espacios innecesarios son eliminados.

## Descripción

El objeto {{jsxref("Function")}} reconduce el método {{jsxref("Object.prototype.toString", "toString")}} heredado de {{jsxref("Object")}}; no hereda {{jsxref("Object.prototype.toString")}}. Para objetos {{jsxref("Function")}}, el método `toString` retorna una representación de cadena del objeto en forma de declaración de función. Esto es, `toString` descompila la función y la cadena retornada incluye la palabra clave `function`, la lista de argumentos, llaves y el código fuente del cuerpo de la función.

JavaScript llama al método `toString` automáticamente cuando una {{jsxref("Function")}} va a ser representada como un valor de texto, p.e. cuando una función es concatenada con un valor de cadena (string).

El método `toString()` producirá una excepción {{jsxref("TypeError")}} ("Function.prototype.toString called on incompatible object"), si el valor de su objeto `this` no es un objeto `Function`. Esto también ocurrirá para objetos {{jsxref("Proxy")}}, por ejemplo:

```js example-bad
Function.prototype.toString.call("foo"); // TypeError

var proxy = new Proxy(function() {}, {});
Function.prototype.toString.call(proxy); // TypeError
```

## Especificaciones

| Especificación                                                                                                           | Estado                       | Observaciones                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                 | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.1.                       |
| {{SpecName('ES5.1', '#sec-15.3.4.2', 'Function.prototype.toString')}}                             | {{Spec2('ES5.1')}}     |                                                                           |
| {{SpecName('ES6', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}     | {{Spec2('ES6')}}         | Añadidos requerimientos más específicos para la representación de cadena. |
| {{SpecName('ESDraft', '#sec-function.prototype.tostring', 'Function.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                                           |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Function.toString")}}

## Notas específicas para Gecko

- Desde Gecko 17.0 {{geckoRelease("17")}}, `Function.prototype.toString()` fue implementada salvando el código fuente de la función. El descompilador fue eliminado, de modo que el parámetro `indentation` ya no se necesita más. Ver {{bug("761723")}} para más detalles.
- A partir de Gecko 38 {{geckoRelease("38")}}, `Function.prototype.toString()` produce error para objetos {{jsxref("Proxy")}} ({{bug(1100936)}}).

## Ver también

- {{jsxref("Object.prototype.toString()")}}
