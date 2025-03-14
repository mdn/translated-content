---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> La propiedad `arguments` de los objetos {{jsxref("Function")}} está en desuso. La forma recomendada de acceder al objeto `arguments` es hacer referencia a la variable {{jsxref("Functions/arguments", "arguments") }} disponible dentro de las funciones.

La propiedad de acceso **`arguments`** de instancias de {{jsxref("Function")}} devuelve los argumentos pasados ​​a esta función. Para las funciones [strict](/es/docs/Web/JavaScript/Reference/Strict_mode), flecha , asíncronas y generadoras, acceder a la propiedad `arguments` arroja un {{jsxref("TypeError")}}.

## Descripción

El valor de `arguments` es un objeto similar a un arreglo correspondiente a los argumentos pasados ​​a una función.

En el caso de recursividad, es decir, si la función `f` aparece varias veces en la pila de llamadas, el valor de `f.arguments` representa los argumentos correspondientes a la invocación más reciente de la función.

El valor de la propiedad `arguments` normalmente es {{jsxref("Operators/null", "null")}} si no hay una invocación pendiente de la función en progreso (es decir, la función ha sido llamada pero aún no ha devuelto).

Tenga en cuenta que el único comportamiento especificado por la especificación ECMAScript es que `Function.prototype` tiene un descriptor de acceso inicial `arguments` que arroja incondicionalmente un {{jsxref("TypeError")}} para cualquier solicitud `get` o `set` (conocida como _"poison pill accessor"_ -accesor de píldora envenenada-), y que las implementaciones no pueden cambiar esta semántica para ninguna función, excepto funciones simples no estrictas. El comportamiento real de la propiedad `arguments`, si es algo más que arrojar un error, es definido en la implementación Por ejemplo, Chrome lo define como una propiedad de datos propia, mientras que Firefox y Safari extienden el descriptor de acceso inicial `Function.prototype.arguments` de la píldora venenosa para manejar especialmente los valores `this` que son funciones no estrictas.

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments es una propiedad propia con descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f no tiene una propiedad propia llamada argumentos. Tratando de obtener f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// En Chrome:
// arguments es una propiedad propia con descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// En Firefox:
// f no tiene una propiedad propia llamada argumentos. Tratando de obtener f.[[Prototype]].arguments
// Arguments { … }
```

## Ejemplos

### Usando la propiedad arguments

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`antes: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`después: ${g.arguments[0]}`);
}

f(2);

console.log(`devuelto: ${g.arguments}`);

// Logs:
// antes: 1
// antes: 0
// después: 0
// después: 1
// devuelto: null
```

## Especificaciones

Not part of any standard.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Functions/arguments", "arguments")}}
- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
