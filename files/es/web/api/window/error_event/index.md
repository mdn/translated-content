---
title: GlobalEventHandlers.onerror
slug: Web/API/Window/error_event
---

{{ ApiRef("HTML DOM") }}

Un manejador de eventos para errores en scripts en tiempo de ejecución.

Note that some/many `error` events do not trigger `window.onerror`, you have to listen for them specifically.

## Sintaxis

```js
window.onerror = funcRef;
```

### Parámetros

- `funcRef` es una referencia a una función. Cuando la función devuelva `true`, se prevendrá el disparado del manejador de eventos por defecto. Parámetros de la función:

  - Mensaje de error (string)
  - Url en la que el error fue lanzado (string)
  - Número de línea en la que el error fue lanzado (number)
  - Dentro de la línea en la que el error ocurrió, número de columna correspondiente (number)
  - [Error Object](/es/docs/Web/JavaScript/Reference/Global_Objects/Error) (object)

## Ejemplos

```js
// Example 1:

// Prevent error dialogs from displaying -which is the window's normal
// behavior- by overriding the default event handler for error events that
// go to the window.
window.onerror = null;

// Example 2:

var gOldOnError = window.onerror;
// Override previous handler.
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  if (gOldOnError)
    // Call previous handler.
    return gOldOnError(errorMsg, url, lineNumber);

  // Just let default handler run.
  return false;
};
```

## Notas

El evento de error es lanzado cuando ocurre un error en el script.

Cuando se use el marcado html en línea (\<body onerror="alert('an error occurred')>...), los argumentos son anónimos. Pueden ser referenciados usando desde `arguments[0]` hasta `arguments[2]`.

No hay llamante `Components.stack.caller` que recuperar. (Vea [**bug 355430**](https://bugzilla.mozilla.org/show_bug.cgi?id=355430).)

## Especificación

[JavaScript 1.1](http://devedge-temp.mozilla.org/library/manuals/2000/javascript/1.3/reference/handlers.html#1120097)
