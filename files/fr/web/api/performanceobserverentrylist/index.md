---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
---

{{APIRef("Performance Timeline API")}}

L'interface **`PerformanceObserverEntryList`** est une liste d'[événements de performance](/fr/docs/Web/API/PerformanceEntry) qui ont été explicitement _observés_ via la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe).

> **Note :** Cette interface est exposée à [`Window`](/fr/docs/Web/API/Window) et [`Worker`](/fr/docs/Web/API/Worker).

## Méthodes

- [`PerformanceObserverEntryList.getEntries()`](/fr/docs/Web/API/PerformanceObserverEntryList/getEntries)
  - : Retourne une liste d'objets explicitement _observés_ de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) en fonction du _filtre_ donné.
- [`PerformanceObserverEntryList.getEntriesByType()`](/fr/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
  - : Retourne une liste d'objets explicitement _observés_ de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) du _type d'entrée_ donné.
- [`PerformanceObserverEntryList.getEntriesByName()`](/fr/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
  - : Retourne une liste d'objets explicitement _observés_ de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) en fonction du _nom_ et du _type d'entrée_ donnés.

## Exemple

```js
// Crée un observateur pour tous les types d'événements de performance
// la liste est de type PerformanceObserveEntryList
const observe_all = new PerformanceObserver(function (list, obs) {
  let perfEntries = list.getEntries();
  for (let i = 0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
    // faire quelque chose avec
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
