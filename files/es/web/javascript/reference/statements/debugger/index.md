---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
tags:
  - JavaScript
  - Sentencia
translation_of: Web/JavaScript/Reference/Statements/debugger
original_slug: Web/JavaScript/Referencia/Sentencias/debugger
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

[![Paused at a debugger statement.](https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png)](<https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png>)

## Especificaciones

| Specification                                                                                    | Status                       | Comment                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------- |
| {{SpecName('ESDraft', '#sec-debugger-statement', 'Debugger statement')}} | {{Spec2('ESDraft')}} |                                        |
| {{SpecName('ES6', '#sec-debugger-statement', 'Debugger statement')}}     | {{Spec2('ES6')}}         |                                        |
| {{SpecName('ES5.1', '#sec-12.15', 'Debugger statement')}}                     | {{Spec2('ES5.1')}}     | Definición inicial                     |
| {{SpecName('ES3', '#sec-7.5.3', 'Debugger statement')}}                         | {{Spec2('ES3')}}         |                                        |
| {{SpecName('ES1', '#sec-7.4.3', 'Debugger statement')}}                         | {{Spec2('ES1')}}         | Solo mencionada como palabra reservada |

## Compatibilidad con navegadores

{{Compat("javascript.statements.debugger")}}

## Vea también

- [Debugging JavaScript](/es/docs/Debugging_JavaScript)
- [The Debugger in the Firefox Developer Tools](/es/docs/Tools/Debugger)
