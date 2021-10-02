---
title: performance.getEntriesByName()
slug: Web/API/Performance/getEntriesByName
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance web
translation_of: Web/API/Performance/getEntriesByName
---
{{APIRef("Performance Timeline API")}}

La méthode **`getEntriesByName()`** renvoie une liste de tous les objets {{domxref("PerformanceEntry")}} ayant un nom (et éventuellement un type) donné(s). Les entrées de performance auront pu être créées au préalable avec des _marqueurs_ ou des _mesures_ de performance (par exemple en appelant la méthode {{domxref("Performance.mark", "mark()")}}) à des moments explicites.

{{AvailableInWorkers}}

## Syntaxe

```js
  entries = window.performance.getEntriesByName(name, type);
```

### Arguments

- `name`
  - : Le nom de l'entrée à récupérer.
- `type` {{optional_inline}}
  - : Le type d'entrée à récupérer tel que « `mark` ». Les types d'entrées valides sont listés dans {{domxref("PerformanceEntry.entryType")}}.

### Valeur de retour

- `entries`
  - : Une liste de tous les objets {{domxref("PerformanceEntry")}} ayant le nom et le type spécifiés. Si l'argument `type` n'est pas spécifié, seul le nom (`name`) sera utilisé pour déterminer les entrées à renvoyer. Les éléments seront dans l'ordre chronologique basé sur les {{domxref("PerformanceEntry.startTime", "startTime")}} des entrées. Si aucun objet ne répond aux critères spécifiés, une liste vide est retournée.

## Exemple

```js
function use_PerformanceEntry_methods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Non pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Utilise getEntries(name, entryType) pour obtenir des entrées spécifiques
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i < p.length; i++) {
    log("Begin[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Utilise getEntriesByType() pour obtenir toutes les entrées "mark"
  p = performance.getEntriesByType("mark");
  for (var i=0; i < p.length; i++) {
    log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Utilisez getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i < p.length; i++) {
    log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
```

## Spécifications

| Spécification                                                                                                                                        | Statut                                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performance-getentriesbyname',
        'getEntriesByName()')}} | {{Spec2('Performance Timeline Level 2')}} |                      |
| {{SpecName('Performance Timeline', '#dom-performance-getentriesbyname',
        'getEntriesByName()')}}             | {{Spec2('Performance Timeline')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Performance.getEntriesByName")}}
