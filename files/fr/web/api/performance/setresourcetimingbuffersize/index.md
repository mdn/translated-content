---
title: performance.setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
---

{{APIRef("Resource Timing API")}}

La méthode **`setResourceTimingBufferSize()`** définit la taille du tampon mémoire du navigateur dans lequel sont stockés les objets de mesures de performance de type `"resource"` (voir {{domxref("PerformanceEntry.entryType", "entryType")}}).

La taille recommandée du tampon de synchronisation des ressources d'un navigateur est au moins 150 objets `{{domxref("PerformanceEntry")}}`.

{{AvailableInWorkers}}

## Syntaxe

```js
performance.setResourceTimingBufferSize(maxSize);
```

### Arguments

- `maxSize`
  - : Un nombre (cf. {{jsxref("Number")}}) représentant le nombre maximal d'objets {{domxref("PerformanceEntry", "d'entrée de performance","",1)}} avec le type `"resource"` que le navigateur doit contenir dans le tampon correspondant.

### Valeur de retour

Aucune.

## Exemple

```js
function setResourceTimingBufferSize(maxSize) {
  if (performance === undefined) {
    log("Le navigateur ne prend pas en charge les performances Web");
    return;
  }
  var supported = typeof performance.setResourceTimingBufferSize == "function";
  if (supported) {
    log("... Performance.setResourceTimingBufferSize() = Oui");
    performance.setResourceTimingBufferSize(maxSize);
  } else {
    log("... Performance.setResourceTimingBufferSize() = NON pris en charge");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
