---
title: PerformanceObserver.takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
tags:
  - API
  - Method
  - Méthode
  - Performance Observer API
  - PerformanceObserver
  - Reference
  - observers
  - takeRecords()
translation_of: Web/API/PerformanceObserver/disconnect
---
{{APIRef("Performance Timeline API")}}

La méthode **`takeRecords()`** de l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) renvoie la liste actuelle des [entrées de performance](/fr/docs/Web/API/PerformanceEntry) stockées dans l'observateur de performance, en la vidant.

## Syntaxe

```js
let performanceEntryList = performanceObserver.takeRecords();
```

### Paramètres

Aucun.

### Valeur de retour

Une liste d'objets [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry).

## Exemple

```js
const observer = new PerformanceObserver(function(list, obj) {
  let entries = list.getEntries();
  for (let i= 0; i < entries.length; i++) {
    // Traiter les événements "mark" et "frame"
  }
});
observer.observe({entryTypes: ["mark", "frame"]});
let records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## Spécifications

| Spécification                                                                                                                                    | Statut                                                   | Commentaire                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------- |
| {{SpecName('Performance Timeline Level 2',
        '#dom-performanceobserver-takerecords', 'takeRecords()')}} | {{Spec2('Performance Timeline Level 2')}} | Définition initiale de la méthode `takeRecords()`. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceObserver.takeRecords")}}
