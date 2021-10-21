---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
tags:
  - API
  - Constructor
  - Constructeur
  - PerformanceObserver
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceObserver/PerformanceObserver
---
{{APIRef("Performance Timeline API")}}

Le constructeur **`PerformanceObserver()`** crée un nouvel objet [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) avec le `callback` d'observation donné. La fonction de rappel de l'observateur est invoquée lorsque des [événements d'entrée de performance](/fr/docs/Web/API/PerformanceEntry) sont répertoriés pour les [types d'entrées](/fr/docs/Web/API/PerformanceEntry/entryType) qui ont été enregistrés, via la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe).

## Syntaxe

```js
const observer = new PerformanceObserver(callback);
```

### Paramètres

- `callback`
  - : Une fonction de rappel qui sera invoquée lorsque des événements de performance _observés_ sont enregistrés. Lorsque la fonction de rappel est invoquée, son premier paramètre est une [liste des entrées de l'observateur de performance](/fr/docs/Web/API/PerformanceObserverEntryList) et le second paramètre est l'objet [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) courant.

### Valeur de retour

Un nouvel objet [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) qui appellera le `callback` spécifiée lorsque des événements de performance observés se produisent.

## Exemple

```js
const observer = new PerformanceObserver(function(list, obj) {
  let entries = list.getEntries();
  for (let i = 0; i < entries.length; i++) {
    // Traiter les événements "mark" et "frame"
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Traiter l'événement "measure"
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## Spécifications

| Spécification                                                                                                                                                | Statut                                                   | Commentaire                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| {{SpecName('Performance Timeline Level 2',
        '#idl-def-performanceobservercallback', 'PerformanceObserver()')}} | {{Spec2('Performance Timeline Level 2')}} | Définition initiale du constructeur `PerformanceObserver()`. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceObserver.PerformanceObserver")}}
