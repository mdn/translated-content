---
title: performance.clearMeasures()
slug: Web/API/Performance/clearMeasures
---

{{APIRef("User Timing API")}}

La méthode **`clearMeasures()`** supprime les _mesures nommées_ du tampon d'entrée des performances du navigateur. Si la méthode est appelée sans arguments, toutes les {{domxref("PerformanceEntry", "entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entryType")}} de « `measure` » seront supprimées du tampon d'entrée de performance.

{{AvailableInWorkers}}

## Syntaxe

```js
performance.clearMeasures();
performance.clearMeasures(name);
```

### Arguments

- name {{optional_inline}}
  - : Un {{domxref("DOMString")}} représentant le nom de l'horodatage. Si cet argument est omis, toutes les {{domxref("PerformanceEntry","entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entrType")}} de « `measure` » seront supprimés.

### Valeur de retour

Aucune.

## Exemple

L'exemple suivant montre les deux utilisations de la méthode `clearMeasures()`.

```js
// Crée une petite aide pour montrer combien d'entrées PerformanceMeasure il y a.
function logMeasureCount() {
  console.log(
    "J'ai trouvé ces nombreuses entrées : " +
      performance.getEntriesByType("measure").length,
  );
}

// Crée un ensemble de mesures.
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

logMeasureCount(); // "J'ai trouvé ces nombreuses entrées : 5"

// Supprime uniquement les entrées PerformanceMeasure "from navigation".
performance.clearMeasures("from navigation");
logMeasureCount(); // "J'ai trouvé ces nombreuses entrées : 3"

// Supprime toutes les entrées de PerformanceMeasure.
performance.clearMeasures();
logMeasureCount(); // "J'ai trouvé ces nombreuses entrées : 0"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
