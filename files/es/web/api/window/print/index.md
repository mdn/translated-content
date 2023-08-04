---
title: Window.print()
slug: Web/API/Window/print
---

{{ ApiRef() }}

Abre el diálogo para imprimir el documento actual.

En la mayoría de navegadores, este método bloquea mientras el díalogo de impresión esté abierto, sin embargo, en algunas versiones recientes de Safari podría retornar de inmediato.

## Resumen

Abre el _Diálogo de Impresión_ para imprimir el documento actual.

## Sintaxis

```js
window.print();
```

## Notas

Empezando con Chrome 46.0 este método esta bloqueado dentro de un {{htmlelement("iframe")}} a menos que el atributo del contenedor tenga el valor `allow-modal`.

## Especificaciones

{{Specifications}}

## Ver también

- [Impresión](/en/Printing)
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}
