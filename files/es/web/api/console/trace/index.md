---
title: Console.trace()
slug: Web/API/console/trace
---

{{APIRef("Console API")}}{{Non-standard_header}}

Outputs a stack trace to the [Web Console](/es/docs/Tools/Web_Console).

{{AvailableInWorkers}}

Ver [Stack traces](/es/docs/Web/API/console#Stack_traces) en la documentación de {{domxref("console")}} para detalles y ejemplos.

## Sintaxis

```
console.trace();
```

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

```
bar
foo
<anonymous>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
