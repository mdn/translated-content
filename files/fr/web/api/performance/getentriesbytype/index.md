---
title: performance.getEntriesByType()
slug: Web/API/Performance/getEntriesByType
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance web
translation_of: Web/API/Performance/getEntriesByType
---
{{APIRef("Performance Timeline API")}}

La méthode **`getEntriesByName()`** renvoie une liste de tous les objets {{domxref("PerformanceEntry")}} pour le type donné. Les entrées de performance auront pu être créées au préalable avec des _marqueurs_ ou des _mesures_ de performance (par exemple en appelant la méthode {{domxref("Performance.mark", "mark()")}}) à des moments explicites.

{{AvailableInWorkers}}

## Syntaxe

```js
  let entries = window.performance.getEntriesByType(type);
```

### Arguments

- `type`
  - : Le type d'entrée à récupérer tel que « `mark` ». Les types d'entrées valides sont listés dans {{domxref("PerformanceEntry.entryType")}}.

### Valeur de retour

- `entries`
  - : Une liste de tous les objets {{domxref("PerformanceEntry")}} ayant le _type_ spécifié. Les éléments seront triés dans l'ordre chronologique basé sur les propriétés {{domxref("PerformanceEntry.startTime", "startTime")}} des entrées. Si aucun objet ne possède le type spécifié, ou si aucun argument n'est fourni, une liste vide est renvoyée.

## Exemple

```js
function usePerformanceEntryMethods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Non pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  performance.mark("Begin");
  doWork(100000);
  performance.mark("End");
  doWork(200000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Utilise getEntries(name, entryType) pour obtenir des entrées spécifiques.
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i < p.length; i++) {
    log("Begin[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Utilise getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (var i=0; i < p.length; i++) {
    log("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i < p.length; i++) {
    log("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
```

## Spécifications

| Spécification                                                                                                                                        | Statut                                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performance-getentriesbytype',
        'getEntriesByType()')}} | {{Spec2('Performance Timeline Level 2')}} |                      |
| {{SpecName('Performance Timeline', '#dom-performance-getentriesbytype',
        'getEntriesByType()')}}             | {{Spec2('Performance Timeline')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Performance.getEntriesByType")}}
