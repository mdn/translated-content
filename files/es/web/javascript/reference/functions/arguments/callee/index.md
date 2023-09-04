---
title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}

## Resumen

Especifica la función que se está ejecutando actualmente.

## Descripción

`callee` es una propiedad de la variable local `arguments` disponible dentro de todos los objetos function; `callee` como una propiedad de {{jsxref("Funciones/arguments", "Function.arguments")}} ya no se utiliza. (`Function.arguments` en sí mismo está también desaconsejado.)

`arguments.callee` permite a funciones anónimas referirse a ellas mismas, lo cual es necesario en funciones anónimas recursivas.

La palabra clave `this` no se refiere a la función que se ejecuta actualmente. Use la propiedad `callee` para referirse a la función dentro del cuerpo de la función.

## Ejemplos

### Ejemplo: Usando `arguments.callee` en funciones anónimas recursivas

Una función recursiva debe ser capaz de referirse a sí misma. Típicamente, una función se refiere a sí misma por su nombre. Sin embargo, una función anónima no tiene nombre y por tanto es una variable de referencia para ella, es decir, si la función no está asignada a ninguna variable, la función no puede referirse a sí misma. (Se pueden crear funciones anónimas mediante una expresión {{jsxref("Operadores/function", "function")}} o el constructor {{jsxref("Function")}}.) Aquí es donde entra `arguments.callee`.

El siguiente ejemplo define una función, la cuál, en cada turno, define y devuelve una función factorial.

```js
function makeFactorialFunc() {
  alert("making a factorial function!");
  return function (x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x - 1);
  };
}

var result = makeFactorialFunc()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

this example isn't very practical, but then again, there are few practical cases where arguments.callee is necessary, and most of the those cases involve closures
