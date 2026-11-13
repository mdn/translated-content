---
title: Console.trace()
slug: Web/API/console/trace_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

Outputs a stack trace to the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

{{AvailableInWorkers}}

Ver [Stack traces](/es/docs/Web/API/console#stack_traces) en la documentación de {{domxref("console")}} para detalles y ejemplos.

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

- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
