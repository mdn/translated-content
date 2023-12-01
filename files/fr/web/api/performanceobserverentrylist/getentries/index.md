---
title: PerformanceObserverEntryList.getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
---

{{APIRef("Performance Timeline API")}}

La méthode **`getEntries()`** de l'interface [`PerformanceObserverEntryList`](/fr/docs/Web/API/PerformanceObserverEntryList) retourne une liste d'objets explicitement _observés_ d'[entrées de performance](/fr/docs/Web/API/PerformanceEntry) pour un filtre donné. Les membres de la liste sont déterminés par l'ensemble des [types d'entrée](/fr/docs/Web/API/PerformanceEntry/entryType) spécifiés dans l'appel à la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe). La liste est disponible dans la fonction de rappel de l'observateur (en tant que premier paramètre de la fonction de rappel).

> **Note :** Cette interface est exposée à [`Window`](/fr/docs/Web/API/Window) et [`Worker`](/fr/docs/Web/API/Worker).

## Syntaxe

```js
let entries = list.getEntries();
entries = list.getEntries(PerformanceEntryFilterOptions);
```

Utilisation spécifique :

```js
entries = list.getEntries({ name: "entry_name", entryType: "mark" });
```

### Paramètres

- `PerformanceEntryFilterOptions` {{optional_inline}}

  - : Est un dictionnaire `PerformanceEntryFilterOptions`, comportant les champs suivants :

    - `"name"`, le nom d'une entrée de performance.
    - `"entryType"`, le type d'entrée. Les types d'entrée valides sont énumérés dans la propriété [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType).
    - `"initiatorType"`, le type de la ressource initiatrice (par exemple un élément HTML). Les valeurs sont définies par la propriété [`PerformanceResourceTiming.initiatorType`](/fr/docs/Web/API/PerformanceResourceTiming/initiatorType).

    Ce paramètre n'est actuellement pas pris en charge par Chrome ou Opera.

### Valeur de retour

Une liste d'objets [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) explicitement _observés_ qui répondent aux critères du filtre. Les éléments seront dans l'ordre chronologique basé sur les [`startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) des entrées. Si aucun objet répondant au filtre n'est trouvé, une liste vide est renvoyée. Si aucun argument n'est fourni, toutes les entrées sont renvoyées.

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
