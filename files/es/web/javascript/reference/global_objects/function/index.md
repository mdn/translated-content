---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef("Objetos_globales", "Function")}}

Cada función de JavaScript en realidad es un objeto `Function`. Esto se puede ver con el código `(function() {}).constructor === Function`, que devuelve `true`.

## Constructor

- {{jsxref("Function/Function", "Function()", "", 1)}}
  - : Crea un nuevo objeto `Function`. Llamar al constructor directamente puede crear funciones dinámicamente, pero tiene problemas de seguridad y de rendimiento similares (pero mucho menos importantes) para {{jsxref("eval")}}. Sin embargo, a diferencia de `eval`, el constructor `Function` crea funciones que solo se ejecutan en el ámbito global.

## Propiedades de la instancia

- {{jsxref("Function.arguments")}}
  - : Un arreglo que corresponde a los argumentos pasados a una función.
    Esto está obsoleto como propiedad de {{jsxref("Function")}}. En su lugar, utiliza el objeto {{jsxref("Functions/arguments", "arguments", "", 1)}} (disponible dentro de la función).
- {{jsxref("Function.caller")}}
  - : Especifica la función que invocó a la función que se está ejecutando actualmente.
    Esta propiedad está obsoleta, y solo es funcional para algunas funciones no estrictas.
- {{jsxref("Function.displayName")}}
  - : El nombre a mostrar de la función.
- {{jsxref("Function.length")}}
  - : Especifica el número de argumentos que espera la función.
- {{jsxref("Function.name")}}
  - : El nombre de la función.

## Métodos de instancia

- {{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}
  - : Llama a una función y establece su `this` en el `thisArg` proporcionado. Los argumentos se pueden pasar como un objeto {{jsxref("Array")}}.
- {{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}
  - : Crea una nueva función que, cuando se llama, tiene su `this` configurado en el `thisArg`. Opcionalmente, una determinada secuencia de argumentos se antepondrá a los argumentos siempre que se llame a la función recién invocada.
- {{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}
  - : Llama a una función y establece su `this` en el valor proporcionado. Los argumentos se pueden pasar tal cual.
- {{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}
  - : Devuelve una cadena que representa el código fuente de la función.
    Redefine el método {{jsxref("Object.prototype.toString()")}}.

## Ejemplos

### Diferencia entre el constructor Function y la declaración function

Las funciones creadas con el constructor `Function` no crean cierres para sus contextos de creación; siempre se crean en el ámbito global. Al ejecutarlos, solo podrán acceder a sus propias variables locales y globales, no a las del ámbito en el que se creó el constructor `Function`. Esto es diferente de usar {{jsxref("eval")}} con código para una expresión de función.

```js
var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); // esta |x| se refiere a la |x| global
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // esta |x| se refiere a la |x| local
  }
  return f;
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
```

Si bien este código funciona en los navegadores web, `f1()` producirá un `ReferenceError` en Node.js, ya que no encontrará a `x`. Esto se debe a que el ámbito de nivel superior en Node no es el ámbito global, y `x` será local para el módulo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Functions", "Funciones y ámbito de la función", "", 1)}}
- Declaración {{jsxref("Statements/function", "function")}}
- Expresión {{jsxref("Operators/function", "function")}}
- Declaración {{jsxref("Statements/function*", "function*")}}
- Expresión {{jsxref("Operators/function*", "function*")}}
- {{jsxref("AsyncFunction", "Función asíncrona", "", 1)}}
- {{jsxref("GeneratorFunction", "Función generadora", "", 1)}}
