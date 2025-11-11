---
title: performance.clearMarks()
slug: Web/API/Performance/clearMarks
---

{{APIRef("User Timing API")}}

El método **`clearMarks()`** elimina la _marca llamada_ del búfer de rendimiento de entrada del navegador. Si el método es llamado sin argumentos, todos los {{domxref("PerformanceEntry","performance entries")}} con un {{domxref("PerformanceEntry.entryType","entry type")}} de "`mark`" serán eliminados del búfer de rendimiento de entrada.

{{AvailableInWorkers}}

## Sintaxis

```
performance.clearMarks();
performance.clearMarks(name);
```

### Argumentos

- nombre {{optional_inline}}
  - : Un {{domxref("DOMString")}} representando el nombre de la marca de tiempo. Si este argumento es omitido, todos los {{domxref("PerformanceEntry","performance entries")}} con un {{domxref("PerformanceEntry.entryType","entry type")}} de "`mark`" serán eliminados.

### Valor de retorno

Ninguno

## Ejemplo

El siguiente ejemplo muestra ambos usos del método `clearMarks()`.

```js
// Create a small helper to show how many PerformanceMark entries there are.
function logMarkCount() {
  console.log(
    "Found this many entries: " + performance.getEntriesByType("mark").length,
  );
}

// Create a bunch of marks.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

logMarkCount(); // "Found this many entries: 6"

// Delete just the "squirrel" PerformanceMark entries.
performance.clearMarks("squirrel");
logMarkCount(); // "Found this many entries: 4"

// Delete all of the PerformanceMark entries.
performance.clearMarks();
logMarkCount(); // "Found this many entries: 0"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
