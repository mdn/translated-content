---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Function/toString
---

{{JSRef}}

El método **`toString()`** retorna una cadena representando el código fuente de la función.

## Sintaxis

```
function.toString(indentation)
```

### Parámetros

- `indentation` {{non-standard_inline}} {{deprecated_inline(17)}}
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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Function.toString")}}

## Notas específicas para Gecko

- Desde Gecko 17.0 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14), `Function.prototype.toString()` fue implementada salvando el código fuente de la función. El descompilador fue eliminado, de modo que el parámetro `indentation` ya no se necesita más. Ver {{bug("761723")}} para más detalles.
- A partir de Gecko 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35), `Function.prototype.toString()` produce error para objetos {{jsxref("Proxy")}} ({{bug(1100936)}}).

## Ver también

- {{jsxref("Object.prototype.toString()")}}
