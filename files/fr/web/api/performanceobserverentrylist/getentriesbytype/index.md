---
title: PerformanceObserverEntryList.getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
---

{{APIRef("Performance Timeline API")}}

La méthode **`getEntriesByType()`** de la [`PerformanceObserverEntryList`](/fr/docs/Web/API/PerformanceObserverEntryList) retourne une liste d'objets [d'entrée de performance](/fr/docs/Web/API/PerformanceEntry) explicitement _observés_ pour un [type d'entrée de performance](/fr/docs/Web/API/PerformanceEntry/entryType). Les membres de la liste sont déterminés par l'ensemble des [types d'entrées](/fr/docs/Web/API/PerformanceEntry/entryType) spécifiés dans l'appel à la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe). La liste est disponible dans la fonction de rappel de l'observateur (en tant que premier paramètre de la fonction de rappel).

> **Note :** Cette interface est exposée à [`Window`](/fr/docs/Web/API/Window) et [`Worker`](/fr/docs/Web/API/Worker).

## Syntaxe

```js
let entries = list.getEntriesByType(type);
```

### Paramètres

- _`type`_
  - : Le type d'entrée à récupérer, tel que « `frame` ». Les types d'entrée valides sont énumérés dans [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType).

### Valeur de retour

Une liste d'objets [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) explicitement _observés_ qui ont le `type` spécifié. Les éléments seront dans l'ordre chronologique basé sur les [`startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) des entrées. Si aucun objet n'a le `type` spécifié, ou si aucun argument n'est fourni, une liste vide est retournée.

## Exemple

```js
function print_perf_entry(pe) {
  console.log(
    "name: " +
      pe.name +
      "; entryType: " +
      pe.entryType +
      "; startTime: " +
      pe.startTime +
      "; duration: " +
      pe.duration,
  );
}

// Crée un observateur pour tous les types d'événements de performance
const observe_all = new PerformanceObserver(function (list, obs) {
  let perfEntries;

  // Imprime toutes les entrées
  perfEntries = list.getEntries();
  for (let i = 0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }

  // Imprime les entrées nommées "Begin" avec le type "mark".
  perfEntries = list.getEntriesByName("Begin", "mark");
  for (let i = 0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }

  // Imprime les entrées de type "mark".
  perfEntries = list.getEntriesByType("mark");
  for (let i = 0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// inscrire tous les types d'événements de performance
observe_all.observe({
  entryTypes: ["frame", "mark", "measure", "navigation", "resource", "server"],
});

const observe_frame = new PerformanceObserver(function (list, obs) {
  let perfEntries = list.getEntries();
  // Ne devrait avoir que des entrées "frame"
  for (let i = 0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// inscrire à l'événement "frame" uniquement
observe_frame.observe({ entryTypes: ["frame"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
