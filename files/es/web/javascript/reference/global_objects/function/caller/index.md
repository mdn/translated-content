---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef("Global_Objects", "Function")}} {{non-standard_header}}

## Resumen

La propiedad **`function.caller`** retorna la función que llamó a la función especificada.

## Descripción

Si la función `f` fue llamada por desde nivel raiz (top level code), el valor de `f.caller` es {{jsxref("Global_Objects/null", "null")}}, de lo contrario se retorna la función que llamó a `f`.

Esta propiedad reemplaza a la propiedad obsoleta {{jsxref("Functions_and_function_scope/arguments/caller", "arguments.caller")}} del objeto {{jsxref("Funciones/arguments", "arguments")}}.

la propiedad especial `__caller__`, la cual retornaba el objeto de activación del llamador y permitía reconstruir la pila de llamadas, ha sido removida por motivos de seguridad.

### Notas

En caso de recursión se puede reconstruir la pila de llamada utilizando esta propiedad, tal como se muestra a continuación:

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

Al momento de ejecutar `stop()` este se llama con la siguiente pila de llamadas:

```
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Siendo verdadero la siguiente consideración:

```
stop.caller === g && f.caller === g && g.caller === f
```

Por lo tanto si se intenta obtener el rastro de llamadas (stack trace) de la función `stop()` como se muestra a continuación:

```js
var f = stop;
var stack = "Stack trace:";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

se provocará una bucle que nunca termina.

## Ejemplos

### Ejemplo: Verificar el valor de la propiedad `caller` de una función

El siguiente código verifica el valor de la propiedad `caller` de una función.

```js
function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}
```

## Especificación

No es parte de ninguna especificación.

## Compatiblilidad de Navegadores

{{Compat}}

## Véase también

- Problema de implementación para SpiderMonkey [Error 65683 en Firefox](https://bugzil.la/65683)
