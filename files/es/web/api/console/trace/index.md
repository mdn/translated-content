---
title: Console.trace()
slug: Web/API/Console/trace
translation_of: Web/API/Console/trace
---
{{APIRef("Console API")}}{{Non-standard_header}}

Outputs a stack trace to the [Web Console](/es/docs/Tools/Web_Console).

{{AvailableInWorkers}}

Ver [Stack traces](/es/docs/Web/API/console#Stack_traces) en la documentación de {{domxref("console")}} para detalles y ejemplos.

## Sintaxis

    console.trace();

## Ejemplo

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

La siguiente indicador será mostrado en la consola:

    bar
    foo
    <anonymous>

## Especificaciones

| Specification                                                                                            | Status                           | Comment            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#consoletraceobject--object-", "console.trace()")}} | {{Spec2("Console API")}} | Initial definition |

## Compatibilidad con el navegador

{{Compat("api.console.trace")}}

## Ver tambien

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
