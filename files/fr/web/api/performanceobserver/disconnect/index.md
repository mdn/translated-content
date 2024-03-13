---
title: PeformanceObserver.disconnect()
slug: Web/API/PerformanceObserver/disconnect
---

{{APIRef("Performance Timeline API")}}

La méthode **`disconnect()`** de l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) est utilisée pour empêcher l'observateur de performances de recevoir tout événement [d'entrée de performance](/fr/docs/Web/API/PerformanceEntry).

## Syntaxe

```js
performanceObserver.disconnect();
```

## Exemple

```js
const observer = new PerformanceObserver(function (list, obj) {
  let entries = list.getEntries();
  for (let i = 0; i < entries.length; i++) {
    // Traiter les événements "mark" et "frame"
  }
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perf_observer(list, observer) {
  // Traiter l'événement "measure".
  // ...
  // Désactiver les événements de performance supplémentaires
  observer.disconnect();
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
