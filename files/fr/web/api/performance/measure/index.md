---
title: performance.measure()
slug: Web/API/Performance/measure
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance web
  - Web Workers
translation_of: Web/API/Performance/measure
---
{{APIRef("User Timing API")}}

La méthode **`measure()`** crée un {{domxref("DOMHighResTimeStamp", "timestamp")}} nommé dans le _tampon d'entrée de performance_ du navigateur entre deux marqueurs, l'heure de début de navigation ou l'heure actuelle. Lors d'une mesure entre deux marqueurs, on aura un _marqueur de début_ et un _marqueur de fin_. L'horodatage ainsi nommé est désigné comme une _mesure_.

La mesure correspondante peut être récupérée par l'une des méthodes suivantes de l'interface {{domxref("Performance")}} : {{domxref("Performance.getEntries", "getEntries()")}}, {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} ou {{domxref("Performance.getEntriesByType", "getEntriesByType()")}}.

L'{{domxref("PerformanceEntry", "entrée de performance","",1)}} créée par `measure()` aura les valeurs de propriété suivantes :

- {{domxref("PerformanceEntry.entryType","entryType")}} : `"measure"`.
- {{domxref("PerformanceEntry.name","name")}} : le nom passé en argument lors de la création de la mesure (cf. ci-après).
- {{domxref("PerformanceEntry.startTime","startTime")}} : fixé selon le marqueur de départ (type {{domxref("DOMHighResTimeStamp")}}).
- {{domxref("PerformanceEntry.duration","duration")}} : fixé à un {{domxref("DOMHighResTimeStamp")}} qui correspond à la durée de la mesure (généralement, l'horodatage du marqueur de fin moins l'horodatage du marqueur de début).

{{AvailableInWorkers}}

## Syntaxe

```js
  performance.measure(name);
  performance.measure(name, startMark);
  performance.measure(name, startMark, endMark);
  performance.measure(name, undefined, endMark);
```

### Arguments

- `name`
  - : Une {{domxref("DOMString")}} représentant le nom de la mesure.
- `startMark` {{optional_inline}}
  - : Une {{domxref("DOMString")}} représentant le nom du marqueur de départ de la mesure. Peut également être le nom d'une propriété {{domxref("PerformanceTiming")}}. Si elle est omise, l'heure de début sera celle de la navigation.
- `endMark` {{optional_inline}}
  - : Une {{domxref("DOMString")}} représentant le nom du marqueur de fin de la mesure. Peut également être le nom d'une propriété {{domxref("PerformanceTiming")}}. Si elle est omise, le temps actuel est utilisé.

### Valeur de retour

Aucune

## Exemple

L'exemple suivant montre comment `measure()` est utilisé pour créer une nouvelle _mesure_ d'{{domxref("PerformanceEntry", "entrée de performance","",1)}} dans le tampon d'entrée de performance du navigateur.

```js
const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// Exécute des temporisations imbriquées et crée un PerformanceMark pour chacune d'entre elles.
performance.mark(markerNameA);
setTimeout(function() {
  performance.mark(markerNameB);
  setTimeout(function() {

    // Crée une variété de mesures.
    performance.measure("mesure a à b", markerNameA, markerNameB);
    performance.measure("mesure a à maintenant", markerNameA);
    performance.measure("mesure du début de la navigation à b", undefined, markerNameB);
    performance.measure("mesure du début de la navigation à maintenant");

    // Sort toutes les mesures.
    console.log(performance.getEntriesByType("measure"));

    // Enfin, nettoye les entrées.
    performance.clearMarks();
    performance.clearMeasures();
  }, 1000);
}, 1000);
```

## Spécifications

| Spécification                                                                                        | Statut                                       | Commentaire                                          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| {{SpecName('User Timing Level 2', '#dom-performance-measure', 'measure()')}} | {{Spec2('User Timing Level 2')}} | Clarification du modèle de traitement de `mesure()`. |
| {{SpecName('User Timing', '#dom-performance-measure', 'measure()')}}         | {{Spec2('User Timing')}}             | Définition initiale.                                 |

## Compatibilité des navigateurs

{{Compat("api.Performance.measure")}}
