---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

La sentencia **debugger** invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.

## Sintaxis

```
debugger;
```

## Ejemplos

El siguiente ejemplo muestra un bloque de código donde ha sido insertada una sentencia debugger, para invocar el depurador (si existe) cuando la función es ejecutada.

```js
function codigoPotencialmenteDefectuoso() {
  debugger;
  // realizar paso a paso o examinar código que contiene
  // potenciales errores
}
```

Cuando el depurador es invocado, la ejecución se detiene en la sentencia debugger. Es como un punto de interrupción en el script.

![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Debugging JavaScript](/es/docs/Debugging_JavaScript)
- [The Debugger in the Firefox Developer Tools](/es/docs/Tools/Debugger)
