---
title: performance.mark()
slug: Web/API/Performance/mark
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance web
translation_of: Web/API/Performance/mark
---
{{APIRef("User Timing API")}}

La méthode **`mark()`** crée un {{domxref("DOMHighResTimeStamp", "timestamp")}} dans le _tampon d'entrée de performance_ du navigateur avec le nom donné en argument.

L'horodatage ainsi défini par l'application peut être récupéré par l'une des méthodes `getEntries*()` de l'interface {{domxref("Performance")}} ({{domxref("Performance.getEntries", "getEntries()")}}, {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} ou {{domxref("Performance.getEntriesByType", "getEntriesByType()")}}).

La méthode `mark()` stocke ses données en interne sous la forme d'objets {{domxref("PerformanceEntry")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
  performance.mark(name);
```

### Arguments

- `name`
  - : Une chaîne de caractères ({{domxref("DOMString")}}) représentant le nom du marqueur. Si le nom donné à cette méthode existe déjà dans l'interface {{domxref("PerformanceTiming")}}, une exception {{jsxref("SyntaxError")}} est levée.

### Valeur de retour

Aucune.

\>

## Exemple

L'exemple suivant montre comment utiliser `mark()` pour créer et récupérer des entrées {{domxref("PerformanceMark")}}.

```js
// Crée un ensemble de marqueurs.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// Obtient toutes les entrées de PerformanceMark.
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 6

// Obtient toutes les entrées "monkey" de PerformanceMark.
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries.length);
// 2

// Efface tous les marqueurs.
performance.clearMarks();
```

## Spécifications

| Spécification                                                                                | Statut                                       | Commentaire                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| {{SpecName('User Timing Level 2', '#dom-performance-mark', 'mark()')}} | {{Spec2('User Timing Level 2')}} | Clarification du modèle de traitement `mark()`. |
| {{SpecName('User Timing', '#dom-performance-mark', 'mark()')}}         | {{Spec2('User Timing')}}             | Définition initiale.                            |

## Compatibilité des navigateurs

{{Compat("api.Performance.mark")}}
