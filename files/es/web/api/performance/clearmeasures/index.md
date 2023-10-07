---
title: performance.clearMeasures()
slug: Web/API/Performance/clearMeasures
---

{{APIRef("User Timing API")}}

El método **`clearMeasures()`** elimina _la medida llamada_ del búfer de rendimiento de entrada, si el método es llamado sin argumentos, todos los {{domxref("PerformanceEntry","performance entries")}} con un {{domxref("PerformanceEntry.entryType","entry type")}} de "`measure`" serán eliminados del búfer de rendimiento de entrada.

{{AvailableInWorkers}}

## Sintaxis

```
performance.clearMeasures();
performance.clearMeasures(name);
```

### Argumentos

- nombre {{optional_inline}}
  - : Un {{domxref("DOMString")}} representando el nombre de la marca de tiempo. Si el argumento se omite, todos los {{domxref("PerformanceEntry","performance entries")}} con un {{domxref("PerformanceEntry.entryType","entry type")}} de "`measure`" serán eliminados.

### Valor de retorno

Ninguno

## Ejemplo

En el siguiente ejemplo se muestran los dos usos del método `clearMeasures()` .

```js
// Create a small helper to show how many PerformanceMeasure entries there are.
function logMeasureCount() {
  console.log(
    "Found this many entries: " +
      performance.getEntriesByType("measure").length,
  );
}

// Create a bunch of measures.
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

logMeasureCount(); // "Found this many entries: 5"

// Delete just the "from navigation" PerformanceMeasure entries.
performance.clearMeasures("from navigation");
logMeasureCount(); // "Found this many entries: 3"

// Delete all of the PerformanceMeasure entries.
performance.clearMeasures();
logMeasureCount(); // "Found this many entries: 0"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
