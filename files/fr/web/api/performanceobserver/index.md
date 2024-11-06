---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
---

{{APIRef("Performance Timeline API")}}

L'interface **`PerformanceObserver`** est utilisée pour _observer_ les événements de mesure des performances et être notifié des nouvelles [entréés de performance](/fr/docs/Web/API/PerformanceEntry) lorsqu'elles sont enregistrées dans la _chronologie des performances_ du navigateur.

{{AvailableInWorkers}}

## Constructeur

- [`PerformanceObserver()`](/fr/docs/Web/API/PerformanceObserver/PerformanceObserver)
  - : Crée et retourne un nouvel objet `PerformanceObserver`.

## Méthodes

- [`PerformanceObserver.observe()`](/fr/docs/Web/API/PerformanceObserver/observe)
  - : Spécifie l'ensemble des [types d'entrées](/fr/docs/Web/API/PerformanceEntry/entryType) à observer. La fonction de rappel de l'observateur de performances sera invoquée lorsqu'une [entrée de performance](/fr/docs/Web/API/PerformanceEntry) est enregistrée pour l'un des `entryTypes` spécifiés.
- [`PerformanceObserver.disconnect()`](/fr/docs/Web/API/PerformanceObserver/disconnect)
  - : Arrête l'observation des [entrées de performances](/fr/docs/Web/API/PerformanceEntry).
- [`PerformanceObserver.takeRecords()`](/fr/docs/Web/API/PerformanceObserver/takeRecords) {{Experimental_Inline}}
  - : Renvoie la liste actuelle des [entrées de performances](/fr/docs/Web/API/PerformanceEntry) stockées dans l'observateur de performance, en la vidant.

## Exemple

```js
function perf_observer(list, observer) {
  // Traiter l'événement "measure".
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`MutationObserver`](/fr/docs/Web/API/MutationObserver)
- [`ResizeObserver`](/fr/docs/Web/API/ResizeObserver)
- [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver)
